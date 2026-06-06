import Button from "@/src/components/common/button/page";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import { Modal } from "@/src/components/common/modal";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import SellerHouse from "@/src/components/dashboard/sellerHouse/SellerHouse";
import VisitAppointmentMAnagement from "@/src/components/dashboard/visitAppointmentManagement/VisitAppointmentMAnagement";
import { getSellerHouses } from "@/src/utils/sevices/api/seller/houses/getHouses";
import { getVisitAppointments } from "@/src/utils/sevices/api/visitAppointment/getVisitAppointment";
import React, { FC } from "react";
import { RiBuildingLine } from "react-icons/ri";
import { TbDog } from "react-icons/tb";
interface IProp {
  searchParams: Promise<{ houseId: string }>;
}
const SellerVisitAppointmentPage: FC<IProp> = async ({ searchParams }) => {
  const items = [
    "نام کاربر",
    "تاریخ ملاقات",
    "نوع قرار",
    "تاریخ ایجاد قرار",
    "وضعیت",
  ];
  const params = await searchParams;
  const houseId = params.houseId;
  const result = await getSellerHouses();
  const sellerHouse = result.houses || [];

  const allAppointment = await getVisitAppointments(Number(houseId));
  return (
    <DashboardContentContainer
    title={`لیست قرار های ملاقات شما (${allAppointment.length})`}
      topSectionContent={
        <Modal
          contentClassName="bg-dark-900 text-white text-right"
          modalTitle="لیست املاک شما:"
          width="lg:w-[60%] overflow-y-auto h-[550px]"
          mainContent={<SellerHouse modalHouse={sellerHouse} />}
          modalBtn={
            <Button
              text={"انتخاب ملک"}
              buttonStyle={{
                background: "var(--color-primary-accent-green)",
                color: "black",
              }}
              icon={<RiBuildingLine className="w-4 h-4" />}
            />
          }
        />
      }
    >
      <div className="flex flex-col gap-5">
        <ItemNavbar colsNumber={5} items={items} />
        {!houseId ? (
          <div className="w-full text-blue-300 text-center text-2xl mt-5">
            هنوز ملکی انتخاب نشده است. برای مشاهده قرارهای ملاقات، روی «انتخاب
            ملک» کلیک کنید.
          </div>
        ) : allAppointment.length > 0 ? (
          allAppointment.map((appointment) => (
           <div key={appointment.id} className="flex justify-between w-full items-center">
             <div
              
              className="grid grid-cols-5 items-center text-white w-full"
            >
              <div className="px-10">
                <UserName userId={Number(appointment.userId)} />
              </div>

              <p className="text-center">
                {appointment.appointmentTime.slice(0, 10)}
              </p>

              <p className="px-12">
                {appointment.type === "virtual" ? "مجازی" : "حضوری"}
              </p>

              <p className="px-5">{appointment.created_at?.slice(0, 10)}</p>

              <div className="-mr-8">
                <StatusLabel status={appointment.status} />
              </div>
            </div>
            <VisitAppointmentMAnagement visitId={Number(appointment.id)} status={appointment.status}/>
           </div>
          ))
        ) : (
          <div className="text-center text-gray-300 lg:text-3xl mt-5">
            هیچ قرار ملاقاتی برای این خانه وجود ندارد
          </div>
        )}
      </div>
    </DashboardContentContainer>
  );
};

export default SellerVisitAppointmentPage;
