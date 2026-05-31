'use server'
import { IHouse } from "@/src/core/types/IHouse";
import instance from "../../interseptor";
import { AxiosResponse } from "axios";

export const postHouses = async(apiParams = {}) : Promise<AxiosResponse<IHouse>> => {
    const response = await instance.post("/api/houses", apiParams);
    const dataResponse = response.data || response;
    return dataResponse
}