"use server";
import instance from "../../interseptor";

export interface IMarkAsReadResponse {
  message: string;
  notification: {
    id: number;
    isRead: boolean;
  };
}

export const markAsRead = async (id: number): Promise<IMarkAsReadResponse> => {
  try {
    const response = await instance.put(`/api/notifications/${id}/read`);

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
export const markAllAsRead = async () => {
  try {
    const response = await instance.put(`/api/notifications/mark-all-as-read`);

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
    );
  }
};
