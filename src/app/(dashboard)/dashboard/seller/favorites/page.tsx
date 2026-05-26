import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import FavoriteFunctions from "@/src/components/dashboard/favoriteFunctionMenuItem/FavoriteFunctions";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
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
const BuyerFavoritePage: FC<IProps> = async ({ searchParams }) => {
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

  const items = ["نام", "قیمت ", "ادرس"];
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
      <div className="flex flex-col items-end">
        <div className="flex flex-col gap-5 w-full">
          <ItemNavbar colsNumber={3} items={items} />
          {favoritesList.length > 0 ? (
            favoritesList.map((item) => (
              <div
                className="flex justify-between w-full items-center "
                key={item.id}
              >
                <div className="grid grid-cols-3 w-full  items-center text-white">
                  <div className="flex gap-4 items-center w-[300px] ">
                    <div className="w-[100px] h-[72px] rounded-xl bg-gray-600"></div>
                    <div className="whitespace-nowrap">
                      {item.house?.title || "عنوانی وجود ندارد"}
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-start gap-1 mr-4 "
                    dir="rtl"
                  >
                    <span>{item.house?.price || "  --"}</span>
                    <span>تومان</span>
                  </div>
                  <p>{item.house.address || "ادرسی وجود ندارد"}</p>
                </div>
                <FavoriteFunctions
                  favoriteId={item.id}
                  houseId={item.house_id}
                />
              </div>
            ))
          ) : (
            <p className="w-full text-center text-4xl text-gray-300">
              داده ای وجود ندارد
            </p>
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

export default BuyerFavoritePage;
