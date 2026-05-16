import React from "react";
import instance from "@/src/utils/sevices/interseptor/index";
import { ITraveler } from "@/src/core/types/IPassengerInfo";

export const getBookingsById = async(id: number): Promise<ITraveler> => {
  const response = await instance.get(`/api/bookings/${id}`);
  console.log("BookingsById response:", response);
  return response.data;
};
