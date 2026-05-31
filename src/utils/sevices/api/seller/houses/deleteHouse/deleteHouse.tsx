"use server";

import instance from "@/src/utils/sevices/interseptor";

export interface IDeleteHouseResponse {
  message: string;
}

export const SellerDeleteHouses = async (
  id: number
): Promise<IDeleteHouseResponse> => {
  try {
    const response = await instance.delete(`/api/houses/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
