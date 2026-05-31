"use server";

import instance from "@/src/utils/sevices/interseptor";



export const adminDeleteComment = async (
  id: number
): Promise<{message:string}> => {
  try {
    const response = await instance.delete(`/api/admin/comments/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
