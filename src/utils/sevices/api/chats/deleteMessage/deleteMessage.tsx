import instance from "@/src/utils/sevices/interseptor";

export const deleteMessage = async (id: number) => {
  try {
    const response = await instance.delete(`/api/chats/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log("Delete Chat Message Error = ", error);
    throw error;
  }
};
