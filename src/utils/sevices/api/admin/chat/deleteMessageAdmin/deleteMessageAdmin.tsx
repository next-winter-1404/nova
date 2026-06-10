import instance from "@/src/utils/sevices/interseptor";

export const deleteMessageAdmin = async (id: number) => {
  try {
    const response = await instance.delete(`/api/admin/chats/${id}`);

    return response.data;
  } catch (error) {
    console.log("Update Message Admin = ", error);
    throw error;
  }
};
