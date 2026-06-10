import instance from "../../../interseptor";

export const adminDeleteLocation = async(id: number) : Promise<{message:string}> => {
    try{
        const response = await instance.delete(`/api/locations/${id}`);
        return response.data
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "خطایی رخ داد لطفا دوباره تلاش کنید"
        );
    }
}