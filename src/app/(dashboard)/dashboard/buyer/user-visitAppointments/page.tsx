import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import BuyerVisitManagement from "@/src/components/dashboard/buyerVisitManagement/BuyerVisitManagement";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import VisitAppointmentMAnagement from "@/src/components/dashboard/visitAppointmentManagement/VisitAppointmentMAnagement";
import { getUserVisitAppointments } from "@/src/utils/sevices/api/visitAppointment/userVisitAppointments";
import React, { FC } from "react";
import { TbEye } from "react-icons/tb";

interface IProp {
  searchParams: Promise<{ houseId: string }>;
}
const BuyerVisitAppointmentPage: FC<IProp> = async ({ searchParams }) => {
  const items = ["تاریخ ملاقات", "نوع قرار", "تاریخ ایجاد قرار", "وضعیت"];

  const myVisits = await getUserVisitAppointments();

  return (
    <DashboardContentContainer
      title={`لیست قرار های ملاقات شما (${myVisits.length})`}
    >
      <div className="flex flex-col gap-4">
        <ItemNavbar colsNumber={4} items={items} />
        {myVisits.length > 0 ? (
          myVisits.map((appointment) => (
           <div className="flex justify-between w-full items-center" key={appointment.id}>
             <div
              className="grid grid-cols-4 items-center text-white text-[13px] w-full"
              
            >
              <p className="text-center">
                {appointment.appointmentTime.slice(0, 10)}
              </p>

              <p className="md:px-18 px-4">
                {appointment.type === "virtual" ? "مجازی" : "حضوری"}
              </p>

              <p className="md:px-10">{appointment.created_at?.slice(0, 10)}</p>

              <div className="md:-mr-8">
                <StatusLabel status={appointment.status} />
              </div>
            </div>
            <BuyerVisitManagement houseId={Number(appointment.houseId)}/>
           </div>
          ))
        ) : (
          <div className="w-full text-3xl text-center text-gray-300 ">
            قرار ملاقاتی برای شما وجود ندارد
          </div>
        )}
      </div>
    </DashboardContentContainer>
  );
};

export default BuyerVisitAppointmentPage;
