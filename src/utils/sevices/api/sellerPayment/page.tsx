"use server"

import { IBuyerPayList } from "@/src/core/types/IBuyerPay";
import instance from "../../interseptor"

export const getSellerPayment = async (apiParams = {}) : Promise<IBuyerPayList> => {
    const response = await instance.get("api/payments/seller-houses",{
        params : apiParams,
    });
    return response.data;
};