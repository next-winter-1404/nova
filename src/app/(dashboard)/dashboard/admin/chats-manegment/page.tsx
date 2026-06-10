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
  const getAllChatInOneRoom = await updateMessageAdmin(37,"dhsgjgsd");

  console.log("getAllChatInOneRoom", getAllChatInOneRoom);

  const handleOpenChatDetail = () => {};
  return (
    <div className="padding-section flex-col-center text-white-pure">
      <DashboardContentContainer title="لیست چت روم ها">
        <div className="w-full flex-col-center">
          <ItemNavbar colsNumber={5} items={items} />
        </div>
        <div className="flex text-white-pure mt-5 items-center">
          {getAllChat?.length > 0 ? (
            <div className="w-full flex flex-col gap-5">
              {getAllChat?.length > 0 ? (
                <div className="w-full flex flex-col gap-5">
                  {getAllChat.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between w-full items-center"
                    >
                      <div className="flex-center justify-between w-full h-[50px] items-center">
                        {/* Room ID */}
                        <div className="w-[180px] overflow-ellipsis text-center">
                          {item.room}
                        </div>

                        {/* Users Count */}
                        <div className="text-center w-[150px] overflow-ellipsis">
                          {item.users?.length || 0}
                        </div>

                        {/* Users IDs */}
                        <div className="max-w-[250px] overflow-ellipsis text-center">
                          {item.users?.join(", ")}
                        </div>

                        {/* Type */}
                        <div className="text-center w-[150px]">
                          {item.room.includes("seller") ? "private" : "group"}
                        </div>

                        {/* Actions */}
                        <div className="ml-[140px] flex-center">
                          <ChatManegmentActionMenu room={item.room} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-4xl text-gray-300">چتی وجود ندارد</div>
              )}
            </div>
          ) : (
            <div className="text-4xl text-gray-300">کاربری وجود ندارد</div>
          )}
        </div>
      </DashboardContentContainer>
    </div>
  );
};

export default ChatsManegment;
