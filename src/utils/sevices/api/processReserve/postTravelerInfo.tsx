import instance from "../../interseptor";
import { AxiosResponse } from "axios";
import { IPassengerInfo } from "@/src/core/types/IPassengerInfo";

export const postTravelerInfo = async (apiParams = {}): Promise<AxiosResponse<IPassengerInfo>> => {
  const response = await instance.post("/api/bookings", apiParams);
  const dataResponse = response.data || response;
  // if (dataResponse.id) {
  //   await setClientCookie(
  //     "BookingId",
  //     String(dataResponse.id)
  //   );
    
  //   console.log(
  //     "COOKIE AFTER SET:",
  //     getClientCookie("BookingId")
  //   );
  // }
  console.log("dataResponse: ",dataResponse);
  return response;
};