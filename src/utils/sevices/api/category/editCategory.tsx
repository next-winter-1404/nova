"use server";

import instance from "@/src/utils/sevices/interseptor";

export async function editCategory(id: number, prevState: any, formData: FormData) {
  try {
    const response = await instance.put(`/api/categories/${id}`, {
      name: String(formData.get("name")),
    
    });

    return {
      success: true,
      message: "با موفقیت ویرایش شد",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "خطایی رخ داد",
    };
  }
}
