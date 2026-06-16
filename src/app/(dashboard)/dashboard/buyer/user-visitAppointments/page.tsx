import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import BuyerVisitManagement from "@/src/components/dashboard/buyerVisitManagement/BuyerVisitManagement";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { getUserVisitAppointments } from "@/src/utils/sevices/api/visitAppointment/userVisitAppointments";
import React, { FC } from "react";

interface IProp {
  searchParams: Promise<{ houseId: string }>;
}
const BuyerVisitAppointmentPage: FC<IProp> = async ({ searchParams }) => {
  const items = [
    "تاریخ ملاقات",
    "نوع قرار",
    "تاریخ ایجاد قرار",
    "وضعیت",
    "مشاهده",
  ];

  const myVisits = await getUserVisitAppointments();

  return (
    <FadeIn>
      <DashboardContentContainer
        title={`لیست قرار های ملاقات شما (${myVisits.length})`}
      >
        <div className="flex flex-col gap-3 w-full">
          <ItemNavbar colsNumber={5} items={items} />

          <div className="flex flex-col gap-3 w-full">
            {myVisits.length > 0 ? (
              myVisits.map((appointment) => (
                <div
                  key={appointment.id}
                  className="
            grid
            grid-cols-5
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

            cursor-pointer
          "
                >
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
                    <BuyerVisitManagement
                      houseId={Number(appointment.houseId)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex items-center justify-center py-20">
                <p className="text-gray-400 text-xl md:text-2xl">
                  قرار ملاقاتی برای شما وجود ندارد
                </p>
              </div>
            )}
          </div>
        </div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default BuyerVisitAppointmentPage;
