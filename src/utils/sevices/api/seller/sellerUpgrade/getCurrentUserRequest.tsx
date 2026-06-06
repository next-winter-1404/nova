import { SellerUpgradeRequest } from "@/src/core/types/SellerUpgradeRequest";
import instance from "../../../interseptor";

export const getCurrentUserRequest =
  async (): Promise<SellerUpgradeRequest> => {
    const response = await instance.get("/api/seller-upgrade/my-request");
    return response.data;
  };
