import DashboardChat from "@/src/components/dashboard/chat/DashboardChat";
import { getAllChats } from "@/src/utils/sevices/api/chats/getAllChats/getAllChats";

const BuyerChatDetail = async ({ params }: { params: Promise<{ room: string }> }) => {
  const chats = await getAllChats();
const { room } = await params;
  const firstChat = chats?.[0];
console.log("PARAMS:", params);
  return (
    <div className="padding-section">
      <DashboardChat
        room={room}
        senderId={firstChat?.senderId}
        sellerId={firstChat?.getterId}
        sellerName={firstChat?.sender?.fullName}
      />
    </div>
  );
};

export default BuyerChatDetail;
