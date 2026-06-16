import { IHouseQA } from "@/src/core/types/IQA";
import instance from "../../interseptor";

export const getHouseQA = async(houseId:number):Promise<IHouseQA[]> => {
    const response = await instance.get(`/api/property-QA/${houseId}`)
    return response.data
};
