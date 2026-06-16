"use client";
import { FC, useActionState, useEffect, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { Modal } from "../../common/modal";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AlertComponent from "../../common/alert/alert";
import Input from "../../common/input/Input";
import { adminDeleteCategory } from "@/src/utils/sevices/api/category/deleteCategory";
import LoginButton from "../../login/button/LoginButton";
import { editCategory } from "@/src/utils/sevices/api/category/editCategory";
interface IProp {
  categoryName?: string;
  categoryId?: number;
}
const CategoryItems: FC<IProp> = ({ categoryName, categoryId }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const router = useRouter();

//   edit category api call
  const [state, formAction] = useActionState(
    editCategory.bind(null, Number(categoryId)),
    {
      success: false,
      message: "",
    }
  );
//   edit category status
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
      setIsEditModalOpen(false)
    } else {
      toast.error(state.message);
    }
  }, [state]);

//   delete category comment
  const handleDeleteHouse = async () => {
    try {
      await adminDeleteCategory(Number(categoryId));
      toast.success("دسته بندی با موفقیت حذف شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در حذف دسته بندی ");
      console.error(error);
    }
  };

  // drop down items with their functions
  const menuItems = [
    {
      label: "ویرایش",
      icon: <TbEdit className="mt-px text-white-pure" />,
      onClick: () => setIsEditModalOpen(true),
    },
    {
      label: "حذف",
      icon: <TbTrash className="mt-px text-white-pure" />,
      onClick: () => setIsAlertModalOpen(true),
    },
  ];

  return (
    <div>
      <DropMenu
        trigger={
          <div>
            <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition hidden md:block" />
            <TbDotsVertical className="w-4 h-4 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
          </div>
        }
        items={menuItems}
        side="right"
        align="end"
      />
      <Modal
        contentClassName=" bg-dark-900"
        
        mainContent={
          <form action={formAction} className="flex-col-center gap-5 w-full ">
            <Input
            parentWidth="w-full"
              InputHeight="h-[50px] text-white "
              labelText="عنوان"
              defaultValue={categoryName}
              name="name"
              tagBgStyle={{background:"var(--color-dark-900)",color:"white"}}
              dir="rtl"
            />
            <LoginButton
              loadingText="درحال ویرایش..."
              buttonText="اعمال تغییرات"
              width="w-full"
              noIcon
            />
          </form>
        }
        onOpenChange={setIsEditModalOpen}
        open={isEditModalOpen}
      />

      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از انتخاب خود مطمعن هستید؟"
        isModalOpen={isAlertModalOpen}
        setIsModalOpen={setIsAlertModalOpen}
        onClickFunction={handleDeleteHouse}
      />
    </div>
  );
};

export default CategoryItems;
