import FadeIn from "@/src/components/animations/FadeIn";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import ChatManegmentActionMenu from "@/src/components/dashboard/chatManegmentActionMenu/ChatManegmentActionMenu";
import { getAllChatAdmin } from "@/src/utils/sevices/api/admin/chat/getAllChatAdmin/getAllChatAdmin";
import { getAllChatInARoom } from "@/src/utils/sevices/api/admin/chat/getAllChatInARoom/getAllChatInARoom";
import { updateMessageAdmin } from "@/src/utils/sevices/api/admin/chat/updateMessageAdmin/updateMessageAdmin";
const items = [
  "شناسه گفت‌وگو",
  "تعداد کاربران",
  "آیدی کاربران",
  "نوع گفت‌وگو",
  "جزییات",
];

const ChatsManegment = async () => {
  const getAllChat = await getAllChatAdmin();

  const handleOpenChatDetail = () => {};
  return (
    <FadeIn>
      <DashboardContentContainer title="لیست چت روم ها">
        {/* NAVBAR */}
        <ItemNavbar colsNumber={5} items={items} />

        {/* LIST */}
        <div className="flex flex-col gap-3 mt-5 w-full">
          {getAllChat?.length > 0 ? (
            getAllChat.map((item: any, index: number) => (
              <div
                key={index}
                className="
              grid
              grid-cols-5
              items-center
              gap-4

              bg-dark-800
              rounded-xl
              px-8 md:px-10
py-4

              text-white-pure
              text-[12px] md:text-[15px]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:scale-[1.01]
              hover:bg-dark-700
              hover:shadow-xl
              hover:shadow-black/30

              border border-transparent
              hover:border-white/10
            "
              >
                {/* ROOM ID */}
                <div className="text-center truncate">{item.room}</div>

                {/* USERS COUNT */}
                <div className="text-center">{item.users?.length || 0}</div>

                {/* USERS IDS */}
                <div className="text-center truncate">
                  {item.users?.join(", ") || "--"}
                </div>

                {/* TYPE */}
                <div className="text-center">
                  {item.room.includes("seller") ? "private" : "group"}
                </div>

                {/* ACTIONS */}
                <div className="flex justify-center">
                  <ChatManegmentActionMenu room={item.room} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-3xl text-gray-300 py-10">
              چتی وجود ندارد
            </div>
          )}
        </div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default ChatsManegment;
