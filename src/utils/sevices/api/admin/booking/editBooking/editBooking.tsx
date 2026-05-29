"use server";

import { IBooking } from "@/src/core/types/IBooking";
import instance from "@/src/utils/sevices/interseptor";

export interface IUpdateBookingResponse {
  message: string;
  booking: IBooking;
}

export const EditBooking = async (id: number, status: string): Promise<IUpdateBookingResponse> => {
  try {
    const response = await instance.put(`/api/admin/bookings/${id}`, {
      status: status,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};