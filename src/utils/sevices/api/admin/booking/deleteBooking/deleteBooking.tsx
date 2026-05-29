"use server";

import { IBooking } from "@/src/core/types/IBooking";
import instance from "@/src/utils/sevices/interseptor";

export interface IDeleteBookingResponse {
  message: string;
}

export const deleteBooking = async (
  id: number
): Promise<IDeleteBookingResponse> => {
  try {
    const response = await instance.delete(`/api/admin/bookings/${id}`);

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
