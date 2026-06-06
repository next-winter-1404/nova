"use client";
import { FC, useActionState, useEffect, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical, TbEye } from "react-icons/tb";
import { FiAlertCircle } from "react-icons/fi";
import { Modal } from "../../common/modal";
import Image from "next/image";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IComment } from "@/src/core/types/IComment";
import Input from "../../common/input/Input";
import LoginButton from "../../login/button/LoginButton";
import { adminEditComment } from "@/src/utils/sevices/api/admin/comments/editComments/editComments";
import { adminDeleteComment } from "@/src/utils/sevices/api/admin/comments/deleteComments/deleteComments";
import AlertComponent from "../../common/alert/alert";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";

interface IProp {
  comment: IComment;
}
const CommentITemsManagement: FC<IProp> = ({ comment }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const router = useRouter();
  const [state, formAction] = useActionState(
    adminEditComment.bind(null, Number(comment.id)),
    {
      success: false,
      message: "",
    }
  );
  //   edit status
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
      setIsEditOpen(false);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  //   delete function
  const handleDeleteComment = async () => {
    try {
      await adminDeleteComment(Number(comment.id));
      toast.success("کامنت با موفقیت حذف شد ");
      router.refresh();
      setIsDeleteOpen(false);
    } catch (error) {
      toast.error("خطا در حذف کامنت ");
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
      label: "ویرایش",
      icon: <TbEdit className="mt-px text-white" />,
      onClick: () => setIsEditOpen(true),
    },
    {
      label: "حذف",
      icon: <TbTrash className="mt-px text-white" />,
      onClick: () => setIsDeleteOpen(true),
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
      {/* comment details modal */}
      <Modal
        onOpenChange={setIsDetailOpen}
        open={isDetailOpen}
        contentClassName="bg-dark-900 text-white "
        mainContent={
          <div className="flex flex-col gap-8 " dir="rtl">
            <div className="flex gap-3 items-center">
              <Image
                src={comment.user?.profilePicture || userPlaceHolder}
                alt="prof"
                width={37}
                height={37}
                className="rounded-lg border border-amber-50"
              />
              <p>
                {`${comment.user?.firstName} ${comment.user?.lastName}` ||
                  "نام کاربر"}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span>عنوان نظر:</span>
                <p className="bg-dark-600 p-2 rounded-lg">{comment.title}</p>
              </div>
              <div className="flex flex-col gap-2">
                <span>توضیحات نظر:</span>
                <p className="bg-dark-600 p-2 rounded-lg h-[150px]">
                  {comment.caption}
                </p>
              </div>
            </div>
          </div>
        }
      />
      {/* edit comment modal */}
      <Modal
        onOpenChange={setIsEditOpen}
        open={isEditOpen}
        contentClassName="bg-dark-900 text-white "
        mainContent={
          <form action={formAction} className="flex flex-col gap-8 " dir="rtl">
            <div className="flex gap-3 items-center">
              <ImageFallback
                fallbackSrc={userPlaceHolder}
                src={comment.user?.profilePicture || userPlaceHolder}
                alt="prof"
                width={37}
                height={37}
                className="rounded-lg border border-amber-50"
              />
              <p>
                {`${comment.user?.firstName} ${comment.user?.lastName}` ||
                  "نام کاربر"}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span>عنوان نظر:</span>
                <Input
                  InputHeight="h-[50px] text-white "
                  defaultValue={comment.title}
                  name="title"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span>توضیحات نظر:</span>

                <Input
                  InputHeight="h-[150px] text-white "
                  defaultValue={comment.caption}
                  name="caption"
                />
              </div>
            </div>
            <LoginButton
              buttonText="اعمال تغییرات"
              type="submit"
              loadingText="اعمال تغییرات..."
              noIcon
            />
          </form>
        }
      />
      {/* delete comment alert */}
      <AlertComponent
        acceptButtonText="حذف"
        alertText="ایا از حذف این نظر مطمعن هستید؟"
        isModalOpen={isDeleteOpen}
        onClickFunction={handleDeleteComment}
        setIsModalOpen={setIsDeleteOpen}
      />
    </div>
  );
};

export default CommentITemsManagement;
