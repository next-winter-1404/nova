import instance from "../../interseptor";

export const createVisitAppointment = async (apiParams = {}) => {
    const response = await instance.post(
      "/api/visit-appointments",
      apiParams
    );
  
    return response.data;
  };
