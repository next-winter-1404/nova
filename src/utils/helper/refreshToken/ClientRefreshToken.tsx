"use client"; 

import { getClientCookie, setClientCookie } from "../cookies/clientCookie/clientSideCookie";

export const RefreshTokenClient = async () => {
  const refreshToken = getClientCookie("refreshToken");
  
  if (!refreshToken) {
    throw new Error("رفرش توکن یافت نشد");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken: refreshToken }),
  });

  const dataResponse = await response.json();

  if (response.status === 403) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    throw new Error("رفرش توکن منقضی شده");
  }

  if (!response.ok || !dataResponse.accessToken) {
    throw new Error("خطا در دریافت توکن");
  }

  // ذخیره در کوکی کلاینت
  setClientCookie("accessToken", dataResponse.accessToken);
  
  return dataResponse.accessToken;
};