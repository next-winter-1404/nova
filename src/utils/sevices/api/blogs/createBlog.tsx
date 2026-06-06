"use server";

import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "@/src/utils/sevices/interseptor";

export async function CreateBlog( prevState: any, formData: FormData) {
  const userId = await getServerSideCookie("userId")
  try {
    const response = await instance.post(`/api/blogs`, {
      title: String(formData.get("title")),
      caption: String(formData.get("caption")),
      estimated_reading_time: formData.get("estimated_reading_time"),
      category: formData.get("category"),
      author_id:Number(userId)
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
