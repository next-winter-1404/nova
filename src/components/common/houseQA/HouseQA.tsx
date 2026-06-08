import React, { FC } from "react";
import AccordionComponent from "../accardeon/Accardeon";
import { getHouseQA } from "@/src/utils/sevices/api/QA/gettHouseQA";
import { Modal } from "../modal";
import SendQAQuestion from "../../reserveHouse/sendQAQuestion/SendQAQuestion";

interface Props {
  houseId: number;
}
const HouseQA: FC<Props> = async ({ houseId }) => {
  const houseQA = await getHouseQA(houseId);
  return (
    <div className="flex flex-col gap-10 text-white" dir="rtl">
      <h1 className="font-semibold text-xl">
        پیش از رزرو یا خرید این ملک، ممکن است سوالاتی برای شما مطرح شود. در
        ادامه پاسخ برخی از پرتکرارترین سوالات کاربران را مشاهده می‌کنید.
      </h1>

      <div className="flex flex-col gap-8">
        {houseQA.length > 0 ? (
          houseQA
            .slice(0, 4)
            .map((QA) => (
              <AccordionComponent
                twHeaderClassName="text-gray-300 cursor-pointer"
                key={QA.id}
                twContentClassName="mt-3"
                twTitleClassName="text-[18px]"
                isLine={false}
                accordionTitle={QA.question || ""}
                accordionContent={
                  QA.answer || "در حال حاضر پاسخی برای این سوال وجود ندارد"
                }
              />
            ))
        ) : (
          <div className="w-full text-center text-gray-300  text-3xl">
            سوالی برای این ملک وجود ندارد
          </div>
        )}
      </div>
      <Modal
        modalTitle="سوالی دارید؟"
        contentClassName="bg-dark-900 text-white"
        modalDescription="سوال شما توسط فروشنده یا پشتیبانی بررسی شده و در کوتاه‌ترین زمان پاسخ داده می‌شود."
        modalBtn={
          <button
          type="button"
          className="bg-primary-accent-green text-black rounded-[16px] w-[200px] p-2"
        >
          سوالی دارید؟ بپرسید
        </button>
        }
        mainContent={
          <div>
            <SendQAQuestion houseId={houseId} />
          </div>
        }
      />
    </div>
  );
};

export default HouseQA;
