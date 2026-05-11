"use server";

import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";
import {  z } from "zod";

const ResetPasswordSchema = z.object({
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  confirmPassword: z.string().min(6, "تکرار رمز عبور الزامی است"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "رمز عبور با تکرار آن مطابقت ندارد",
  path: ["confirmPassword"],
});

export interface VerifyResult {
  success: boolean;
  message: string;
  data?: any;
}

export const forgetPasswordResetCode = async (prevState: any, formData: FormData) => {
  const password  = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const validation = ResetPasswordSchema.safeParse({ password, confirmPassword });
  if (!validation.success) {
    return {
      success: false,
      message: "رمز عبور با تکرار آن مطابقت ندارد",
    };
  }

  try {
    const verificationEmail = await getServerSideCookie("verificationEmail");
    const resetCode = await getServerSideCookie("resetCode");
    const res = await instance.post("/api/auth/forgot-password/reset", {
        email:verificationEmail,
      code:resetCode,
      newPassword: validation.data.password,
    });

    const dataResponse = res.data || res;

      return {
        success: true,
        message: dataResponse.message || "کد تایید شد",
        data: dataResponse,
      };
   
  } catch (error: any) {
    console.error("Error message:", error.message);
    console.error("Error response data:", error.response?.data);
    if (error.response?.status === 400) {
      return {
        success: false,
        message: error.response?.data?.message || "کد وارد شده صحیح نیست یا منقضی شده است",
      };
    }
    
    if (error.response?.status === 404) {
      return {
        success: false,
        message: "درخواست یافت نشد. لطفاً دوباره تلاش کنید.",
      };
    }
    
    if (error.response?.status === 500) {
      return {
        success: false,
        message: "خطای سرور. لطفاً چند دقیقه دیگر تلاش کنید.",
      };
    }
    
    return {
      success: false,
      message: error.response?.data?.message || error.message || "خطا در تایید کد",
    };
  }
};
