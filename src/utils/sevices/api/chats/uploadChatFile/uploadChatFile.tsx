import instance from "@/src/utils/sevices/interseptor";

interface UploadChatFileProps {
  room: string;
  getterId: number;
  files: File[];
}

export const uploadChatFile = async ({
  room,
  getterId,
  files,
}: UploadChatFileProps) => {
  const formData = new FormData();

  formData.append("getterId", getterId.toString());

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await instance.post(`/api/chats/upload/${room}`, formData);

  return response.data;
};
