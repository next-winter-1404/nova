"use server";

import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";
import {  z } from "zod";

const VerificationSchema = z.object({
  code: z.string().min(1,"پسوورد صحیح نیست"),
});

export interface VerifyResult {
  success: boolean;
  message: string;
  data?: any;
}

export const forgetPasswordVerifyCode = async (prevState: any, formData: FormData) => {
  const code = formData.get("verificationCode");
  const validation = VerificationSchema.safeParse({ code });
  if (!validation.success) {
    return {
      success: false,
      message: "پسوورد صحیح نیست",
    };
  }

  try {
    const verificationEmail = await getServerSideCookie("verificationEmail");
    // console.log("----verificationEmail from cookie:", verificationEmail);
    const res = await instance.post("/api/auth/forgot-password/verify", {
      email:verificationEmail,
      code: validation.data.code.toString(),
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
