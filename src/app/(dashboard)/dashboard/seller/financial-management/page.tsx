import FadeIn from "@/src/components/animations/FadeIn";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import DashboardInformation from "@/src/components/common/dashboardInformation/dashboardInformation";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { getSellerPayment } from "@/src/utils/sevices/api/sellerPayment/page";
import { getSellerPaymentCard } from "@/src/utils/sevices/api/sellerPaymentCard/page";
import React, { FC } from "react";
import { TbPinFilled } from "react-icons/tb";
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

const SellerPaymentPage: FC<IProps> = async ({ searchParams }) => {
  const params = await searchParams;
  const status = params.status;
  const orders = params.orders;
  const filter: IFilter = {};
  if (status) filter.status = status;
  if (orders) filter.orders = orders;
  filter.page = params.page ? parseInt(params.page, 10) : 1;
  filter.limit = params.limit ? parseInt(params.limit, 10) : 10;
  const paymentList = await getSellerPayment(filter);
  const totalPages = Math.ceil(paymentList.totalCount / filter.limit);
  const result = paymentList?.payments || [];
  const payStatus = [
    { value: "completed", label: "تایید شده" },
    { value: "failed", label: "تایید نشده" },
    { value: "pending", label: " در انتظار" },
  ];
  const orderItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];

  const report = await getSellerPaymentCard();
  return (
    <FadeIn>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 justify-between w-full ">
          <DashboardInformation
            cardText="درآمد ماه جاری"
            content={
              <div className="flex gap-1.5 text-white-pure items-center justify-center">
                {report.totalCurrentMonthAmount} <h2>تومان</h2>
              </div>
            }
            icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          />
          <DashboardInformation
            cardText=" درآمد ماه قبل"
            content={
              <div className="flex gap-1.5 text-white-pure items-center justify-center">
                {report.totalPerviousMonthAmount} <h2>تومان</h2>
              </div>
            }
            icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          />
          <DashboardInformation
            cardText=" درآمد کل"
            content={
              <div className="flex gap-1.5 text-white-pure items-center justify-center">
                {report.totalAmount} <h2>تومان</h2>
              </div>
            }
            icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          />
          <DashboardInformation
            cardText="تعداد کل پرداخت ها"
            content={
              <div className="flex gap-1.5 text-white-pure items-center justify-center">
                {report.totalPayments} <h2>تومان</h2>
              </div>
            }
            icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          />
        </div>
        <DashboardContentContainer
          twTopContent="w-1/2"
          title="لیست تراکنش های شما"
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
          <div className="flex flex-col gap-5 w-full">
            <ItemNavbar colsNumber={4} items={items} />
            <div className="flex text-white mt-5 items-center">
              {result?.length > 0 ? (
                <div className="w-full flex flex-col gap-5">
                  <>
                    {result?.map((item) => (
                      <div
                        className="flex justify-between w-full items-center"
                        key={item.id}
                      >
                        <div className="grid grid-cols-5 w-full h-[50px] items-center">
                          <div className="flex-center whitespace-nowrap">
                            {item.createdAt || "- -"}
                          </div>
                          <div
                            className="flex-center gap-1 text-center "
                            dir="rtl"
                          >
                            <span>{item.amount || "--"}</span>
                            <span>تومان</span>
                          </div>
                          <div className="text-center mr-[100px]">
                            {item.description}
                          </div>
                          <div className="mr-[175px] text-center">
                            <StatusLabel status={item.status} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                </div>
              ) : (
                <div className="text-4xl text-gray-300">رزوری وجود ندارد</div>
              )}
            </div>
          </div>
        </DashboardContentContainer>

        <PaginationClient
          totalPages={totalPages}
          totalCount={paymentList.totalCount}
        />
      </div>
    </FadeIn>
  );
};

export default SellerPaymentPage;
