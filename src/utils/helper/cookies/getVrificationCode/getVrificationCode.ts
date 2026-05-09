"use server";

import { getServerSideCookie } from "../serverCookie/serverSideCookie";

export const getVerificationCode = async () => {
  try {
    const code = await getServerSideCookie("verificationCode");
    return code || "";
  } catch (error) {
    console.error("Error getting verification code:", error);
    return "";
  }
};