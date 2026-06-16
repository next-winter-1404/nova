import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import ReservationItem from "@/src/components/dashboard/ReservationItem/ReservationItem";
import { formatDateTime } from "@/src/utils/hooks/formDates";
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
    "وضعیت رزرو",
    "عملیات"
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
      <div className="flex flex-col gap-3 w-full">
  <ItemNavbar colsNumber={6} items={items} />

  <div className="flex flex-col gap-3 w-full">
    {booking?.length > 0 ? (
      booking.map((item) => (
        <div
          key={item.id}
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

            cursor-pointer
          "
        >
          {/* نام اقامتگاه */}
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-[70px] h-[55px] rounded-lg bg-gray-600 hidden md:block shrink-0" />

            <span className="truncate">
              {item.house?.title || "عنوانی وجود ندارد"}
            </span>
          </div>

          {/* تاریخ رزرو */}
          <p className="text-center truncate">
            {formatDateTime(item.created_at)}
          </p>

          {/* قیمت */}
          <p className="text-center truncate">
            {item.house?.price
              ? `${item.house.price} تومان`
              : "--"}
          </p>

          {/* تعداد مسافر */}
          <p className="text-center">
            {item.traveler_details?.length || 0} نفر
          </p>

          {/* وضعیت */}
          <div className="flex justify-center">
            <StatusLabel status={item.status} />
          </div>

          {/* عملیات */}
          <div className="flex justify-center">
            <ReservationItem
              houseId={Number(item.houseId)}
              item={item}
            />
          </div>
        </div>
      ))
    ) : (
      <div className="w-full flex items-center justify-center py-20">
        <p className="text-gray-400 text-xl md:text-2xl">
          رزروی وجود ندارد
        </p>
      </div>
    )}
  </div>

  <PaginationClient
    totalPages={totalPages}
    totalCount={Number(result.totalCount)}
  />
</div>

<PaginationClient
  totalPages={totalPages}
  totalCount={Number(result.totalCount)}
/>
      </DashboardContentContainer>
    </div>
    </FadeIn>
  );
};

export default SellerReservePage;
