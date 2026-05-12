import { IHouse } from "@/src/core/types/IHouse";
import instance from "../../interseptor";

// در getHousesDetail.ts
export const getHousesDetail = async (id: number): Promise<IHouse | null> => {
    try {
      const response = await instance.get(`/api/houses/${id}`);
      console.log("API response for id", id, ":", response);
      
      // اگه خونه وجود نداشت null برگردون
      if (!response ) {
        return null;
      }
      return response as IHouse;
    } catch (error) {
      console.error(`Error fetching house ${id}:`, error);
      return null;  // ← حتماً null برگردون
    }
  };