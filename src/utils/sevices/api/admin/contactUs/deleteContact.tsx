"use server";

import instance from "@/src/utils/sevices/interseptor";



export const adminDeleteContact = async (
  id: number
): Promise<{message:string}> => {
  try {
    const response = await instance.delete(`/api/contact-us/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
