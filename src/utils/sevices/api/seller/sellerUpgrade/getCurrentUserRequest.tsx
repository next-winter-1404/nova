import axios from "axios";
import { SellerUpgradeRequest } from "@/src/core/types/SellerUpgradeRequest";
import instance from "../../../interseptor";

export const getCurrentUserRequest = async (): Promise<SellerUpgradeRequest | null> => {
  try {
    const response = await instance.get("/api/seller-upgrade/my-request");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }

    throw error;
  }
};