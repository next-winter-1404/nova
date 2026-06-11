import instance from "@/src/utils/sevices/interseptor";

export const deleteChatAdmin = async (room: string) => {
  try {
    const response = await instance.delete(`/api/admin/chat-rooms/${room}/clear`);

    return response.data;
  } catch (error) {
    console.log("Delete Chat Admin = ", error);
    throw error;
  }
};
