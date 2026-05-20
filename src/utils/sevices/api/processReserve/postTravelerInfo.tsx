'use server'
import React from "react";
import instance from "../../interseptor";
import { AxiosResponse } from "axios";
import { IPassengerInfo } from "@/src/core/types/IPassengerInfo";
import { setServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";

export const postTravelerInfo = async (apiParams = {}): Promise<AxiosResponse<IPassengerInfo>> => {
  const response = await instance.post("/api/bookings", apiParams);
  const dataResponse = response.data || response;
  if (dataResponse.id) {
    await setServerSideCookie("BookingId", dataResponse.id);
  }
  return dataResponse;
};