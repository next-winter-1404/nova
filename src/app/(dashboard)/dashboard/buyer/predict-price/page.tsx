"use client";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
import { predictPrice } from "@/src/utils/sevices/api/predictPrice/predictPrice";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbRobot } from "react-icons/tb";
const PredictPage = () => {
  const searchParams = useSearchParams();
  const [price, setPrice] = useState<number | null>(null);
  const category = searchParams.get("categories") ?? "";

  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });
  const categoriesItems =
    categories?.data?.map((cat) => ({
      value: cat.id,
      label: cat.name,
    })) || [];
  const [state, formAction] = useActionState(predictPrice, {
    success: false,
    message: "",
  });
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      setPrice(state.predictedPrice);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <DashboardContentContainer>
        <input type="hidden" name="amenities" value={category} />

        <div className="flex flex-col-center gap-10  w-full">
          <h1 className="text-center text-2xl text-white">
          با وارد کردن مشخصات ملک، قیمت تقریبی آن را مشاهده کنید
          </h1>
          <div className="grid grid-cols-2 gap-5  w-full">
            <Input
              placeHolder="متر مربع"
              name="size"
              borderColor="border-white-pure"
              InputHeight="md:h-[50px] h-[35px] text-white-pure"
              tagBgStyle={{
                background: "var(--color-dark-600)",
                color: "white-pure",
              }}
              labelText="متراژ"
            />

            <Input
              name="rooms"
              InputHeight="md:h-[50px] h-[35px] text-white-pure "
              borderColor="border-white-pure"
              dir="rtl"
              tagBgStyle={{
                background: "var(--color-dark-600)",
                color: "white-pure",
              }}
              labelText="تعداد اتاق"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 w-full">
            <Input
              name="location"
              borderColor="border-white-pure"
              InputHeight="md:h-[50px] h-[35px] text-white-pure"
              dir="rtl"
              tagBgStyle={{
                background: "var(--color-dark-600)",
                color: "white-pure",
              }}
              labelText="ادرس"
            />

            <SimpleDropdown
              options={categoriesItems}
              placeholder="دسته بندی"
              labelText="دسته بندی"
              paramKey="categories"
              triggerClassName="h-[50px] w-full"
              tagBg="bg-dark-600"
            />
          </div>
          <LoginButton buttonText=" پیش بینی قیمت" noIcon width="w-[300px]" loadingText="پیش بینی قیمت..."/>
        </div>
        <p className="text-white flex gap-2 items-center mt-6">
          <TbRobot className="w-6 h-6" />
          <span> قیمت پیش بینی شده:</span>
          {price ? (
            <span className="text-primary-accent-green">
              {formatPrice(price)} تومان
            </span>
          ) : (
            <span className="text-gray-400">----</span>
          )}
        </p>
      </DashboardContentContainer>
    </form>
  );
};

export default PredictPage;
