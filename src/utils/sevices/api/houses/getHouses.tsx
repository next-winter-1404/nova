import React from "react";
import instance from "@/src/utils/sevices/interseptor/index";
import { IHousesResponse } from "@/src/core/types/IHouse";
import { AxiosResponse } from "axios";

export const getHouses = async (apiParams = {}): Promise<AxiosResponse<IHousesResponse>> => {
  const response = await instance.get("/api/houses", {
    params: apiParams,
  });
  return response;
};
