import instance from "../../interseptor";

export const adminDeleteSocial = async(id: number) : Promise<{message:string}> => {
    try{
        const response = await instance.delete(`/api/social-media-links/${id}`);
        return response.data
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
        );
    }
}