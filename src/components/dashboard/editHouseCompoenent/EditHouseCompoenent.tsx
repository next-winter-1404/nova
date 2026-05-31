"use client";
import SimpleDropdown from "@/src/components/common/dropDown";
import Input from "@/src/components/common/input/Input";
import { IOption } from "@/src/core/types/TDropDown";
import StarRate from "@/src/utils/hooks/star";
import { FC, useActionState, useEffect, useState } from "react";
import AccordionComponent from "../../common/accardeon/Accardeon";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import { IHouse } from "@/src/core/types/IHouse";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import LoginButton from "../../login/button/LoginButton";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
interface IProp {
  transactionItem: IOption[];
  categoriesItems: IOption[];
  houseId: number;
  editAction: any;

}
const EditHouseComponent: FC<IProp> = ({
  transactionItem,
  categoriesItems,
  houseId,
  editAction
}) => {
 
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(0);
  const { data: houseDetail, isLoading: houseLoading } =
    useQuery<IHouse | null>({
      queryKey: ["HouseDetail", houseId],
      queryFn: () => getHousesDetail(Number(houseId)),
      enabled: !!houseId,
      staleTime: 5 * 1000 * 60,
      refetchOnWindowFocus: false,
    });

    const [state, formAction] = useActionState(editAction.bind(null, houseId),
    {
      success: false,
  
    }
  )
    useEffect(() => {
      if (!state) return;
      if (state.success) {
        toast.success("اپدیت موفقیت امیز بود");
        queryClient.invalidateQueries({
          queryKey: ["HouseDetail", houseId],
        });
      } else {
        toast.error("خطایی در ویرایش ملک رخ داد");
      }
    }, [state]);
  
  const transactionType =
    searchParams.get("transaction_type") ?? houseDetail?.transaction_type ?? "";

  const category =
    searchParams.get("categories") ?? houseDetail?.categories?.[0] ?? "";

  if (houseLoading) {
    return <div>در حال بارگذاری...</div>;
  }
  const currentRate = rating || Number(houseDetail?.rate) || 0;
  return (
    <form action={formAction} className="flex flex-col gap-10">
    <input type="hidden" name="transaction_type" value={transactionType} />
    <input type="hidden" name="category" value={category} />
    <input type="hidden" name="rate" value={currentRate} />
  
    <div className="grid grid-cols-3 gap-5">
      <Input
        name="title"
        InputHeight="md:h-[50px] h-[35px] text-white"
        dir="rtl"
        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
        labelText="عنوان"
        defaultValue={houseDetail?.title || "عنوانی وجود ندارد"}
      />
  
      <Input
        name="price"
        InputHeight="md:h-[50px] h-[35px] text-white"
        dir="rtl"
        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
        labelText="قیمت"
        defaultValue={houseDetail?.price || 0}
      />
  
      <Input
        name="capacity"
        InputHeight="md:h-[50px] h-[35px] text-white"
        dir="rtl"
        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
        labelText="ظرفیت"
        defaultValue={houseDetail?.capacity || 0}
      />
    </div>
  
    <Input
      name="address"
      parentWidth="w-full"
      InputHeight="md:h-[50px] h-[35px] text-white w-full"
      dir="rtl"
      tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
      labelText="ادرس"
      defaultValue={houseDetail?.address || "ادرسی وجود ندارد"}
    />
  
    <div className="flex justify-evenly gap-6">
      <SimpleDropdown
        options={transactionItem}
        paramKey="transaction_type"
        placeholder={houseDetail?.transaction_type || "نوع ملک"}
        labelText="نوع ملک"
        triggerClassName="h-[50px] w-full"
        tagBg="bg-dark-900"
      />
  
      <SimpleDropdown
        options={categoriesItems}
        placeholder={houseDetail?.categories?.[0] || "دسته بندی"}
        labelText="دسته بندی"
        paramKey="categories"
        triggerClassName="h-[50px] w-full"
        tagBg="bg-dark-900"
      />
  
      <div className="flex-center">
        <StarRate initialRateNumber={currentRate}  onRate={setRating}/>
      </div>
    </div>
  
    <AccordionComponent
      twContentClassName="py-5"
      accordionContent={
        <div className="grid grid-cols-4 gap-5">
          <Input
            name="bathrooms"
            InputHeight="md:h-[50px] h-[35px] text-white"
            labelText="حمام"
            defaultValue={houseDetail?.bathrooms || 0}
            tagBgStyle={{
              background: "var(--color-dark-900)",
              color: "white",
            }}
          />
  
          <Input
            name="rooms"
            InputHeight="md:h-[50px] h-[35px] text-white"
            labelText="اتاق"
            defaultValue={houseDetail?.rooms || 0}
            tagBgStyle={{
              background: "var(--color-dark-900)",
              color: "white",
            }}
          />
  
          <Input
            name="parking"
            InputHeight="md:h-[50px] h-[35px] text-white"
            labelText="پارکینگ"
            defaultValue={houseDetail?.parking || 0}
            tagBgStyle={{
              background: "var(--color-dark-900)",
              color: "white",
            }}
          />
  
          <Input
            name="yard_type"
            InputHeight="md:h-[50px] h-[35px] text-white"
            labelText="نوع حیاط"
            defaultValue={houseDetail?.yard_type || "نوع حیاط مشخص نشده است"}
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
      name="caption"
      defaultValue={houseDetail?.caption || "توضیحی وجود ندارد"}
      InputHeight="md:h-[150px] h-[35px] text-white"
      labelText="توضیحات"
      tagBgStyle={{
        background: "var(--color-dark-900)",
        color: "white",
      }}
      dir="rtl"
    />
  
    <LoginButton
      buttonText="ذخیره تغییرات"
      noIcon
      width="w-[300px]"
    />
  </form>
  );
};

export default EditHouseComponent;
