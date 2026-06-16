import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import FavoriteFunctions from "@/src/components/dashboard/favorite/favoriteFunctionMenuItem/FavoriteFunctions";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
import { getFavoriteForUser } from "@/src/utils/sevices/api/favorites/getFavorites";
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

const FavoritePage: FC<IProps> = async ({ searchParams }) => {
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

  const items = ["نام", "قیمت ", "ادرس", "عملیات"];
  const sortItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  const dropItem = [
    { value: "created_at", label: "زمان ایجاد" },
    { value: "updated_at", label: " آخرین ویرایش" },
  ];
  const userId = await getServerSideCookie("userId");
  const result = await getFavoriteForUser(Number(userId), filters);
  const favoritesList = result?.data || [];
  const totalPages = Math.ceil(Number(result?.totalCount) / limit);

  return (
    <DashboardContentContainer
      twTopContent="w-1/2"
      title="لیست علاقه مندی های شما"
      topSectionContent={
        <div className="flex gap-4  w-full py-2">
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
        <ItemNavbar colsNumber={4} items={items} />

        <div className="flex flex-col gap-3 w-full">
          {favoritesList.length > 0 ? (
            favoritesList.map((item) => (
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
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-[70px] h-[55px] rounded-lg bg-gray-600 hidden md:block flex-shrink-0" />

                  <span className="truncate">
                    {item.house?.title || "عنوانی وجود ندارد"}
                  </span>
                </div>

                <p className="text-center truncate">
                  {item.house?.price
                    ? `${formatPrice(Number(item.house.price))} تومان`
                    : "--"}
                </p>

                <p className="text-center truncate px-2">
                  {item.house?.address || "آدرسی وجود ندارد"}
                </p>

                <div className="flex justify-center">
                  <FavoriteFunctions
                    favoriteId={item.id}
                    houseId={item.house_id}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex items-center justify-center py-20">
              <p className="text-gray-400 text-xl md:text-2xl">
                داده‌ای وجود ندارد
              </p>
            </div>
          )}
        </div>

        <PaginationClient
          totalPages={totalPages}
          totalCount={Number(result?.totalCount)}
        />
      </div>
    </DashboardContentContainer>
  );
};

export default FavoritePage;
