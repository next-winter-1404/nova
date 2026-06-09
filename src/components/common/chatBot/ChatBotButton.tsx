import React from "react";
import { Modal } from "../modal";
import ChatUI from "./ChatBotContent";

const ChatBotModal = () => {
  return (
    <div className="flex gap-4 items-center fixed right-10 bottom-15 z-50">
      <Modal
        mainContent={<ChatUI/>}
        modalTitle="چت با هوش مصوعی"
        modalBtn={<button className="bg-red-500">هوش مصنوعی</button>}
      />
    </div>
  );
};

export default ChatBotModal;
