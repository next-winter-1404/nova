import instance from "@/src/utils/sevices/interseptor";

export const getAllChats = async() => {
    try{
        const response = await instance.get(`/api/chats`);
        return response.data
    }catch(error) {
        console.log("Get All Chat Error = ",error)
        throw error;
    }
}