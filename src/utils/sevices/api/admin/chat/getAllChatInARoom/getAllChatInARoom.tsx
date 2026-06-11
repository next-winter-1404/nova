import instance from "@/src/utils/sevices/interseptor";

export const getAllChatInARoom = async (room: string) => {
  try {
    const response = await instance.get(`/api/admin/chat-rooms/${room}/chats`);
    return response.data;
  } catch (error) {
    console.log("Get All Chat In A Room = ", error);
    throw error;
  }
};
