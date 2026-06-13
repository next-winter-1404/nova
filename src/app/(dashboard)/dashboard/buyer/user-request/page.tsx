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
    <DashboardContentContainer title={`لیست درخواست های شما `}>
      <div className="flex flex-col gap-4">
        <ItemNavbar colsNumber={5} items={items} />
        {myRequests ? (
          <div className="grid grid-cols-5   items-center text-white lg:text-[18px] text-[13px] w-full " key={myRequests.id}>
            <UserName userId={Number(myRequests.reviewedBy)} />
            <p className=" truncate text-center">{myRequests.message}</p>
            <p className=" truncate px-6">{myRequests.adminNote||"پیامی وجود ندارد"}</p>
            <span className=" text-center">{formatDateTime(myRequests.createdAt)}</span>
            <div className="md:-mr-8">
              <StatusLabel status={myRequests.status} />
            </div>
          </div>
        ) : (
          <div className="w-full text-3xl text-center text-gray-300 ">
            درخواستی وجود ندارد
          </div>
        )}
      </div>
    </DashboardContentContainer>
  );
};

export default BuyerVisitAppointmentPage;
