import instance from "@/src/utils/sevices/interseptor";

export const givingAdminRole = async (id: number) => {
  try {
    console.log(instance);
    const response = await instance.put(`/api/admin/users/${id}/role`, {
      role: "admin",
    });
    return response.data;
  } catch (error) {
    console.log("Giving Role Api Error: ", error);
    throw error;
  }
};
