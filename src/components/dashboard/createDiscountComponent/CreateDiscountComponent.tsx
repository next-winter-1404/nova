"use client";
import React, { FC, useActionState, useEffect, useState } from "react";
import { Modal } from "../../common/modal";
import DatePickerComponent from "../../common/datePicker";
import Input from "../../common/input/Input";
import LoginButton from "../../login/button/LoginButton";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { adminCreateDiscount } from "@/src/utils/sevices/api/admin/discount/craeteDiscount";
import SellerHouse from "../sellerHouse/SellerHouse";
import { IHouse } from "@/src/core/types/IHouse";
interface IProp {
  allHouses: IHouse[];
}
const CreateDiscountComponent: FC<IProp> = ({ allHouses }) => {
  const [date, setDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const houseId = searchParams.get("houseId");
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
        className="cursor-pointer text-black bg-primary-accent-green w-[150px] h-[43px] rounded-[16px] flex-center"
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
            className="flex flex-col gap-6 p-4 "
            dir="rtl"
          >
            <input type="hidden" name="houseId" value={houseId||""}/>
            <div>
              <span>عنوان کد تخفیف:</span>
              <Input
                dir="rtl"
                name="code"
                InputHeight="h-[50px] border-white-pure  text-[10px] md:text-base"
              />
            </div>

            <div>
              <span>درصد:</span>
              <Input
                dir="rtl"
                name="discount_percentage"
                InputHeight="h-[50px] border-white-pure  text-[10px] md:text-base"
                textColor="text-white-pure"
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
            <Modal
              contentClassName="bg-dark-900"
              width="w-[60%] overflow-y-auto"
              mainContent={<SellerHouse modalHouse={allHouses} />}
              modalBtn={
                <button className="bg-primary-accent-green rounded-lg w-full flex-center cursor-pointer text-black h-[40px]">
                  انتخاب ملک
                </button>
              }
            />
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
