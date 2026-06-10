import instance from "@/src/utils/sevices/interseptor";

export const getChatHistory = async(room:string) => {
    try{
        const response = await instance.get(`/api/chats/${room}`);
        return response.data
    }catch(error) {
        console.log("Get Chat History Error = ",error)
        throw error;
    }
}