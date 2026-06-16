import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { getCurrentUserRequest } from "@/src/utils/sevices/api/seller/sellerUpgrade/getCurrentUserRequest";
import React, { FC } from "react";
interface IProp {
  searchParams: Promise<{ houseId: string }>;
}
const BuyerVisitAppointmentPage: FC<IProp> = async ({ searchParams }) => {
  const items = [
    " دیده شده توسط",
    "پیام درخواست",
    "پیام ادمین",
    "تاریخ ثبت درخواست",
    "وضعیت",
  ];

  const myRequests = await getCurrentUserRequest();
  return (
    <FadeIn>
      <DashboardContentContainer title={`لیست درخواست های شما `}>
        <div className="flex flex-col gap-3 w-full">
          <ItemNavbar colsNumber={5} items={items} />

          {myRequests ? (
            <div
              className="
        grid
        grid-cols-5
        items-center

        w-full
        bg-dark-800
        rounded-xl

        px-3 md:px-5
        py-3

        text-white-pure
        text-[11px] md:text-[15px]

        transition-all
        duration-300
        ease-out
        transform-gpu

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:bg-dark-700
        hover:shadow-xl
        hover:shadow-black/30

        border
        border-transparent
        hover:border-white/10
      "
            >
              <div className="flex justify-center">
                <UserName userId={Number(myRequests.reviewedBy)} />
              </div>

              <p className="text-center truncate px-2">{myRequests.message}</p>

              <p className="text-center truncate px-2">
                {myRequests.adminNote || "پیامی وجود ندارد"}
              </p>

              <p className="text-center truncate">
                {formatDateTime(myRequests.createdAt)}
              </p>

              <div className="flex justify-center">
                <StatusLabel status={myRequests.status} />
              </div>
            </div>
          ) : (
            <div className="w-full flex items-center justify-center py-20">
              <p className="text-gray-400 text-xl md:text-2xl">
                درخواستی وجود ندارد
              </p>
            </div>
          )}
        </div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default BuyerVisitAppointmentPage;
