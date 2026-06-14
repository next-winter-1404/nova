"use client";

import { FC, useState } from "react";
import AccordionComponent from "../accardeon/Accardeon";
import { IHouseQA } from "@/src/core/types/IQA";
interface IProp {
  houseQA: IHouseQA[];
}
const PAGE_SIZE = 4;

const HouseQAList: FC<IProp> = ({ houseQA }) => {
  const [count, setCount] = useState(PAGE_SIZE);

  const visibleQuestions = houseQA.slice(0, count);

  return (
    <div className="flex flex-col gap-8">
      {houseQA.length > 0 ? (
        <>
          {visibleQuestions.map((QA) => (
            <AccordionComponent
              key={QA.id}
              twHeaderClassName="text-gray-300 cursor-pointer"
              twContentClassName="mt-3"
              twTitleClassName="text-[18px]"
              isLine={false}
              accordionTitle={QA.question || ""}
              accordionContent={
                QA.answer || "در حال حاضر پاسخی برای این سوال وجود ندارد"
              }
            />
          ))}

          <div className="flex justify-center gap-4">
            {count > PAGE_SIZE && (
              <button
                onClick={() =>
                  setCount((prev) => Math.max(PAGE_SIZE, prev - PAGE_SIZE))
                }
                className="text-primary-accent-green"
              >
                نمایش کمتر
              </button>
            )}

            {count < houseQA.length && (
              <button
                onClick={() => setCount((prev) => prev + PAGE_SIZE)}
                className="text-primary-accent-green"
              >
                نمایش بیشتر
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="w-full text-center text-gray-300 text-3xl">
          سوالی برای این ملک وجود ندارد
        </div>
      )}
    </div>
  );
};

export default HouseQAList;
