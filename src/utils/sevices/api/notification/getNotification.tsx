'use server'
import { INotificationsResponse } from "@/src/core/types/INotification";
import instance from "../../interseptor";

export const getUserNotification = async (id: number,apiParams = {}): Promise<INotificationsResponse | null> => {
    try {
      const response = await instance.get(`/api/notifications/${id}`,{
        params: apiParams,
      });
      return response.data ;
    } catch (error) {
      return null;  
    }
  };