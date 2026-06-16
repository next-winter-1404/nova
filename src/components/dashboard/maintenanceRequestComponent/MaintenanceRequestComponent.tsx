import React, { FC } from "react";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import MaintenanceManagement from "@/src/components/dashboard/maintenanceManagement/MaintenanceManagement";
import { IMaintenanceRequest } from "@/src/core/types/IMaintenance";
import { formatDateTime } from "@/src/utils/hooks/formDates";
interface IProp {
  allMaintenance: IMaintenanceRequest[];
}
const MaintenanceRequestComponent: FC<IProp> = ({ allMaintenance }) => {
  const items = [
    "نام کاربر",
    "توضیحات خرابی",
    " ایجاد شده در تاریخ",
    "وضعیت",
    "عملیات",
  ];

  return (
    <DashboardContentContainer
      title={`لیست درخواست های تعمیرات (${allMaintenance.length})`}
    >
      <div className="flex flex-col gap-3 w-full">
        <ItemNavbar colsNumber={5} items={items} />

        <div className="flex flex-col gap-3 w-full">
          {allMaintenance.length > 0 ? (
            allMaintenance.map((maintenance) => (
              <div
                key={maintenance.id}
                className="
            grid
            grid-cols-5
            items-center

            w-full
            bg-dark-800
            rounded-xl

            px-4 md:px-6
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

            cursor-pointer
          "
              >
                {/* USER */}
                <div className="truncate text-center">
                  <UserName userId={Number(maintenance.userId)} />
                </div>

                {/* DESCRIPTION */}
                <p className="truncate text-center">
                  {maintenance.description}
                </p>

                {/* DATE */}
                <p className="text-center whitespace-nowrap">
                  {formatDateTime(maintenance.created_at)}
                </p>

                {/* STATUS */}
                <div className="flex justify-center">
                  <StatusLabel status={maintenance.status} />
                </div>

                {/* ACTIONS */}
                <div className="flex justify-center">
                  <MaintenanceManagement
                    MaintenanceId={Number(maintenance.id)}
                    description={maintenance.description}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-300 lg:text-3xl mt-5">
              درخواستی وجود ندارد
            </div>
          )}
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default MaintenanceRequestComponent;
