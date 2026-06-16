import instance from "../../interseptor";
import { IHouse } from "@/src/core/types/IHouse";

export const getComparison = async (apiParams = {}): Promise<IHouse[]> => {
  const response = await instance.get("/api/comparison", {
    params: apiParams,
  });
  return response.data;
};