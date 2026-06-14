import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import DiscountItemsManagement from "@/src/components/dashboard/DiscountItemsManagement/DiscountItemsManagement";
import CreateDiscountComponent from "@/src/components/dashboard/createDiscountComponent/CreateDiscountComponent";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { getDiscounts } from "@/src/utils/sevices/api/admin/discount/getDiscount";
import { getAllHouses } from "@/src/utils/sevices/api/admin/houses/getAllHouses/getAllHouses";
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

const DiscountManagement: FC<IProps> = async ({ searchParams }) => {
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

  const result = await getDiscounts(filters);
  const discounts = result.data || [];

  const totalPages = Math.ceil(Number(result?.totalCount) / limit);
  const allHouses = await getAllHouses();
  const sortItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  const dropItem = [
    // { value: "created_at", label: "زمان ایجاد" },
    { value: "code", label: "عنوان" },
  ];
  const items = ["عنوان", "تاریخ انفضا", "مقدار تخفیف"];

  return (
    <DashboardContentContainer
      title={`لیست کد های تخفیف (${result.totalCount})`}
      twTopContent="w-1/2"
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
      <div className="flex flex-col items-end gap-5">
        <div className="flex flex-col gap-5 w-full">
          <ItemNavbar colsNumber={3} items={items} />
          <div className="">
            {discounts.length > 0 ? (
              discounts?.map((discount) => (
                <div
                  key={discount.id}
                  className="flex justify-between w-full items-center"
                >
                  <div className="grid grid-cols-3 md:gap-18 md:text-[18px] text-white w-full md:px-10 items-center text-[13px]">
                    <p className="truncate  ">
                      {discount.code || "کدی وجود ندارد"}
                    </p>
                    <p className="md:px-6">
                      {formatDateTime(discount.valid_until) ||
                        "تاریخی وجود ندارد"}
                    </p>
                    <p>{discount.discount_percentage || 0}</p>
                  </div>
                  <DiscountItemsManagement
                    discountId={Number(discount.id)}
                    discountCode={discount.code || "کدی وجود ندارد"}
                    validDate={discount.valid_until || "تاریخی وجود ندارد"}
                    percentage={discount.discount_percentage || 0}
                  />
                </div>
              ))
            ) : (
              <div className="text-gray-300 text-center text-3xl w-full">
                تخفیفی وجود ندارد
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <CreateDiscountComponent allHouses={allHouses.data?.slice(0,8)} />

          <PaginationClient
            totalPages={totalPages}
            totalCount={Number(result?.totalCount)}
          />
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default DiscountManagement;
