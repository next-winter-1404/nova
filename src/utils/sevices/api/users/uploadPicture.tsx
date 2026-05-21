"use server";

import {
  getServerSideCookie,
  setServerSideCookie,
} from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";

export interface UploadPictureResult {
  success: boolean;
  message: string;
  profilePictureUrl?: string;
}

export const uploadProfilePicture = async (
  prevState: any,
  formData: FormData
): Promise<UploadPictureResult> => {
  try {
    const userId = await getServerSideCookie("userId");

    if (!userId) {
      return {
        success: false,
        message: "نشست منقضی شده است. لطفاً دوباره وارد شوید",
      };
    }

    const res = await instance.put("/api/users/upload/picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const dataResponse = res.data;

    if (res.status === 200 && dataResponse.profilePictureUrl) {
      //   await setServerSideCookie("userProfilePicture", dataResponse.profilePictureUrl);

      return {
        success: true,
        message: "عکس پروفایل با موفقیت آپلود شد",
        profilePictureUrl: dataResponse.profilePictureUrl,
      };
    } else {
      return {
        success: false,
        message: "مشکلی رخ داد",
      };
    }
  } catch (error: any) {
    console.error("Error uploading picture:", error);

    if (error.response?.status === 400) {
      return {
        success: false,
        message: "فرمت فایل نامعتبر است. لطفاً یک تصویر انتخاب کنید",
      };
    }

    if (error.response?.status === 401) {
      return {
        success: false,
        message: "لطفاً دوباره وارد حساب کاربری خود شوید",
      };
    }

    return {
      success: false,
      message: error.response?.data?.message || "خطا در آپلود عکس",
    };
  }
};
