import instance from "../../interseptor";

export const userActivities = async (userId:number) => {
  try {
    const response = await instance.get(`/api/user-activity/${userId}`);
    return response.data
  } catch (error) {
    console.log("User Activities Error: ", error);
    throw error
  }
};
