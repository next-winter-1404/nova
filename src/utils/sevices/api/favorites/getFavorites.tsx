'use server'
import { IFavoritesResponse } from "@/src/core/types/IFavorite";
import instance from "../../interseptor";

export const getFavoriteForUser = async (id: number,apiParams = {}): Promise<IFavoritesResponse | null> => {
    try {
      const response = await instance.get(`/api/favorites/user/${id}`,{
        params: apiParams,
      });
      return response.data ;
    } catch (error) {
      return null;  
    }
  };