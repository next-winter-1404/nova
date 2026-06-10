import instance from "@/src/utils/sevices/interseptor";

export const updateMessageAdmin = async (id: number, message: string) => {
  try {
    const response = await instance.put(`/api/admin/chats/${id}`, {
      message,
    });

    return response.data;
  } catch (error) {
    console.log("Update Message Admin = ", error);
    throw error;
  }
};
