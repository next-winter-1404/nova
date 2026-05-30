"use server";

import instance from "@/src/utils/sevices/interseptor";

export interface IDeletePaymentResponse {
  message: string;
}

export const deletePayment = async (
  id: number
): Promise<IDeletePaymentResponse> => {
  try {
    const response = await instance.delete(`/api/admin/payments/${id}`);

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
