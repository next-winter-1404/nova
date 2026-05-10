"use server";

import { setServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";

const EmailSchema = z.object({
  email: z.email("فرمت ایمیل صحیح نیست"),  
});

export interface SendEmailResult {
  success: boolean;
  message: string;
  data?: {
    resetCode: string;
    email?: string;
  };
}

export const RequestPassword = async (
  prevState: SendEmailResult,
  formData: FormData
): Promise<SendEmailResult> => {
  const email = formData.get("email");

  const validationResult = EmailSchema.safeParse({ email: email?.toString() });
  if (!validationResult.success) {
    return {
      success: false,
      message: "فرمت ایمیل صحیح نیست"
    };
  }

  try {
    const res = await instance.post("/api/auth/forgot-password/request", {
      email: validationResult.data.email,
    });

    const dataResponse = res.data || res;
    // console.log("Response:", dataResponse);

    if (dataResponse.resetCode) {
      await setServerSideCookie("resetCode", dataResponse.resetCode);
      await setServerSideCookie("verificationEmail", validationResult.data.email);
    }
    
    return {
      success: true,
      message: dataResponse.message || "کد تایید ارسال شد",
      data: {
        resetCode: dataResponse.resetCode,
        email: validationResult.data.email,
      },
    };
  } catch (error: any) {
    console.error("Error message:", error.message);
    console.error("Error response data:", error.response?.data);
    
    const errorMessage = error.response?.data?.message || 
                         error.response?.data?.error ||
                         "خطا در ارسال کد";
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};