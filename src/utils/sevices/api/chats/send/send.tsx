"use server";

import instance from "@/src/utils/sevices/interseptor";

export interface sendChatData {
  room: "string";
  sender: "string";
  message: "string";
}

export const sendChat = async (data: sendChatData) => {
  const { room, sender, message } = data;
  
  if (!room || !sender || !message) {
    throw new Error("Missing required fields");
  }

  const response = await instance.post("/api/chats/send", {
    room,
    sender,
    message,
  });
  return response.data;
};
