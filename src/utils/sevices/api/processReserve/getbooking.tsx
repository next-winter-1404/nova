"use server";
import instance from "../../interseptor";
import { IBookingResponse } from "@/src/core/types/IBooking";

export const getBookings = async (apiParams = {}): Promise<IBookingResponse> => {
  const response = await instance.get("/api/bookings", {
    params: apiParams,
  });
  return response.data;
};