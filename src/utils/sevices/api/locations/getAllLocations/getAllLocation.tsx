"use server"
import instance from "@/src/utils/sevices/interseptor";

// import { cacheLife } from "next/cache";

export const getAllLocation = async() => {
    // 'use cache'
    const res = await instance.get(
        "/api/locations"
    );
    
    // cacheLife('hours')
    return res.data
}