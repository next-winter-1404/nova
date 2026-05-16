"use server"
import { IHouse } from "@/src/core/types/IHouse";
import instance from "../../interseptor";

export const getHousesDetail = async (id: number): Promise<IHouse | null> => {
    try {
      const response = await instance.get(`/api/houses/${id}`);
    //   console.log("API response for id", id, ":", response);
      
      
      if (!response ) {
        return null;
      }
      return response.data as IHouse;
    } catch (error) {
      console.error(`Error fetching house ${id}:`, error);
      return null;  
    }
  };