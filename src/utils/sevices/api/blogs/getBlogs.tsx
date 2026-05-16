"use server";
import React from "react";
import instance from "@/src/utils/sevices/interseptor/index";
import { IBlogsResponse } from "@/src/core/types/IBogs";

export const getBlogs = async (apiParams = {}): Promise<IBlogsResponse> => {
  const response = await instance.get("/api/blogs", {
    params: apiParams,
  });
  return response.data;
};
