import instance from "@/src/utils/sevices/interseptor";

export interface SendChatData {
  room: string;
  getterId: number;
  message: string;
}

export const sendChat = async ({
  room,
  getterId,
  message,
}: SendChatData) => {
  if (!room || !getterId || !message.trim()) {
    throw new Error("Missing required fields");
  }

  const response = await instance.post("/api/chats/send", {
    room,
    getterId,
    message,
  });

  return response.data;
};