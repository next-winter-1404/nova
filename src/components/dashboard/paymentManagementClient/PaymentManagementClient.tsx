"use client"
import React, { FC, useState } from "react";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import FinanceReservationItems from "@/src/components/dashboard/financeItems/financeItems";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import { IAllPayments } from "@/src/core/types/IPayment";
import Input from "../../common/input/Input";
import useSearch from "@/src/utils/hooks/searchHook";

interface IProp {
  allPayment: IAllPayments[];
  navItems: string[];
}
const PaymentManagementClient: FC<IProp> = ({ allPayment, navItems }) => {
  const [search, setSearch] = useState("");

  const result = useSearch(allPayment, search, (allPayment, query) =>
    allPayment.filter((item) =>
      item.description?.toLowerCase().includes(query.toLowerCase())
    )
  );
  return (
    <DashboardContentContainer
      title="لیست پرداختی ها"
      topSectionContent={
        <Input
          parentWidth=" w-[200px] md:w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeHolder="جستجو..."
          dir="rtl"
          InputHeight="md:h-[50px]"
          borderColor="border border-white placeholder-gray-300"
          tagBgStyle={{ background: "var(--color-dark-600)", color: "white" }}
          labelText="جستجو"
        />
      }
    >
      <div className="flex flex-col gap-5">
        <ItemNavbar colsNumber={5} items={navItems} />
        <div>
          {result.length > 0 ? (
            result.map((payment) => (
              <div
                className="flex justify-between w-full items-center"
                key={payment.id}
              >
                <div className="grid grid-cols-5 gap-10 lg:text-[18px] md:text-[14px] text-white text-[8px]  w-full">
                  <UserName userId={Number(payment.userId)} />
                  <span>{payment.amount}</span>
                  <p className="mr-3 sm:mr-0">{payment.description}</p>
                  <p className="">
                    {payment.createdAt?.slice(0, 10) || "تاریخی وجود ندارد"}
                  </p>

                  <div className="md:-mr-15">
                    <StatusLabel status={payment.status} />
                  </div>
                </div>
                <FinanceReservationItems
                  bookingId={Number(payment.bookingId)}
                  paymentId={Number(payment.id)}
                  userId={payment.userId}
                  paymentStatus={payment.status}
                />
              </div>
            ))
          ) : (
            <div className="w-full text-3xl text-center mt-4 text-gray-300">
              پرداختی وجود ندارد
            </div>
          )}
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default PaymentManagementClient;
