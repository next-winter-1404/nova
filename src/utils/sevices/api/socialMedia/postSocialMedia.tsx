import { ISocialMedia } from "@/src/core/types/ISocialMedia";
import { AxiosResponse } from "axios";
import instance from "../../interseptor";

export const PostSocialMedia = async (apiParams = {}) : Promise<AxiosResponse<ISocialMedia>> => {
    const response = await instance.post("/api/social-media-links", apiParams)
    return response.data
}