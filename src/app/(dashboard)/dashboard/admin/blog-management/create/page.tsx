"use client";
import React, { useActionState, useEffect } from "react";
import SimpleDropdown from "@/src/components/common/dropDown";
import Input from "@/src/components/common/input/Input";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import LoginButton from "@/src/components/login/button/LoginButton";
import { CreateBlog } from "@/src/utils/sevices/api/blogs/createBlog";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";


const CreateBlogPage= () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("categories");
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategory(),
  });
  
  console.log("error =", error);
  console.log("loading =", isLoading);
  const categoriesItems = categories?.data?.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));
  const [state, formAction] = useActionState(CreateBlog, {
    success: false,
    message: "",
  });
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
      window.history.back();
    } else {
      toast.error(state.message);
    }
  }, [state]);
console.log("categories---",categories)
  return (
    <form action={formAction} className="flex flex-col gap-10 w-full">
      <input type="hidden" name="category" value={category||""} />
      <Input
        name="title"
        InputHeight="h-[50px] h-[35px] text-white"
        dir="rtl"
        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
        labelText="عنوان"
      />
      <div className="grid grid-cols-2 gap-5">
        <Input
          name="estimated_reading_time"
          InputHeight="h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="مقدار زمان مطالعه"
        />
        <SimpleDropdown
          options={categoriesItems || []}
          paramKey="category"
          placeholder="دسته بندی"
          labelText="دسته بندی"
          triggerClassName="h-[50px] w-full"
          tagBg="bg-dark-900"
        />
      </div>
      <textarea
        className="h-[300px] border border-white rounded-xl text-white p-2"
        name="caption"
      />
      <LoginButton
        buttonText="ساخت وبلاگ"
        loadingText=" درحال ساخت ..."
        type="submit"
      />
    </form>
  );
};

export default CreateBlogPage;
