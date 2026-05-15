import React from "react";
import instance from "../../interseptor";
import { AxiosResponse } from "axios";
import { IPassengerInfo } from "@/src/core/types/IPassengerInfo";

export const postTravelerInfo = async (apiParams = {}): Promise<AxiosResponse<IPassengerInfo>> => {
  const response = await instance.post("/api/bookings", apiParams);
  return response;
};