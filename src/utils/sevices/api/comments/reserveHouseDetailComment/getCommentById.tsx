"use server"
import React from "react";
import instance from "@/src/utils/sevices/interseptor";
import { IComment } from "@/src/core/types/IComment";

export const getHousesCommentById = async (id: number): Promise<IComment|null> => {
    const response = await instance.get(`/api/comments/${id}`);
    // console.log("API response:", response);
    return response.data; 
  };