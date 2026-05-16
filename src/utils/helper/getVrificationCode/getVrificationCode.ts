"use server";

import { getServerSideCookie } from "../cookies/serverCookie/serverSideCookie";

export const getVerificationCode = async () => {
  try {
    const code = await getServerSideCookie("verificationCode");
    return code || "";
  } catch (error) {
    console.error("Error getting verification code:", error);
    return "";
  }
};
export const getResetCode = async () => {
  try {
    const code = await getServerSideCookie("resetCode");
    return code || "";
  } catch (error) {
    console.error("Error getting reset code:", error);
    return "";
  }
};
export const getNumberVerificationCode = async () => {
  try {
    const code = await getServerSideCookie("numberVerificationCode");
    return code || "";
  } catch (error) {
    console.error("Error getting verification code:", error);
    return "";
  }
};
export const getPhoneNumber = async () => {
  try {
    const code = await getServerSideCookie("phonenumber");
    return code || "";
  } catch (error) {
    console.error("Error getting phoneNumber:", error);
    return "";
  }
};