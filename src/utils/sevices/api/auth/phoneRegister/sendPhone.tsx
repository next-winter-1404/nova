"use server";

import { setServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";

const PhoneNumberSchema = z.object({
  phone: z
    .string()
    .min(11, "شماره تلفن باید ۱۱ رقم باشد")
    .max(11, "شماره تلفن باید ۱۱ رقم باشد"),
});

export interface SendPhoneResult {
  success: boolean;
  message: string;
  data?: {
    tempUserId: number;
    verificationCode: string;
  };
}

export const sendPhone = async (
  prevState: SendPhoneResult,
  formData: FormData
): Promise<SendPhoneResult> => {
  const phone = formData.get("phone");

  const validationResult = PhoneNumberSchema.safeParse({ phone: phone?.toString() });
  if (!validationResult.success) {
    return {
      success: false,
      message: "قرمت شماره صحصح نیست", // ✅ پیام دقیق
    };
  }

  try {
    const res = await instance.post("/api/auth/register-phone", {
      phoneNumber: validationResult.data.phone,
    });

    const dataResponse = res.data || res;
    
    if (dataResponse.tempUserId && dataResponse.verificationCode) {
      await setServerSideCookie("tempUserId", dataResponse.tempUserId.toString());
      await setServerSideCookie("numberVerificationCode", dataResponse.verificationCode);
      await setServerSideCookie("phonenumber", validationResult.data.phone);
    }
    
    return {
      success: true,
      message: dataResponse.message || "کد تایید ارسال شد",
      data: {
        tempUserId: dataResponse.tempUserId,
        verificationCode: dataResponse.verificationCode,
      },
    };
  } catch (error: any) {
   
    
    return {
        success: false,
        message: error.response?.data?.message || "خطا در ارتباط با سرور",
      };
      
  }
};