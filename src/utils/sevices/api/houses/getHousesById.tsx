import { IGetHousesById } from "@/src/core/types/IGetHousesById";
import instance from "../../interseptor"
import { AxiosResponse } from 'axios';

export const getHousesById = async(id: string | number, apiParams={}) : Promise<AxiosResponse<IGetHousesById>> => {
    const response = await instance.get(`/api/houses/${id}`, {
        params: apiParams
    })
    return response;
}