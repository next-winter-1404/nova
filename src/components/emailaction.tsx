'use server'

import instance from "@/src/utils/sevices/interseptor";

export interface IResponse {
  message: string;
}

export const sendEmail = async (
  prevState: IResponse,
  formData: FormData
) => {
  const email = formData.get("email");
  
  console.log("📧 Email received:", email);
  
  if (!email) {
    console.log("❌ No email provided");
    return { message: "ایمیل وارد نشده است" };
  }
  
  try {
    console.log("📡 Sending request to /api/auth/register");
    const res = await instance.post("/api/auth/register", { email: email })
    console.log("✅ Response:", res.data);
    return { message: "کد تایید ارسال شد" };
  } catch (error: any) {
    console.log("❌ Error:", error.response?.data || error.message);
    return { message: error.response?.data?.message || "network error" };
  }
};