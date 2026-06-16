import { SellerUpgradeRequestsResponse } from "@/src/core/types/SellerUpgradeRequest";
import instance from "../../../interseptor";

export const getAllSellerRequests = async (
  apiParams = {}
): Promise<SellerUpgradeRequestsResponse> => {
  const response = await instance.get("/api/seller-upgrade/admin/requests", {
    params: apiParams,
  });

  return response.data;
};
