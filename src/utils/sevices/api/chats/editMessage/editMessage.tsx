import instance from "@/src/utils/sevices/interseptor";

export const editMessage = async ({
  id,
  message,
}: {
  id: number;
  message: string;
}) => {
  try {
    const response = await instance.put(`/api/chats/edit/${id}`, { message });
    return response.data;
  } catch (error) {
    console.log("Edit Message Error = ", error);
  }
};
