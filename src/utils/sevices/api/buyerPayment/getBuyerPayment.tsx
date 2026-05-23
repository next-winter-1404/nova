"use server"

import instance from "../../interseptor"

export const getBuyerPayment = async (apiParams = {}) => {
    const response = await instance.get("api/payments",{
        params : apiParams,
    });
    return response.data;
};