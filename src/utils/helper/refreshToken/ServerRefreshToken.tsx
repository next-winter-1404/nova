"use server"
import {
  getServerSideCookie,
  setServerSideCookie,
} from "../cookies/serverCookie/serverSideCookie";

export const ServerRefreshToken = async () => {
  try {
    const refreshToken = await getServerSideCookie("refreshToken"); 
    
    if (!refreshToken) {
      return {
        success: false,
        message: "رفرش توکن یافت نشد",
        accessToken: null,
      };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
    });

    const dataResponse = await response.json();

    if (response.ok && dataResponse.accessToken) {
      await setServerSideCookie("ServerAccessToken", dataResponse.accessToken);
      return {
        success: true,
        message: "موفقیت‌آمیز بود",
        accessToken: dataResponse.accessToken,
      };
    } else {
      return {
        success: false,
        accessToken: null,
        message: "رفرش توکن منقضی شده",
      };
    }
  } catch (error: any) {
    console.error("Error!!!", error);
    return {
      success: false,
      message: error.message || "خطا در ارتباط با سرور",
      accessToken: null,
    };
  }
};