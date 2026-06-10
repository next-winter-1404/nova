import React, { FC } from 'react'
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import MaintenanceManagement from "@/src/components/dashboard/maintenanceManagement/MaintenanceManagement";
import { IMaintenanceRequest } from '@/src/core/types/IMaintenance';
import { formatDateTime } from '@/src/utils/hooks/formDates';
interface IProp {
    allMaintenance:IMaintenanceRequest[]
}
const MaintenanceRequestComponent:FC<IProp> = ({allMaintenance}) => {
  const items = ["نام کاربر", "توضیحات خرابی", " ایجاد شده در تاریخ", "وضعیت"];

  return (
    <DashboardContentContainer
    title={`لیست درخواست های تعمیرات (${allMaintenance.length})`}
  >
    <div className="flex flex-col gap-5">
      <ItemNavbar colsNumber={4} items={items} />
      {allMaintenance.length > 0 ? (
        allMaintenance.map((maintenance) => (
          <div
            key={maintenance.id}
            className="flex justify-between w-full items-center"
          >
            <div className="grid grid-cols-4 items-center text-white w-full  text-[13px] md:text-base">
              <div className="px-10">
                <UserName userId={Number(maintenance.userId)} />
              </div>
              <p className="truncate text-center">{maintenance.description}</p>
              <p className="px-4 md:px-10">{formatDateTime(maintenance.created_at)}</p>

              <div className="md:-mr-8">
                <StatusLabel status={maintenance.status} />
              </div>
            </div>
            <MaintenanceManagement
              MaintenanceId={Number(maintenance.id)}
              description={maintenance.description}
            />
          </div>
        ))
      ) : (
        <div className="text-center text-gray-300 lg:text-3xl mt-5">
          درخواستی وجود ندارد
        </div>
      )}
    </div>
  </DashboardContentContainer>
  )
}

export default MaintenanceRequestComponent
