"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllChatInARoom } from "@/src/utils/sevices/api/admin/chat/getAllChatInARoom/getAllChatInARoom";
import { deleteMessageAdmin } from "@/src/utils/sevices/api/admin/chat/deleteMessageAdmin/deleteMessageAdmin";
import { updateMessageAdmin } from "@/src/utils/sevices/api/admin/chat/updateMessageAdmin/updateMessageAdmin";

import { Modal } from "../../common/modal";
import DashboardContentContainer from "../../common/dashboardcontentcontainer/container";
import ItemNavbar from "../../common/dashboardItemNavbar/ItemNavbar";
import DropMenu from "../../common/dropMenu/DropMenu";
import Input from "../../common/input/Input";
import LoginButton from "../../login/button/LoginButton";

import { TbDots, TbDotsVertical } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";

import toast from "react-hot-toast";
import { deleteChatAdmin } from "@/src/utils/sevices/api/admin/chat/deleteChatAdmin/deleteChatAdmin";

const items = ["شناسه", "فرستنده", "گیرنده", "متن پیام", "عملیات"];

const ChatManegmentActionMenu = ({ room }: any) => {
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [message, setMessage] = useState("");

  // ================= GET =================
  const { data, isLoading } = useQuery({
    queryKey: ["room-chats", room],
    queryFn: () => getAllChatInARoom(room),
  });

  // ================= UPDATE =================
  const updateMutation = useMutation({
    mutationFn: ({ id, message }: any) => updateMessageAdmin(id, message),

    onSuccess: () => {
      toast.success("ویرایش انجام شد");

      queryClient.invalidateQueries({
        queryKey: ["room-chats", room],
      });

      setIsEditOpen(false);
    },

    onError: () => {
      toast.error("خطا در ویرایش");
    },
  });

  // ================= DELETE MESSAGE =================
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteMessageAdmin(id),

    onSuccess: () => {
      toast.success("پیام حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["room-chats", room],
      });
    },
  });

  // ================= DELETE CHAT =================
  const deleteChatMutation = useMutation({
    mutationFn: (room: string) => deleteChatAdmin(room),

    onSuccess: () => {
      toast.success("چت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["room-chats", room],
      });
    },
  });

  // ================= HANDLERS =================
  const openEdit = (chat: any) => {
    setSelectedChat(chat);
    setMessage(chat.message);
    setIsEditOpen(true);
  };

  const handleEdit = (e: any) => {
    e.preventDefault();

    updateMutation.mutate({
      id: selectedChat.id,
      message,
    });
  };

  const handleDeleteChat = () => {
    deleteChatMutation.mutate(room);
  };

  // ================= DROP ITEMS =================
  const getDropItems = (chat: any) => [
    {
      label: "ویرایش",
      icon: <MdEdit className="w-4 h-4 text-white-pure" />,
      onClick: () => openEdit(chat),
    },
    {
      label: "حذف",
      icon: <TiDeleteOutline className="w-4 h-4 text-white-pure" />,
      onClick: () => deleteMutation.mutate(chat.id),
    },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>مشاهده</button>

      {/* ================= MAIN MODAL ================= */}
      <Modal
        open={isOpen}
        onOpenChange={setIsOpen}
        contentClassName="bg-dark-900"
        width="w-[60%]"
        mainContent={
          <DashboardContentContainer
  title="جزییات چت"
  topSectionContent={
    <div
      className="flex-center gap-2 text-tomato-red cursor-pointer"
      onClick={handleDeleteChat}
    >
      <FaTrashAlt className="w-4 h-4 text-tomato-red" />
      حذف چت
    </div>
  }
>

  {/* NAVBAR */}
  <ItemNavbar colsNumber={5} items={items} />

  {/* LIST WRAPPER (FIX اصلی اینجاست) */}
  <div className="mt-5 flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">

    {isLoading ? (
      <div className="text-center text-gray-400">در حال دریافت...</div>
    ) : (
      data?.chats?.map((chat: any) => (
        <div
          key={chat.id}
          className="
            grid
            grid-cols-5
            items-center
            gap-4

            bg-dark-800
            rounded-xl

            px-4 md:px-6
            py-3

            text-white-pure
            text-[12px] md:text-[14px]

            transition-all duration-300

            hover:-translate-y-1
            hover:scale-[1.01]
            hover:bg-dark-700
            hover:shadow-xl hover:shadow-black/30

            border border-transparent hover:border-white/10

            w-full min-w-0
          "
          dir="rtl"
        >
          <div className="text-center truncate">{chat.id}</div>
          <div className="text-center truncate">{chat.senderId}</div>
          <div className="text-center truncate">{chat.getterId}</div>
          <div className="text-center truncate">{chat.message}</div>

          <div className="flex justify-center">
            <DropMenu
              trigger={
                <div>
                  <TbDots className="w-5 h-5 text-gray-400 hover:text-white hidden md:block" />
                  <TbDotsVertical className="w-5 h-5 text-gray-400 hover:text-white md:hidden" />
                </div>
              }
              items={getDropItems(chat)}
            />
          </div>

        </div>
      ))
    )}

  </div>

</DashboardContentContainer>
        }
      />

      {/* ================= EDIT MODAL ================= */}
      <Modal
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        contentClassName="bg-dark-900"
        width="w-[40%]"
        mainContent={
          <form onSubmit={handleEdit} className="flex flex-col gap-5 p-5">
            <Input
              labelText="متن پیام"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <LoginButton
              width="w-full"
              buttonText="ذخیره تغییرات"
              type="submit"
              loadingText="در حال ذخیره..."
            />
          </form>
        }
      />
    </>
  );
};

export default ChatManegmentActionMenu;
