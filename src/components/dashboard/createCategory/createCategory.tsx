"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Modal } from "../../common/modal";
import Input from "../../common/input/Input";
import LoginButton from "../../login/button/LoginButton";
import Button from "../../common/button/page";
import { createCategory } from "@/src/utils/sevices/api/category/createCategory";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateCategory = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, formAction] = useActionState(createCategory, {
    success: false,
    message: "",
  });
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
      setIsModalOpen(false);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <Modal
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      contentClassName=" bg-dark-900"
      mainContent={
        <form action={formAction} className="flex-col-center gap-5 w-full ">
          <Input
            parentWidth="w-full"
            InputHeight="h-[50px] text-white "
            labelText="عنوان"
            name="name"
            tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
            dir="rtl"
          />
          <LoginButton
            loadingText="درحال ساخت..."
            buttonText="ساخت دسته بندی"
            width="w-full"
            noIcon
          />
        </form>
      }
      modalBtn={
        <Button
          text={"ساخت دسته بندی +"}
          buttonStyle={{
            background: "var(--color-primary-accent-green)",
            color: "black",
            cursor: "pointer",
          }}
        />
      }
    />
  );
};

export default CreateCategory;
