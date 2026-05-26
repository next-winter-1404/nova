"use client";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";

interface ChatProps {
    room:string;
    userId:string;
}

const Chat = ({room,userId} : ChatProps) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (e: any) => {
    e.preventDefault();
    const messages = setMessages(prev => [...prev, input]);
    if (!input.trim()) return;
    setInput("");
  };

  return (
    <div
      className="w-full flex flex-col-reverse overflow-y-auto h-[600px] bg-dark-700 bg-cover bg-center scrollbar-thin scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
      style={{ direction: "rtl" }}
    >
      <form onSubmit={handleSend} className="flex p-3 bg-white shadow gap-3">
        {input && (
          <button
            type="submit"
            className="p-2 text-primary-accent-green flex-center hover:bg-primary-accent-green-transparent-20 rounded-full transition"
          >
            <MdSend className="w-6 h-6 rounded-full text-center" />
          </button>
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام خود را بنویسید..."
          className="flex-1 border border-dark-purple rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 "
        />
        {!input && (
          <span className="p-2 text-primary-accent-green hover:bg-primary-accent-green-transparent-20 rounded-full">
            <FiPaperclip className="w-6 h-6 rounded-full" />
          </span>
        )}
      </form>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col-reverse items-start bg-primary-accent-green">
          <div className="flex flex-col space-y-2 ">
            {messages.map((message,index) => (
            <div className="max-w-[70%] w-fit wrap-break-word bg-tomato-red px-4 py-3 rounded-xl shadow bg-primary-accent-green-transparent-80 text-right" key={index}>{message}</div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Chat;
