import { IHouse } from "@/src/core/types/IHouse";
import instance from "../../interseptor";
export interface IRecommendationResponse {
    userId: string;
    recommendations: IHouse[];
  }
export const recommendation = async (userId: number):Promise<IRecommendationResponse> => {
  const response = await instance.get(`/api/recommendations/${userId}`);
  return response.data;
};
