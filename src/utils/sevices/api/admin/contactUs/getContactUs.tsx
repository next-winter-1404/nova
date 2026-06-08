
import instance from "@/src/utils/sevices/interseptor/index";
import { IBlogsResponse } from "@/src/core/types/IBogs";

export const getContactUs = async (apiParams = {}): Promise<IContactMessagesResponse> => {
  const response = await instance.get("/api/contact-us", {
    params: apiParams,
  });
  return response.data;
};
export interface IContactMessage {
    id?: number;
    title?: string | null;
    message?: string | null;
  }
  export interface IContactMessagesResponse {
    data?: IContactMessage[];
    totalCount?: number;
  }