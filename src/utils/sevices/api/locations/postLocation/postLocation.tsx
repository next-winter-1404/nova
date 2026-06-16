import { AxiosResponse } from "axios";
import instance from "../../../interseptor";
import { ILocations } from "@/src/core/types/ILocations";

export const adminPostLocation = async (apiParams = {}) : Promise<AxiosResponse<ILocations>> => {
    const response = await instance.post("/api/locations", apiParams)
    return response.data
}