import instance from "../../interseptor";

export const editMaintenance = async (id:number,apiParams = {}) => {
    const response = await instance.put(
      `/api/maintenance-requests/${id}`,
      apiParams
    );
  
    return response.data;
  };
