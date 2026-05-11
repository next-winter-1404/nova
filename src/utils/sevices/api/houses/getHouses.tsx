import React from "react";
import instance from "../../interseptor";
import { IHouse, IHousesResponse } from "@/src/core/types/IHouse";
import { AxiosResponse } from "axios";

export const getHouses = async (apiParams = {}): Promise<AxiosResponse<IHousesResponse>> => {
  const response = await instance.get("/api/houses", {
    params: apiParams,
  });
  return response;
};
