'use server'
import { IFavoritesResponse } from "@/src/core/types/IFavorite";
import instance from "../../interseptor";

export const getFavoriteForUser = async (id: number): Promise<IFavoritesResponse | null> => {
    try {
      const response = await instance.get(`/api/favorites/user/${id}`);
      return response.data ;
    } catch (error) {
      return null;  
    }
  };