"use client";
import { useState } from "react";
import { MdEdit, MdSend } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendChat } from "@/src/utils/sevices/api/chats/send/send";
import { useQueryClient } from "@tanstack/react-query";
import { getChatHistory } from "@/src/utils/sevices/api/chats/getChatHistory/getChatHistory";
import { FaUser } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import DropMenu from "../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { editMessage } from "@/src/utils/sevices/api/chats/editMessage/editMessage";
import { deleteMessage } from "@/src/utils/sevices/api/chats/deleteMessage/deleteMessage";
import { uploadChatFile } from "@/src/utils/sevices/api/chats/uploadChatFile/uploadChatFile";

interface ChatProps {
  senderId: number;
  sellerName?: string;
  sellerId: number;
}

const Chat = ({ senderId, sellerId, sellerName }: ChatProps) => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);

  const room = `seller-${sellerId}-user-${senderId}`; // creating room by using sellerId and senderId

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ========================= Getting Chat History ========================= //

  const { data, isLoading, error } = useQuery({
    queryKey: ["chat", room],
    queryFn: () => getChatHistory(room),
  });

  // ========================= Handle Sending Message ========================= //

  const sendMessageMutation = useMutation({
    mutationFn: sendChat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chat", room],
      });
    },
  });

  // handle send message

  const handleSend = async (e: any) => {
    e.preventDefault();

    if (!input.trim()) return; /* if the input is empty return function */

    if (editingMessageId) {
      await EditMessageMutation.mutateAsync({
        id: editingMessageId,
        message: input,
      });

      setEditingMessageId(null);
    } else {
      await sendMessageMutation.mutateAsync({
        room,
        getterId: sellerId,
        message: input,
      });
    }

    setInput("");
  };

  // ========================= Handle Editing Message ========================= //
  const handleEdit = (message: any) => {
    setInput(message.message);
    setEditingMessageId(message.id);
  };

  const EditMessageMutation = useMutation({
    mutationFn: editMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chat", room],
      });
    },
  });
  const handleEditMessage = async (id: number, message: string) => {
    EditMessageMutation.mutate({
      id,
      message,
    });
  };
  // ========================= Handle Deleting Message ========================= //
  const deleteMessageMutation = useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chat", room],
      });
    },
  });

  const handleDelete = async (id: number) => {
    deleteMessageMutation.mutate(id);
  };

  // ========================= Upload Chat File ========================= //
  const uploadMutation = useMutation({
    mutationFn: uploadChatFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chat", room],
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    uploadMutation.mutate({
      room,
      getterId: sellerId,
      files,
    });
  };

  return (
    <div
      className="w-full flex flex-col-reverse overflow-y-auto h-[600px] bg-dark-700 bg-cover bg-center scrollbar-thin scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
      style={{ direction: "rtl" }}
    >
      <form onSubmit={handleSend} className="flex p-3 bg-white shadow gap-3">
        {input && (
          <button
            type="submit"
            className="p-2 text-primary-accent-green flex-center hover:bg-primary-accent-green-transparent-20 rounded-full transition"
          >
            <MdSend className="w-6 h-6 rounded-full text-center" />
          </button>
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام خود را بنویسید..."
          className="flex-1 border text-black border-dark-purple rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 "
        />
        
          <span className="p-2 text-primary-accent-green hover:bg-primary-accent-green-transparent-20 rounded-full">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="relative flex-center">
              <FiPaperclip className="w-6 h-6 rounded-full" />
            </label>
          </span>
       
      </form>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col-reverse items-start chat-bg">
        <div className="flex flex-col space-y-2 ">
          {data?.map((message: any, index: any) => {
            const isMine = message.senderId === senderId;
            const updateMessageATime = message.updatedAt;
            const menuItems = [
              {
                label: "ویرایش",
                icon: <MdEdit className="w-4 h-4 text-white" />,
                onClick: () => handleEdit(message),
              },
              {
                label: "حذف",
                icon: <TiDeleteOutline className="w-4 h-4 text-white" />,
                onClick: () => handleDelete(message.id),
              },
            ];

            return (
              <div
                key={index}
                className={`group relative w-[80%] w-fit px-4 py-3 rounded-xl shadow  flex-center gap-2 ${isMine ? "senderMessage" : "getterMessage"}`}
              >
                
                  {message.message}
               
                {isMine && (
                  <div className="relative invisible group-hover:visible">
                    <DropMenu
                      trigger={
                        <button>
                          <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition hidden md:block" />
                          <TbDotsVertical className="w-5 h-5 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
                        </button>
                      }
                      items={menuItems}
                      align="end"
                      side="left"
                    />
                  </div>
                )}
                <div className="text-gray-300 absolute left-0 bottom-0">
                  {message.updatedAt || message.createdAt
                    ? new Date(
                        message.updatedAt || message.createdAt,
                      ).toLocaleTimeString("fa-IR")
                    : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full p-4 flex-center justify-end gap-2">
        <span className="text-16-regular text-white-pure">{sellerName}</span>
        <span className="text-white-pure p-2 rounded-full bg-gray-550">
          {" "}
          <FaUser className="w-4 h-4" />{" "}
        </span>
      </div>
    </div>
  );
};

export default Chat;
