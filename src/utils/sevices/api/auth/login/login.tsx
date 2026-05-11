"use server";

import {
  setServerSideCookie,
} from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";
import { ILoginUser } from "@/src/core/types/IRegister";

const LoginSchema = z.object({
  email: z.string().email("فرمت ایمیل صحیح نیست"),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .max(20, "رمز عبور حداکثر ۲۰ کاراکتر می‌تواند باشد"),
});

export interface LoginResponse {
  message?: string;  
  user?: ILoginUser; 
  accessToken?: string;
  refreshToken?: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
  data?: LoginResponse;
}

export const Login = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  
  const validation = LoginSchema.safeParse({
    email: email?.toString(),
    password: password?.toString(),
  });
  
  if (!validation.success) {
    return {
      success: false,
      message: "فرمت صحیح نیست",
    };
  }

  try {
    const res = await instance.post("/api/auth/login", {
      email: validation.data.email,
      password: validation.data.password,
    });

    const dataResponse = res.data || res;
    console.log("=== Full Response ===");
    console.log("dataResponse:", JSON.stringify(dataResponse, null, 2));

    if (dataResponse.accessToken) {
      await setServerSideCookie("serverAccessToken", dataResponse.accessToken);
      await setServerSideCookie("refreshToken", dataResponse.refreshToken);
      
      
      return {
        success: true,  
        message: "ورود موفقیت‌آمیز بود",
        data: dataResponse,
      };
    } else {
      return {
        success: false,
        message: dataResponse.message || "خطا در ورود - توکن دریافت نشد",
      };
    }
    
  } catch (error: any) {
    console.error("Error message:", error.message);
    console.error("Error response data:", error.response?.data);
    
    return {
      success: false,
      message: error.response?.data?.message || error.message || "خطا در ورود",
    };
  }
};