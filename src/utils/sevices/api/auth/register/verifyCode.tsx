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

export const verifyCode = async (prevState: any, formData: FormData) => {
  const code = formData.get("verificationCode");
  const validation = VerificationSchema.safeParse({ code });
  if (!validation.success) {
    return {
      success: false,
      message: "پسوورد صحیح نیست",
    };
  }

  try {
    const tempUserId = await getServerSideCookie("tempUserId");
    // const verificationCode = await getServerSideCookie("verificationCode");

    if (!tempUserId) {
      return {
        success: false,
        message: "نشست منقضی شده است. لطفاً دوباره ایمیل خود را وارد کنید",
      };
    }
    const res = await instance.post("/api/auth/verify-email", {
      tempUserId: parseInt(tempUserId),
      verificationCode: validation.data.code,
    });

    const dataResponse = res.data || res;

    if (dataResponse.success || dataResponse.message?.includes("success")) {
      return {
        success: true,
        message: dataResponse.message || "کد تایید شد",
        data: dataResponse,
      };
    } else {
      return {
        success: false,
        message: dataResponse.message || "کد وارد شده صحیح نیست",
      };
    }
  } catch (error: any) {
    console.error("Error message:", error.message);
    console.error("Error response data:", error.response?.data);
    return {
      success: false,
      message: error.response || "خطا در تایید کد",
    };
  }
};
