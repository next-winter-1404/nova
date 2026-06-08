"use client";
import { FC, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { FiAlertCircle } from "react-icons/fi";
import { Modal } from "../../common/modal";
import ProductCard from "../../common/productCard/ProductCard";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import AlertComponent from "../../common/alert/alert";
import { adminDeleteBlog } from "@/src/utils/sevices/api/blogs/deleteBlog";
import toast from "react-hot-toast";
import { adminDeleteContact } from "@/src/utils/sevices/api/admin/contactUs/deleteContact";
interface IProp {
  contactId: number;
  contactTitle?: string;
  contactMessage?: string;
}
const ContactUsItemsManagement: FC<IProp> = ({
  contactId,
  contactTitle,
  contactMessage,
}) => {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const router = useRouter();

  //   api calling
  const handleDeleteBlog = async () => {
    try {
      await adminDeleteContact(contactId);
      toast.success("پیام با موفقیت حذف شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در حذف پیام ");
      console.error(error);
    }
  };

  // drop down items with their functions
  const menuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => setIsDetailOpen(true),
    },

    {
      label: "حذف",
      icon: <TbTrash className="mt-px text-white" />,
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
        onOpenChange={setIsDetailOpen}
        open={isDetailOpen}
        contentClassName="bg-dark-900 text-white "
        mainContent={
          <div className="flex flex-col gap-8 " dir="rtl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span>عنوان نظر:</span>
                <p className="bg-dark-600 p-2 rounded-lg">{contactTitle}</p>
              </div>
              <div className="flex flex-col gap-2">
                <span>توضیحات نظر:</span>
                <p className="bg-dark-600 p-2 rounded-lg h-[150px]">
                  {contactMessage}
                </p>
              </div>
            </div>
          </div>
        }
      />

      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از انتخاب خود مطمعن هستید؟"
        isModalOpen={isAlertModalOpen}
        setIsModalOpen={setIsAlertModalOpen}
        onClickFunction={handleDeleteBlog}
      />
    </div>
  );
};

export default ContactUsItemsManagement;
