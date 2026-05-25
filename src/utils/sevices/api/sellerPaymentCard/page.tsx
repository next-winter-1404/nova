"use server"

import { ISellerPayCard } from "@/src/core/types/ISellerPayCard"
import instance from "../../interseptor"

export const getSellerPaymentCard = async (apiParams = {}) : Promise<ISellerPayCard> => {
    const response = await instance.get("api/seller/finance/dashboard", {
        params : apiParams
    });
    return response.data
}