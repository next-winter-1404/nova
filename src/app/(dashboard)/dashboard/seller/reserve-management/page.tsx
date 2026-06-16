import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import ReservationItem from "@/src/components/dashboard/ReservationItem/ReservationItem";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
import { getBookings } from "@/src/utils/sevices/api/processReserve/getbooking";
import { FC } from "react";
interface IProps {
  searchParams: Promise<IFilters>;
}
interface IFilters {
  order?: string;
  sort?: string;
  page?: string | number;
  limit?: string | number;
}
const SellerReservePage: FC<IProps> = async ({ searchParams }) => {
  const limit = 5;
  const params = await searchParams;
  const order = params.order;
  const sort = params.sort;
  const currentPage = Number(params.page) || 1;
  const filters: IFilters = {};
  if (order) filters.order = order;
  if (sort) filters.sort = sort;
  if (currentPage) filters.page = currentPage;
  if (limit) filters.limit = limit;
  const result = await getBookings(filters);
  const booking = result?.data || [];
  const totalPages = Math.ceil(Number(result.totalCount) / limit);

  const items = [
    "نام اقامتگاه",
    "تاریخ رزرو",
    "قیمت کل",
    "تعداد مسافر",
    "وضعیت رزو",
    "وضعیت پرداخت",
  ];
  const sortItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  const dropItem = [
    { value: "created_at", label: "زمان ایجاد" },
    { value: "updated_at", label: " آخرین ویرایش" },
    { value: "check_in_date", label: "تاریخ ورود" },
    { value: "check_out_date", label: "تاریخ خروج" },
  ];

  return (
    <FadeIn>
      <div>
        <DashboardContentContainer
          title="لیست رزرو های شما"
          twTopContent="w-1/2"
          topSectionContent={
            <div className="flex gap-4  w-full">
              <SimpleDropdown
                options={sortItem}
                paramKey="order"
                placeholder="ترتیب نمایش"
                labelText="ترتیب نمایش"
                tagBg="bg-dark-600"
                triggerClassName="w-1/2 h-[50px]"
              />
              <SimpleDropdown
                options={dropItem}
                paramKey="sort"
                placeholder="انتخاب کنید"
                labelText="مرتب کردن بر اساس"
                tagBg="bg-dark-600"
                triggerClassName="w-1/2 h-[50px]"
              />
            </div>
          }
        >
          <div className="flex flex-col items-end">
            <div className="flex flex-col gap-5 w-full">
              <ItemNavbar colsNumber={6} items={items} />
              <div className="flex text-white mt-5 items-center">
                {booking?.length > 0 ? (
                  <div className="w-full flex flex-col gap-5">
                    <>
                      {booking?.map((item) => (
                        <div
                          className="flex justify-between w-full items-center"
                          key={item.id}
                        >
                          <div className="grid grid-cols-6 w-full  items-center md:text-[16px] text-[10px]">
                            <div className="flex gap-4 items-center xl:max-w-[300px] ">
                              <div className="w-[100px] h-[72px] rounded-xl hidden md:block bg-gray-600"></div>
                              <div className="whitespace-nowrap">
                                {item.house?.title || "عنوانی وجود ندارد"}
                              </div>
                            </div>
                            <div className=" text-center">
                              {formatDateTime(item.created_at)}
                            </div>
                            <div
                              className="flex-center gap-1 text-center "
                              dir="rtl"
                            >
                              <span>
                                {formatPrice(Number(item.house?.price)) ||
                                  "  --"}
                              </span>
                              <span>تومان</span>
                            </div>
                            <span className="text-center ml-5">
                              {item.traveler_details?.length} نفر
                            </span>
                            <StatusLabel status={item.status} />
                            <StatusLabel status={item.status} />
                          </div>

                          <ReservationItem
                            houseId={Number(item.houseId)}
                            item={item}
                          />
                        </div>
                      ))}
                    </>
                  </div>
                ) : (
                  <div className="text-4xl text-gray-300">رزوری وجود ندارد</div>
                )}
              </div>
            </div>
            <PaginationClient
              totalPages={totalPages}
              totalCount={Number(result.totalCount)}
            />
          </div>
        </DashboardContentContainer>
      </div>
    </FadeIn>
  );
};

export default SellerReservePage;
