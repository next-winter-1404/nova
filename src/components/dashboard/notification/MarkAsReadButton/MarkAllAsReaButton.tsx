"use client";
import AlertComponent from "@/src/components/common/alert/alert";
import LoginButton from "@/src/components/login/button/LoginButton";
import { markAllAsRead } from "@/src/utils/sevices/api/notification/markAsread";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MarkAllAsReaButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleMarkAllAsRead = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await markAllAsRead();
      toast.success("تمام اعلان ها با موفقیت علامت گذاری شد");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || "خطا در علامت‌گذاری");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <LoginButton
          width="p-2 text-[10px] md:text-[16px]"
          buttonText="علامت گذاری همه به عنوان خوانده شده "
          loadingText="علامت گذاری به عنوان خوانده شده"
          noIcon
        />
      </div>
      <AlertComponent
        acceptButtonText="موافقت"
        alertText="آیا مطمئن هستید که میخواهید همه مطالب سایت را به عنوان خوانده شده علامت بزنید؟"
        isModalOpen={isModalOpen}
        onClickFunction={handleMarkAllAsRead}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default MarkAllAsReaButton;
