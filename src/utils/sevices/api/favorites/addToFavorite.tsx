"use server";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import instance from "../../interseptor";

interface IAddToFavorite {
  id?: number;
  user_id?: number;
  house_id?: number;
  updated_at?: Date;
  created_at?: Date;
  newFav?:any
}

export const addToFavorites = async (house_id: number): Promise<IAddToFavorite> => {
  try {
    const userId = await getServerSideCookie("userId");
    
    if (!userId) {
      throw new Error("لطفاً ابتدا وارد حساب کاربری خود شوید");
    }

    const response = await instance.post("/api/favorites", {
      house_id: house_id,
      user_id: Number(userId),
    });
    
    return response.data;
    
  } catch (error: any) {
    console.error("Error in addToFavorites:", error.message);
    
    if (error.response?.status === 401) {
      throw new Error("نشست شما منقضی شده است. لطفاً دوباره وارد شوید");
    }
    
    if (error.response?.status === 409) {
      throw new Error("این اقامتگاه قبلاً به علاقه‌مندی‌ها اضافه شده است");
    }
    
    throw new Error(error.response?.data?.message || "خطا در اضافه کردن به علاقه‌مندی‌ها");
  }
};