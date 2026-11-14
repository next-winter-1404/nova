
import instance from "@/src/utils/sevices/interseptor/index";
import { ICategoryResponse } from "@/src/core/types/ICategory";
import axios from "axios";

export const getCategory = async (apiParams = {}) => {
  try {
    const response = await instance.get("/api/categories", {
      params: apiParams,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("API URL:", error.config?.baseURL);
      console.log("Request URL:", error.config?.url);
      console.log("Full URL:", error.request?.responseURL);
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
    }

    throw error;
  }
};