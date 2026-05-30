"use client";
import SimpleDropdown from "@/src/components/common/dropDown";
import Input from "@/src/components/common/input/Input";
import { IOption } from "@/src/core/types/TDropDown";
import StarRate from "@/src/utils/hooks/star";
import { FC } from "react";
import AccordionComponent from "../../common/accardeon/Accardeon";
interface IProp {
  transactionItem: IOption[];
  categoriesItems: IOption[];
  houseId: number;
}
const EditHouseComponent: FC<IProp> = ({
  transactionItem,
  categoriesItems,
  houseId,
}) => {
  const houseDetail
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-3 gap-5">
        <Input
          InputHeight="md:h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="عنوان"
        />
        <Input
          InputHeight="md:h-[50px] h-[35px]  text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="قیمت"
        />
        <Input
          InputHeight="md:h-[50px] h-[35px]  text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="ظرفیت"
        />
      </div>
      <Input
        parentWidth="w-full"
        InputHeight="md:h-[50px] h-[35px] text-white w-full"
        dir="rtl"
        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
        labelText="ادرس"
      />

      <div className="flex justify-evenly gap-6">
        <SimpleDropdown
          options={transactionItem}
          paramKey="transaction_type"
          placeholder=""
          labelText=" نوع ملک"
          triggerClassName="h-[50px] w-full"
          tagBg="bg-dark-900"
        />
        <SimpleDropdown
          options={categoriesItems}
          placeholder=""
          labelText="دسته بندی"
          paramKey="categories"
          triggerClassName="h-[50px] w-full"
          tagBg="bg-dark-900"
        />
        <div className=" flex-center">
          <StarRate />
        </div>
      </div>
      <AccordionComponent
        twContentClassName="py-5"
        accordionContent={
          <div className="grid grid-cols-4 gap-5">
            <Input
              InputHeight="md:h-[50px] h-[35px] text-white "
              labelText="حمام"
              tagBgStyle={{
                background: "var(--color-dark-900)",
                color: "white",
              }}
            />
            <Input
              InputHeight="md:h-[50px] h-[35px] text-white "
              labelText="اتاق"
              tagBgStyle={{
                background: "var(--color-dark-900)",
                color: "white",
              }}
            />
            <Input
              InputHeight="md:h-[50px] h-[35px] text-white "
              labelText="پارکینگ"
              tagBgStyle={{
                background: "var(--color-dark-900)",
                color: "white",
              }}
            />
            <Input
              InputHeight="md:h-[50px] h-[35px] text-white "
              labelText="نوع حیاط"
              tagBgStyle={{
                background: "var(--color-dark-900)",
                color: "white",
              }}
            />
          </div>
        }
        accordionTitle="امکانات"
        twTitleClassName="text-white"
      />
      <Input
        InputHeight="md:h-[250px] h-[35px] text-white "
        labelText="توضیحات"
        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
      />
    </div>
  );
};

export default EditHouseComponent;
