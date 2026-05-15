"use server";

import {
  deleteServerSideCookie,
  getServerSideCookie,
  setServerSideCookie,
} from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";
import { IUser } from "@/src/core/types/IRegister";
import { setClientCookie } from "@/src/utils/helper/cookies/clientCookie/clientSideCookie";
import Jwt_decode from "@/src/utils/helper/jwtToken/Jwt_decode";

const FinalStepSchema = z.object({
  phoneNumber: z
    .string()
    .min(11, "شماره تلفن باید ۱۱ رقم باشد")
    .max(11, "شماره تلفن باید ۱۱ رقم باشد"),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .max(20, "رمز عبور حداکثر ۲۰ کاراکتر می‌تواند باشد"),
});
export interface RegisterResponse {
  message: string;
  user: IUser;
  accessToken?: string;
  refreshToken?: string;
}
export interface FinalStepResult {
  success: boolean;
  message: string;
  data?: RegisterResponse;
}

export const finalStep = async (prevState: any, formData: FormData) => {
  const phoneNumber = formData.get("phoneNumber");
  const password = formData.get("password");
  const validation = FinalStepSchema.safeParse({
    phoneNumber: phoneNumber?.toString(),
    password: password?.toString(),
  });
  if (!validation.success) {
    return {
      success: false,
      message: "شماره تلفن صحیح نیست",
    };
  }

  try {
    const tempUserId = await getServerSideCookie("tempUserId");
    // const PhoneNumberCode = await getServerSideCookie("PhoneNumberCode");

    if (!tempUserId) {
      return {
        success: false,
        message: "نشست منقضی شده است. لطفاً دوباره ایمیل خود را وارد کنید",
      };
    }
    const res = await instance.post("/api/auth/complete-registration", {
      userId: parseInt(tempUserId),
      password: validation.data.password,
      PhoneNumberCode: validation.data.phoneNumber,
    });

    const dataResponse = res.data || res;
    const decoded: any = Jwt_decode(dataResponse.accessToken);
    const userInfo = {
      id: decoded?.id,
      email: decoded?.email,
      role: decoded?.role,
      name: decoded?.name,
      profilePicture: decoded?.profilePicture,
    };

    if (dataResponse.accessToken) {
      await setServerSideCookie("ServerAccessToken", dataResponse.accessToken);
      await setServerSideCookie("refreshToken", dataResponse.refreshToken);
      await setServerSideCookie("userId", userInfo.id.toString());
      await setServerSideCookie("userRole", userInfo.role);
      await setServerSideCookie("userName", userInfo.name);
      await setServerSideCookie("userEmail", userInfo.email);

      setClientCookie("accessToken", dataResponse.accessToken);
      setClientCookie("refreshToken", dataResponse.refreshToken);
      setClientCookie("userId", userInfo.id.toString());
      setClientCookie("userRole", userInfo.role);
      setClientCookie("userName", userInfo.name);
      setClientCookie("userEmail", userInfo.email);

      if (userInfo.profilePicture) {
        setClientCookie("userProfilePicture", userInfo.profilePicture);
      }
    }
    if (dataResponse.success || dataResponse.message?.includes("success")) {
      return {
        success: true,
        message: dataResponse.message || "تایید شد",
        data: dataResponse,
      };
    } else {
      return {
        success: false,
        message: dataResponse.message || "مشکلی رخ داد",
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
