"use server";

import instance from "@/src/utils/sevices/interseptor";

export async function adminEditComment(
    id: number,
    prevState: any,
    formData: FormData
) {
  try {
    const response = await instance.put(
      `/api/admin/comments/${id}`,
      {
        title: String(formData.get("title")),
       caption:String(formData.get("caption"))
      }
    );

    return {
      success: true,
      message:"با موفقیت اپدیت شد",
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "خطایی رخ داد",
    };
  }
}