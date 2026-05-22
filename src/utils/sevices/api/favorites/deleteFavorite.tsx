"use server";
import instance from "../../interseptor";

export const removeFromFavorites = async (favoriteId: number) => {
    try {
      const response = await instance.delete(`/api/favorites/${favoriteId}`);
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "خطا");
    }
  };

