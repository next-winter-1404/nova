import { IHouse } from "@/src/core/types/IHouse";
import instance from "../../interseptor";

export const postHouses = async (
    apiParams = {}
    ): Promise<IHouse> => {
    
    const response = await instance.post(
    "/api/houses",
    apiParams
    );

    return response.data;
}