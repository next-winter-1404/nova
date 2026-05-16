"use server";
import React from "react";
import instance from "@/src/utils/sevices/interseptor/index";
import { ICategoryResponse } from "@/src/core/types/ICategory";

export const getCategory = async (apiParams = {}): Promise<ICategoryResponse> => {
  const response = await instance.get("/api/categories", {
    params: apiParams,
  });
  return response.data;
};
