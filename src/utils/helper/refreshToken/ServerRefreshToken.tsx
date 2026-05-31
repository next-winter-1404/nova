"use server";

import { getServerSideCookie } from "../cookies/serverCookie/serverSideCookie";

export const ServerRefreshToken = async () => {
  try {
    const refreshToken = await getServerSideCookie("refreshToken");

    if (!refreshToken) {
      console.log("No refresh token found");

      return {
        success: false,
        message: "رفرش توکن یافت نشد",
        accessToken: null,
      };
    }


    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      }
    );

    const dataResponse = await response.json();

    if (response.ok && dataResponse.accessToken) {
      return {
        success: true,
        message: "موفقیت‌آمیز بود",
        accessToken: dataResponse.accessToken,
      };
    }

    return {
      success: false,
      accessToken: null,
      message: "رفرش توکن منقضی شده",
    };
  } catch (error: any) {
    console.error("REFRESH ERROR:", error);

    return {
      success: false,
      message: error.message || "خطا در ارتباط با سرور",
      accessToken: null,
    };
  }
};
