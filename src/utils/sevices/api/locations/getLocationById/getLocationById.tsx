"use server"
import instance from "@/src/utils/sevices/interseptor";


export const getLocationById = async(id:number) => {
    const res = await instance.get(
        `/api/locations/${id}`, 
    );
    
    return res.data
}