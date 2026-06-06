import instance from "../../interseptor";

export const editVisitAppointment = async (id:number,apiParams = {}) => {
    const response = await instance.put(
      `/api/visit-appointments/${id}`,
      apiParams
    );
  
    return response.data;
  };
