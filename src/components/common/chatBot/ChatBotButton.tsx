import React from "react";
import { Modal } from "../modal";
import ChatUI from "./ChatBotContent";
import { VscRobot } from "react-icons/vsc";
const ChatBotModal = () => {
  return (
    <div className="flex gap-4 items-center fixed right-10 bottom-5 z-50 ">
      <Modal
        contentClassName="chat-bg text-white-pure mt-5"
        mainContent={<ChatUI />}
        modalTitle="گقتگو با هوش مصنوعی"
        modalBtn={
          <button
            className=" w-[52px] h-[52px]  cursor-pointer transition-all 
        rounded-xl
        bg-dark-900/60
        border border-dark-600
        backdrop-blur-md flex-center"
          >
          <VscRobot className="w-6 h-6 text-white-pure"/>
          </button>
        }
      />
    </div>
  );
};

export default ChatBotModal;
