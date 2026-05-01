"use server";

import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";

const EmailSchema = z.object({
  email: z.email("فرمت ایمیل صحیح نیست"), 
});

export interface IResponse {
  message: string;
}

export const sendEmail = async (prevState: IResponse, formData: FormData) => {
  const email = formData.get("email");

  console.log("📧 Email received:", email);

  const validationResult = EmailSchema.safeParse({ email });

  if (!validationResult.success) {
    const errorMessage = validationResult.error.message;
    return { message: "فرمت ایمیل صحیح نیست" };
  }

  const validatedEmail = validationResult.data.email;

  try {
    const res = await instance.post("/api/auth/register", {
      email: validatedEmail,
    });
    console.log("✅ Response:", res.data);
    return { message: "کد تایید ارسال شد" };
  } catch (error: any) {
    console.log("❌ Error:", error.response?.data || error.message);
    return { message: error.response?.data?.message || "network error" };
  }
};