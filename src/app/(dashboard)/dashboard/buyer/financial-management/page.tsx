import FadeIn from "@/src/components/animations/FadeIn";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import Pagination from "@/src/components/common/pagination/page";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import { getBuyerPayment } from "@/src/utils/sevices/api/buyerPayment/getBuyerPayment";
import React, { FC, Suspense } from "react";
const items = ["تاریخ", "مبلغ", "بابت ", "وضعیت پرداخت"];

interface IProps {
  searchParams: Promise<IFilter>;
}
interface IFilter {
  status?: string;
  orders?: string;
  page?: number;
  limit?: number;
}

const BuyerPaymentPage: FC<IProps> = async ({ searchParams }) => {
  const params = await searchParams;
  const status = params.status;
  const orders = params.orders;
  const limit = 5;
  const currentPage = Number(params.page) || 1;
  const filter: IFilter = {};
  if (status) filter.status = status;
  if (orders) filter.orders = orders;
  if (currentPage) filter.page = currentPage;
  if (limit) filter.limit = limit;

  const paymentList = await getBuyerPayment(filter);
  const totalPages = Math.ceil(Number(paymentList.totalCount) / limit);
  const result = paymentList?.payments || [];
  const payStatus = [
    { value: "completed", label: "تایید شده" },
    { value: "cancelled", label: "تایید نشده" },
    { value: "pending", label: " در انتظار" },
  ];
  const orderItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  return (
    <FadeIn>
      <div className="flex flex-col">
        <DashboardContentContainer
          twTopContent="w-1/2"
          title="لیست تراکنش های مشتریان"
          topSectionContent={
            <div className="w-full flex py-2 gap-4">
              <SimpleDropdown
                options={payStatus}
                paramKey="status"
                placeholder="انتخاب کنید"
                labelText="وضعیت پرداخت"
                tagBg="bg-dark-600"
                triggerClassName="w-1/2 h-[50px]"
              />
              <SimpleDropdown
                options={orderItem}
                paramKey="orders"
                placeholder="انتخاب کنید"
                labelText=" ترتیب نمایش"
                tagBg="bg-dark-600"
                triggerClassName="w-1/2 h-[50px]"
              />
            </div>
          }
        >
          <div className="flex flex-col items-end">
            <div className="flex flex-col gap-3 w-full">
              <ItemNavbar colsNumber={4} items={items} />

              <div className="flex flex-col gap-3 w-full">
                {result?.length > 0 ? (
                  result.map((item) => (
                    <div
                      key={item.id}
                      className="
            grid
            grid-cols-4
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
                        {item.createdAt || "--"}
                      </p>

                      <p className="text-center truncate">
                        {item.amount ? `${item.amount} تومان` : "--"}
                      </p>

                      <p className="text-center truncate">
                        {item.description || "--"}
                      </p>

                      <div className="flex justify-center">
                        <StatusLabel status={item.status} />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full flex items-center justify-center py-20">
                    <p className="text-gray-400 text-xl md:text-2xl">
                      تراکنشی وجود ندارد
                    </p>
                  </div>
                )}
              </div>

              <PaginationClient
                totalPages={totalPages}
                totalCount={Number(paymentList.totalCount)}
              />
            </div>
          </div>
        </DashboardContentContainer>
      </div>
    </FadeIn>
  );
};

export default BuyerPaymentPage;
