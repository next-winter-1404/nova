"use server";
import { LocationsResponse } from "@/src/core/types/ILocations";
import instance from "@/src/utils/sevices/interseptor";

export const getAllLocation = async (apiParams = {}) : Promise<LocationsResponse> => {
  const res = await instance.get("/api/locations",{
    params : apiParams,
  });

  return res.data;
};
