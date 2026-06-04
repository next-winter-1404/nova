"use server";

import instance from "@/src/utils/sevices/interseptor";

export async function createCategory( prevState: any, formData: FormData) {
  try {
    const response = await instance.post(`/api/categories`, {
      name: String(formData.get("name")),
    
    });

    return {
      success: true,
      message: "با موفقیت ساخته شد",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "خطایی رخ داد",
    };
  }
}
