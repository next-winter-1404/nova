"use client";
import { useState } from "react";

const ChatUI = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json(); // 👈 اینو یادت رفته بود

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
    <div className="flex flex-col h-[400px]">
      {/* messages */}
      <div className="flex-1 overflow-y-auto border p-2 mb-2">
        {messages.map((m, i) => (
          <div key={i} className="mb-1">
            <b>{m?.role}:</b> {m?.content}
          </div>
        ))}

        {loading && <p>AI is typing...</p>}
      </div>

      {/* input */}
      <div className="flex gap-2">
        <input
          className="border flex-1 p-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام بنویس..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-3"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;