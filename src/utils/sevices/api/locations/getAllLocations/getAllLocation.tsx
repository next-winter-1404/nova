"use server"
import instance from "@/src/utils/sevices/interseptor";
import axios from "axios"
import { cacheLife } from "next/cache";

export const getAllLocation = async() => {
    'use cache'
    const res = await axios.get(
        "http://next.genzuni.website/api/locations"
    );
    
    cacheLife('hours')
    console.log(res)
    return res.data
}