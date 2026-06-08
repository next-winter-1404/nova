"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Modal } from "../../common/modal";
import DatePickerComponent from "../../common/datePicker";
import Input from "../../common/input/Input";
import LoginButton from "../../login/button/LoginButton";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { adminCreateDiscount } from "@/src/utils/sevices/api/admin/discount/craeteDiscount";

const CreateDiscountComponent = () => {
  const [date, setDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const [state, formAction] = useActionState(adminCreateDiscount, {
    success: false,
    message: "",
  });

  // handle post response
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
      setIsModalOpen(false);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);
  return (
    <>
      <button
        className="cursor-pointer bg-primary-accent-green w-[150px] h-[43px] rounded-[16px] flex-center"
        onClick={() => setIsModalOpen(true)}
      >
        ساخت کد تخفیف +
      </button>
      <Modal
        contentClassName="bg-dark-900 text-white"
        onOpenChange={setIsModalOpen}
        open={isModalOpen}
        mainContent={
          <form
            action={formAction}
            className="flex flex-col gap-6 p-4"
            dir="rtl"
          >
            <div>
              <span>عنوان کد تخفیف:</span>
              <Input dir="rtl" name="code" InputHeight="h-[50px]" />
            </div>

            <div>
              <span>درصد:</span>
              <Input
                dir="rtl"
                name="discount_percentage"
                InputHeight="h-[50px]"
              />
            </div>

            <div>
              <span>تاریخ:</span>

              <DatePickerComponent
                paramKey="valid_until"
                placeholder="تاریخ انقضا"
                value={date}
                onChange={setDate}
              />

              <input type="hidden" name="valid_until" value={date} />
            </div>

            <LoginButton
              type="submit"
              buttonText="اعمال تغییرات"
              loadingText="در حال ذخیره..."
              noIcon
            />
          </form>
        }
      />
    </>
  );
};

export default CreateDiscountComponent;
