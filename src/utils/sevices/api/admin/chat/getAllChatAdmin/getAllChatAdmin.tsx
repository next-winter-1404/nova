import instance from "@/src/utils/sevices/interseptor";

export const getAllChatAdmin = async() => {
    try {
        const response = await instance.get("/api/admin/chat-rooms");
        return response.data
    } catch (error) {
        console.log("Get All Chat Admin = ",error)
        throw error
    }
}