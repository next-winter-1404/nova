"use server";

import instance from "@/src/utils/sevices/interseptor";

export async function EditBlog(id: number, prevState: any, formData: FormData) {
  try {
    const response = await instance.put(`/api/blogs/${id}`, {
      title: String(formData.get("title")),
      caption: String(formData.get("caption")),
      estimated_reading_time: formData.get("estimated_reading_time"),
      category: formData.get("category"),
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
