import FadeIn from "@/src/components/animations/FadeIn";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import { getAllChats } from "@/src/utils/sevices/api/chats/getAllChats/getAllChats";
import Link from "next/link";

const SellerChatsPage = async () => {
  const gatAllBuyerChats = await getAllChats();
  console.log("gatAllBuyerChats = ", gatAllBuyerChats);
  
  return (
    <FadeIn>
      <DashboardContentContainer title="پیام‌ها">
        <div className="flex flex-col gap-3 w-full">
          {gatAllBuyerChats.length > 0 ? (
            gatAllBuyerChats.map((chat) => (
              <Link
                key={chat.room}
                href={`/dashboard/buyer/chats/${chat.room}`}
                className="
          flex items-center justify-between
          bg-dark-800 rounded-xl
          px-5 py-4
          transition-all duration-200
          hover:bg-dark-700 hover:-translate-y-1
        "
              >
                <div className="flex flex-col">
                  <span className="text-white font-medium">{chat.room}</span>

                  <span className="text-gray-400 text-sm truncate">
                    {chat.message}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full flex items-center justify-center py-20">
              <p className="text-gray-400 text-lg md:text-2xl">
                چتی برای شما وجود ندارد
              </p>
            </div>
          )}
        </div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default SellerChatsPage;
