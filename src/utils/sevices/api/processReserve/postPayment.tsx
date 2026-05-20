'use server'
import React from 'react'
import { AxiosResponse } from "axios";
import { IPayment } from '@/src/core/types/IPayment';
import instance from '../../interseptor';
import { setServerSideCookie } from '@/src/utils/helper/cookies/serverCookie/serverSideCookie';

export const postPayment = async( apiParams = {}) : Promise<AxiosResponse<IPayment>> => {
    const response = await instance.post("api/payments", apiParams);
    const dataResponse = response.data || response;
    return dataResponse
}

