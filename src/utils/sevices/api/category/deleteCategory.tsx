"use server";

import instance from "@/src/utils/sevices/interseptor";



export const adminDeleteCategory = async (
  id: number
): Promise<{message:string}> => {
  try {
    const response = await instance.delete(`/api/categories/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
