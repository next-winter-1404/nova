'use server'
import React from "react";
import instance from "../../interseptor";
import { ITraveler } from "@/src/core/types/IPassengerInfo";

export const getBookingsById = async(id: number): Promise<ITraveler> => {
  console.log("GET BOOKING ID =", id);

  const response = await instance.get(`/api/bookings/${id}`);

  return response.data;

};
