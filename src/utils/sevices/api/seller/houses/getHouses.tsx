"use server"
import React from "react";
import { IHousesResponse } from "@/src/core/types/IHouse";
import instance from "../../../interseptor";

export const getSellerHouses = async (apiParams = {}): Promise<IHousesResponse> => {
  const response = await instance.get("/api/houses/seller/user", {
    params: apiParams,
  });
  return response.data;
};
