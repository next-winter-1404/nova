"use server";
import { IBookingResponse } from "@/src/core/types/IBooking";
import instance from "../../../../interseptor";

export const getAllBookings = async (apiParams = {}): Promise<IBookingResponse> => {
  const response = await instance.get("/api/admin/bookings", {
    params: apiParams,
  });
  return response.data;
};