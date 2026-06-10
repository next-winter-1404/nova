export interface IChatManegmentActionMenuProps {
  room: string;
}

export interface IChat {
  id: number;
  senderId: number;
  getterId: number;
  room: string;
  message: string;
  files: string[] | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface IChatManegmentActionMenuProps {
  chats: IChat[];
}