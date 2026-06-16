import FadeIn from "@/src/components/animations/FadeIn";
import Button from "@/src/components/common/button/page";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import { Modal } from "@/src/components/common/modal";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import SellerHouse from "@/src/components/dashboard/sellerHouse/SellerHouse";
import VisitAppointmentMAnagement from "@/src/components/dashboard/visitAppointmentManagement/VisitAppointmentMAnagement";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { getSellerHouses } from "@/src/utils/sevices/api/seller/houses/getHouses";
import { getVisitAppointments } from "@/src/utils/sevices/api/visitAppointment/getVisitAppointment";
import { FC } from "react";
import { RiBuildingLine } from "react-icons/ri";
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
    "عملیات",
  ];
  const params = await searchParams;
  const houseId = params.houseId;
  const result = await getSellerHouses();
  const sellerHouse = result.houses || [];

  const allAppointment = await getVisitAppointments(Number(houseId));
  return (
    <FadeIn>
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
        <div className="flex flex-col gap-3 w-full">
          <ItemNavbar colsNumber={6} items={items} />

          {!houseId ? (
            <div className="w-full text-center py-16 text-blue-300 text-lg md:text-2xl">
              هنوز ملکی انتخاب نشده است. برای مشاهده قرارهای ملاقات، روی «انتخاب
              ملک» کلیک کنید.
            </div>
          ) : allAppointment.length > 0 ? (
            allAppointment.map((appointment) => (
              <div
                key={appointment.id}
                className="
          grid
          grid-cols-6
          items-center

          w-full
          bg-dark-800
          rounded-xl

          px-4 md:px-6
          py-4

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
                {/* نام کاربر */}
                <div className="flex justify-center truncate">
                  <UserName userId={Number(appointment.userId)} />
                </div>

                <p className="text-center truncate">
                  {formatDateTime(appointment.appointmentTime)}
                </p>

                <p className="text-center">
                  {appointment.type === "virtual" ? "مجازی" : "حضوری"}
                </p>

                <p className="text-center truncate">
                  {formatDateTime(appointment.created_at)}
                </p>

                <div className="flex justify-center">
                  <StatusLabel status={appointment.status} />
                </div>

                <div className="flex justify-center">
                  <VisitAppointmentMAnagement
                    visitId={Number(appointment.id)}
                    status={appointment.status}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-16 text-gray-300 text-xl md:text-3xl">
              هیچ قرار ملاقاتی برای این خانه وجود ندارد
            </div>
          )}
        </div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default SellerVisitAppointmentPage;
