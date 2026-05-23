'use server'
import React from "react";
import instance from "../../interseptor";
import { ITraveler } from "@/src/core/types/IPassengerInfo";
import { setServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";

export const getBookingsById = async(id: number): Promise<ITraveler> => {
  const response = await instance.get(`/api/bookings/${id}`);
  console.log("BookingsById response:", response);
  return response.data;
};
