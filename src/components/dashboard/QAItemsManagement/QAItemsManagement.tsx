"use client";
import { FC, useState } from "react";
import { TbDotsVertical, TbEye } from "react-icons/tb";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Modal } from "../../common/modal";
import ToolTip from "../../common/tooltip";
import { postAnswer } from "@/src/utils/sevices/api/QA/sendAnswer";
interface IProp {
  questionId: number;
  answer?: string | null;
}
const QAItemsManagement: FC<IProp> = ({ questionId, answer }) => {
  const [sendAnswer, setSendAnswer] = useState("");
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!sendAnswer.trim()) {
      toast.error("لطفاً پاسخ را وارد کنید");
      return;
    }
    setLoading(true);
    const res = await postAnswer(questionId, sendAnswer);
    setLoading(false);
    if (res.success) {
      toast.success(res.message);
      setSendAnswer("");
      router.refresh();
    } else {
      toast.error(res.message);
    }
  };
  return (
    <div>
      {answer ? (
        <div className=" md:w-[100px]  flex-center">
          <ToolTip
            mainContent={
              <TbEye
                className="w-5 h-5 text-gray-300 cursor-pointer "
                onClick={() => setIsModalOpen(true)}
              />
            }
            tooltipText="مشاهده پاسخ"
            
          />
          <Modal
            contentClassName="bg-dark-900 text-white"
            mainContent={<p className=" bg-dark-600 rounded-xl p-5" dir="rtl">{answer}</p>}
            modalTitle="پاسخ به این سوال"
            onOpenChange={setIsModalOpen}
            open={IsModalOpen}
          />
        </div>
      ) : (
        <Modal
          contentClassName="bg-dark-900 text-white"
          mainContent={
            <div className="flex flex-col gap-5 w-full" dir="rtl">
              <textarea className="min-h-[200px] p-2" value={sendAnswer} onChange={(e)=>setSendAnswer(e.target.value)}/>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-primary-accent-green py-2 rounded-xl text-black cursor-pointer"
              >
                {loading ? "در حال پاسخ..." : "ارسال پاسخ"}
              </button>
            </div>
          }
          modalBtn={
          <div>
            <div className="md:block hidden bg-primary-accent-green cursor-pointer md:w-[100px] w-10 h-10 md:p-3 ml-3 text-center rounded-xl  md: text-base text-[13px]">
              پاسخ
            </div>
            <TbDotsVertical className="w-5 h-5 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
</div>
          }
        />
      )}
    </div>
  );
};

export default QAItemsManagement;
