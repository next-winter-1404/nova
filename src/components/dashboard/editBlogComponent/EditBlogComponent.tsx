"use client";
import React, { FC, useActionState, useEffect } from "react";
import SimpleDropdown from "@/src/components/common/dropDown";
import Input from "@/src/components/common/input/Input";
import { IOption } from "@/src/core/types/TDropDown";
import { IBlogs } from "@/src/core/types/IBogs";
import { useRouter, useSearchParams } from "next/navigation";
import LoginButton from "../../login/button/LoginButton";
import { EditBlog } from "@/src/utils/sevices/api/blogs/editBlog";
import toast from "react-hot-toast";

interface IProp {
  categoriesItems: IOption[];
  blogId: number;
  blogDetails?: IBlogs|null;
}
const EditBlogComponent: FC<IProp> = ({ categoriesItems, blogDetails }) => {
    const searchParams=useSearchParams()
    const router = useRouter()
    const category =
    searchParams.get("categories") ?? blogDetails?.category_id;
    const [state, formAction] = useActionState(EditBlog.bind(null,Number(blogDetails?.id)), {
        success: false,
        message: "",
      });
      useEffect(() => {
        if (!state.message) return;
    
        if (state.success) {
          toast.success(state.message);
          router.refresh()
          window.history.back();
        } else {
          toast.error(state.message);
        }
      }, [state]);
    
  return (
    <form action={formAction} className="flex flex-col gap-10 w-full">
        <input type="hidden" name="category" value={category} />
      <Input
        name="title"
        InputHeight="h-[50px] h-[35px] text-white"
        dir="rtl"
        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
        labelText="عنوان"
        defaultValue={blogDetails?.title}
      />
      <div className="grid grid-cols-2 gap-5">
        <Input
          name="estimated_reading_time"
          InputHeight="h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="مقدار زمان مطالعه"
          defaultValue={blogDetails?.estimated_reading_time}
        />
        <SimpleDropdown
          options={categoriesItems}
          paramKey="category"
          placeholder="دسته بندی"
          labelText="دسته بندی"
          triggerClassName="h-[50px] w-full"
          tagBg="bg-dark-900"
        />
      </div>
      <textarea
        className="h-[300px] border border-white rounded-xl text-white p-2"
        defaultValue={blogDetails?.caption}
        name="caption"
      />
      <LoginButton buttonText="اعمال تغییرات" loadingText="اعمال تغییرات ..." type="submit"/>
    </form>
  );
};

export default EditBlogComponent;
