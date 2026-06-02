import React from "react";
import instance from "../../interseptor";
import { AxiosResponse } from "axios";
import { IPassengerInfo } from "@/src/core/types/IPassengerInfo";
import { setClientCookie } from "@/src/utils/helper/cookies/clientCookie/clientSideCookie";

export const postTravelerInfo = async (apiParams = {}): Promise<AxiosResponse<IPassengerInfo>> => {
  const response = await instance.post("/api/bookings", apiParams);
  const dataResponse = response.data || response;
  if (dataResponse.id) {
    await setClientCookie("BookingId", dataResponse.id);
  }
  console.log("dataResponse: ",dataResponse);
  return response;
};