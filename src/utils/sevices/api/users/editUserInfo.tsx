"use server";

import { IUser } from "@/src/core/types/IUser";
import { getServerSideCookie, setServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";

export interface FinalResult {
  success: boolean;
  message: string;
  data?: IUser;
}

export const editUserInfo = async (prevState: any, formData: FormData):Promise<FinalResult> => {
  const phoneNumber = formData.get("phoneNumber");
  const lastName = formData.get("lastName");
  const firstName = formData.get("firstName");
  const email = formData.get("email")||null;

  try {
    const userId = await getServerSideCookie("userId");

    if (!userId) {
      return {
        success: false,
        message: "نشست منقضی شده است. لطفاً دوباره ایمیل خود را وارد کنید",
      };
    }
    const res = await instance.put(`/api/users/${userId}`, {
   
      lastName: lastName,
      phoneNumber: phoneNumber,
      firstName: firstName,
      email: email,
    });

    const dataResponse = res.data;

    if (dataResponse) {
        await setServerSideCookie("userName", `${firstName} ${lastName}`);
        await setServerSideCookie("userEmail", email?.toString() || "");
        return {
          success: true,
          message: "اطلاعات با موفقیت به روز شد",
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
      message: error.response || "خطایی رخ داد لطفا دوباره تلاش کنید",
    };
  }
};
