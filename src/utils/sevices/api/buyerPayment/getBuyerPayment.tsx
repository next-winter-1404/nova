"use server"

import { IBuyerPayList } from "@/src/core/types/IBuyerPay";
import instance from "../../interseptor"

export const getBuyerPayment = async (apiParams = {}) : Promise<IBuyerPayList> => {
    const response = await instance.get("api/payments",{
        params : apiParams,
    });
    return response.data;
};