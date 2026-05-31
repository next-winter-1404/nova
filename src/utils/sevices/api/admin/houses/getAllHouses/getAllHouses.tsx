import { IHousesAdminResponse } from "@/src/core/types/IHouse";
import instance from "@/src/utils/sevices/interseptor";

export const getAllHouses = async ():Promise<IHousesAdminResponse> => {
  const response = await instance.get("/api/admin/houses");
  return response.data;
};
