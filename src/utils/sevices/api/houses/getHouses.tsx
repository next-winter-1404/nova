"use server"
import instance from "../../interseptor";
import { IHousesResponse } from "@/src/core/types/IHouse";

export const getHouses = async (apiParams = {}): Promise<IHousesResponse> => {
  const response = await instance.get("/api/houses", {
    params: apiParams,
  });
  return response.data;
};
