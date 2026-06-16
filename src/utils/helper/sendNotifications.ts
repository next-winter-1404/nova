import { INotifications } from "@/src/core/types/INotifications";
import instance from "../sevices/interseptor";

export const sendNotifications = async ({
  room,
  notification,
}: INotifications) => {
  try {
    const response = await instance.post("/api/notifications", {
      room,
      notification,
    });
    console.log("Sending Notifications response: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Sending Notifications Error: ", error);
    throw error;
  }
};
