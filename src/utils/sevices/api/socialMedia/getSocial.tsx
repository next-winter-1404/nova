import { ISocialMediaResponse } from "@/src/core/types/ISocialMedia";
import instance from "../../interseptor";

export const getSocialMedia = async (apiParams = {}) : Promise<ISocialMediaResponse> => {
    const response = await instance.get("/api/social-media-links",{
        params : apiParams,
    })
    return response.data
}