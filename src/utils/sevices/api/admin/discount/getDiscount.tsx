import instance from "@/src/utils/sevices/interseptor/index";
import { IDiscountResponse } from "@/src/core/types/IDiscount";
export const getDiscounts = async (apiParams = {}): Promise<IDiscountResponse> => {
  const response = await instance.get("/api/discount-codes", {
    params: apiParams,
  });
  return response.data;
};

