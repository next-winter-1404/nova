import instance from "@/src/utils/sevices/interseptor";

export const updateSocialMedia = async (
    id: number,
    data: {
        platform: string;
        url: string;
    }
) => {
    const response = await instance.put(
        `/api/social-media-links/${id}`,
        data
    );

    return response.data;
};