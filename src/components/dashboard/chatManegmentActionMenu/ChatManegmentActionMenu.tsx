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
      icon: <MdEdit className="w-4 h-4 text-white" />,
      onClick: () => openEdit(chat),
    },
    {
      label: "حذف",
       icon: <TiDeleteOutline className="w-4 h-4 text-white" />,
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
          <DashboardContentContainer title="جزییات چت" topSectionContent={
            <div className="flex-center gap-2 text-tomato-red cursor-pointer" onClick={handleDeleteChat}><FaTrashAlt className="w-4 h-4 text-tomato-red" />حذف چت</div>
          }>
            <ItemNavbar colsNumber={5} items={items} />

            <div className="max-h-[70vh] overflow-y-auto w-full flex flex-col gap-3 mt-5">
              {isLoading ? (
                <div>در حال دریافت...</div>
              ) : (
                data?.chats?.map((chat: any) => (
                  <div
                    key={chat.id}
                    className="grid grid-cols-5 gap-3 items-center text-center border-b pb-2"
                    dir="rtl"
                  >
                    <div>{chat.id}</div>
                    <div>{chat.senderId}</div>
                    <div>{chat.getterId}</div>
                    <div className="break-words">{chat.message}</div>

                    <div className="flex justify-center">
                      <DropMenu
                        trigger={
                          <div>
                            <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition hidden md:block" />
                            <TbDotsVertical className="w-5 h-5 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
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
