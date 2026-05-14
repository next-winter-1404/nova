import React from "react";
import instance from "@/src/utils/sevices/interseptor/index";
import { IHousesResponse } from "@/src/core/types/IHouse";

export const getHouses = async (apiParams = {}): Promise<IHousesResponse> => {
  const response = await instance.get("/api/houses", {
    params: apiParams,
  });
  return response.data;
};
