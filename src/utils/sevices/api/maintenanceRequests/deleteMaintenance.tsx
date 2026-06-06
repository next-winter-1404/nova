import instance from "../../interseptor";

export const deleteMaintenance = async (id: number) => {
  const response = await instance.delete(`/api/maintenance-requests/${id}`);

  return response.data;
};
