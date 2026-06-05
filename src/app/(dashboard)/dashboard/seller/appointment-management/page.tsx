import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import React from "react";

const SellerVisitAppointmentPage = () => {
  const items = [
    "نانم کاربر",
    "ناریخ ملاقات",
    "نوع قرار",
    "تاریخ ایجاد قرار",
    "وضعیت",
  ];
  return (
    <DashboardContentContainer>
      <div className="flex flex-col gap-5">
        <ItemNavbar colsNumber={5} items={items} />
      </div>
    </DashboardContentContainer>
  );
};

export default SellerVisitAppointmentPage;
