"use server";
import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";

const passwordSchema = z.object({
  currentPassword: z.string().min(1, "رمز عبور فعلی را وارد کنید"),
  newPassword: z.string().min(6, "رمز عبور جدید باید حداقل ۶ کاراکتر باشد"),
  confirmPassword: z.string().min(1, "تکرار رمز عبور را وارد کنید"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "رمز عبور جدید با تکرار آن مطابقت ندارد",
  path: ["confirmPassword"],
});

export interface FinalResult {
  success: boolean;
  message: string;
  data?: any;
}

export const changePassword = async (
  prevState: any,
  formData: FormData
): Promise<FinalResult> => {
  const currentPassword = formData.get("currentPassword")?.toString() || "";
  const newPassword = formData.get("newPassword")?.toString() || "";
  const confirmPassword = formData.get("confirmPassword")?.toString() || "";

  const validation = passwordSchema.safeParse({
    currentPassword,
    newPassword,
    confirmPassword,
  });

  if (!validation.success) {
    return {
      success: false,
      message: "رمز عبور با تکرار ان مطابقت ندارد"
    };
  }

  try {
    const res = await instance.put("/api/users/change-password", {
      currentPassword: validation.data.currentPassword,
      newPassword: validation.data.newPassword,
    });

    const dataResponse = res.data;

    if (dataResponse.success || res.status === 200) {
      return {
        success: true,
        message:"رمز عبور با موفقیت تغییر کرد",
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
      message: error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید",
    };
  }
};