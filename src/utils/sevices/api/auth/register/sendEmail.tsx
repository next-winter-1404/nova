"use server";

import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";

const EmailSchema = z.object({
  email: z.email("فرمت ایمیل صحیح نیست"),
});

export interface SendEmailResult {
  success: boolean;
  message: string;
  data?: {
    tempUserId: number;
    verificationCode: string;
    email?: string;
  };
};

export const sendEmail = async (
  prevState: SendEmailResult,
  formData: FormData
): Promise<SendEmailResult> => {
  const email = formData.get("email");

  const validationResult = EmailSchema.safeParse({ email });
  if (!validationResult.success) {
    return {
      success: false,
      message: "فرمت ایمیل صحیح نیست",
    };
  }

  try {
    const res = await instance.post("/api/auth/register", {
      email: validationResult.data.email,
    });
    const dataResponse = res.data || res;

    return {
      success: true,
      message: "کد تایید ارسال شد",
      data: {
        tempUserId: dataResponse.tempUserId,
        verificationCode: dataResponse.verificationCode,
        email: validationResult.data.email,
      },
    };
  } catch (error: any) {
    console.log("   - Full error:", error);
    console.log("   - errorResponse:", error.response);
    return {
      success: false,
      message: error.response|| "خطا در ارسال کد",
    };
  }
};