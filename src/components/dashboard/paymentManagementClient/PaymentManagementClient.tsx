"use client";

import React, { FC, useState } from "react";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import FinanceReservationItems from "@/src/components/dashboard/financeItems/financeItems";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import { IAllPayments } from "@/src/core/types/IPayment";
import Input from "../../common/input/Input";
import useSearch from "@/src/utils/hooks/searchHook";
import { formatPrice } from "@/src/utils/hooks/formatPrice";

interface IProp {
  allPayment: IAllPayments[];
  navItems: string[];
}

const PaymentManagementClient: FC<IProp> = ({
  allPayment,
  navItems,
}) => {
  const [search, setSearch] = useState("");

  const result = useSearch(allPayment, search, (data, query) =>
    data.filter((item) =>
      item.description?.toLowerCase().includes(query.toLowerCase())
    )
  );

  const gridStyle = {
    gridTemplateColumns: "repeat(6,minmax(0,1fr))",
  };

  return (
    <DashboardContentContainer
      title="لیست پرداختی ها"
      topSectionContent={
        <Input
          parentWidth="w-[200px] md:w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeHolder="جستجو..."
          dir="rtl"
          InputHeight="md:h-[50px]"
          borderColor="border border-white placeholder-gray-300"
          tagBgStyle={{
            background: "var(--color-dark-600)",
            color: "white",
          }}
          labelText="جستجو"
        />
      }
    >
      <div className="flex flex-col gap-5 w-full">

        {/* NAVBAR */}
        <ItemNavbar colsNumber={6} items={navItems} />

        {/* TABLE */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[900px] flex flex-col gap-3">

            {result.length > 0 ? (
              result.map((payment) => (
                <div
                  key={payment.id}
                  style={gridStyle}
                  className="
                    grid
                    items-center
                    gap-4

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
                    hover:shadow-2xl
                    hover:shadow-black/40

                    border
                    border-transparent
                    hover:border-white/10

                    cursor-pointer
                  "
                >
                  {/* User */}
                  <div className="flex items-center">
                    <UserName userId={Number(payment.userId)} />
                  </div>

                  {/* Amount */}
                  <div className="text-center font-medium">
                    {formatPrice(Number(payment.amount))}
                  </div>

                  {/* Description */}
                  <div className="text-center truncate">
                    {payment.description}
                  </div>

                  {/* Date */}
                  <div className="text-center">
                    {payment.createdAt?.slice(0, 10) ||
                      "تاریخی وجود ندارد"}
                  </div>

                  {/* Status */}
                  <div className="flex justify-center">
                    <StatusLabel status={payment.status} />
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center">
                    <FinanceReservationItems
                      bookingId={Number(payment.bookingId)}
                      paymentId={Number(payment.id)}
                      userId={payment.userId}
                      paymentStatus={payment.status}
                    />
                  </div>

                </div>
              ))
            ) : (
              <div className="text-center text-3xl text-gray-300 py-10">
                پرداختی وجود ندارد
              </div>
            )}

          </div>
        </div>

      </div>
    </DashboardContentContainer>
  );
};

export default PaymentManagementClient;