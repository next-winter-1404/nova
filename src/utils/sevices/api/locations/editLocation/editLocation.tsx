import instance from "@/src/utils/sevices/interseptor";

export const adminEditLocation = async (
    id: number,
    data: {
        areaName: string;
        lat: string;
        lng : string
    }
) => {
    const response = await instance.put(
        `/api/locations/${id}`,
        data
    );

    return response.data;
};