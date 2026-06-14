"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import { TbSend } from "react-icons/tb";
import { IoSend } from "react-icons/io5";

const ChatUI = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    const aiMessage = data?.choices?.[0]?.message;

    if (!aiMessage?.content) {
      console.error("AI response invalid:", data);
      setLoading(false);
      return;
    }

    setMessages([...newMessages, aiMessage]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[400px] text-white">
      {/* messages box */}
      <div
  className="
    flex-1 overflow-y-auto p-2 mb-2 rounded-xl
    border border-white/10
    bg-gradient-to-br
    from-[#2c2f33]
    via-[#23272a]
    to-[#1e2124]
  "
>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                m.role === "user"
                  ? "bg-primary-accent-green text-dark-900"
                  : "bg-gray-700 text-white"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && <p>درحال نوشتن...</p>}
      </div>

      {/* sen message input */}
      <div className="flex gap-2 text-white">
        <input
          className="border border-gray-300 flex-1 p-1 rounded-lg text-white-pure"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام خود را بنویسید..."
          dir="rtl"
        />

        <Button
          onClick={sendMessage}
          className={"bg-primary-accent-green  px-3"}
          isIconOnly
        >
          <IoSend className="text-dark-900" />
        </Button>
      </div>
    </div>
  );
};

export default ChatUI;
