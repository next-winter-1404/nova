'use server'
import { IBooking } from "@/src/core/types/IBooking";
import { IHouse } from "@/src/core/types/IHouse";
import instance from "@/src/utils/sevices/interseptor";

export const getBookingDetailAdmin = async (id: number): Promise<IBooking | null> => {
    try {
      const response = await instance.get(`/api/admin/bookings/${id}`);
      
      
      if (!response ) {
        return null;
      }
      return response.data ;
    } catch (error) {
      console.error(`Error fetching booking ${id}:`, error);
      return null;  
    }
  };