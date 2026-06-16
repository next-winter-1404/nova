"use client";
import { FC, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { markAsRead } from "@/src/utils/sevices/api/notification/markAsread";
import { useRouter } from "next/navigation";

interface IProp {
  notifId: number;
}

const MarkAsReadButton: FC<IProp> = ({ notifId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router =useRouter()

  const handleMarkAsRead = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      await markAsRead(notifId);
      toast.success("با موفقیت علامت‌گذاری شد");
      router.refresh(); 
    } catch (error: any) {
      toast.error(error.message || "خطا در علامت‌گذاری");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      onClick={handleMarkAsRead}
      className={`bg-primary-accent-green rounded-xl text-[14px] whitespace-nowrap text-black w-[200px] flex items-center p-0.5 gap-1 cursor-pointer transition ${
        isLoading ? "opacity-50 pointer-events-none" : "hover:opacity-80"
      }`}
    >
      <FaCheckCircle />
      <p>{isLoading ? "در حال علامت‌گذاری..." : "علامت زدن به عنوان خوانده شده"}</p>
    </div>
  );
};

export default MarkAsReadButton;