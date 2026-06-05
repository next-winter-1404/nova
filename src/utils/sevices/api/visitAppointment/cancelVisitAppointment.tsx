import instance from "../../interseptor";

export const cancelVisitAppointment = async (id: number) => {
  const response = await instance.post(`/api/visit-appointments/${id}/cancel`);

  return response.data;
};
