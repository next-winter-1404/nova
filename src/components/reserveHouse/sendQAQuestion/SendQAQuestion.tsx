"use client";

import { sendQuestion } from "@/src/utils/sevices/api/QA/sendQuestions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SendQAQuestion = ({ houseId }: { houseId: number }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
const router =useRouter()
  const handleSubmit = async () => {
    if (!question.trim()) {
      toast.error("لطفاً سوال را وارد کنید");
      return;
    }

    setLoading(true);

    const res = await sendQuestion(houseId, question);

    setLoading(false);

    if (res.success) {
      toast.success(res.message);
      setQuestion("");
      router.refresh()
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="flex flex-col gap-3" dir="rtl">
      <textarea
        className="min-h-[200px] border rounded-xl border-gray-300 p-3"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="سوال خود را بنویسید..."
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-primary-accent-green py-2 rounded-xl text-black cursor-pointer"
      >
        {loading ? "در حال ارسال..." : "ارسال سوال"}
      </button>

    </div>
  );
};

export default SendQAQuestion;