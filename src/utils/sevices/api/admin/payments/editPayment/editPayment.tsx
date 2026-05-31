"use server";

import { IBooking } from "@/src/core/types/IBooking";
import { IAllPayments } from "@/src/core/types/IPayment";
import instance from "@/src/utils/sevices/interseptor";

export interface IUpdatePaymentResponse {
  message: string;
  booking: IAllPayments;
}

export const editPayment = async (
  id: number,
  status :string
): Promise<IUpdatePaymentResponse> => {
  try {
    const response = await instance.put(`/api/admin/payments/${id}`, {
        status: status,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
