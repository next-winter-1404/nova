import { INotifications } from "@/src/core/types/INotifications";
import instance from "../sevices/interseptor";

export const sendNotifications = async (payload: INotifications) => {
    try {
        const response = await instance.post("/api/notifications",payload);
        return response.data;
    } catch (error) {
        console.log("Sending Notifications Error: ", error);
        throw error
    }
}