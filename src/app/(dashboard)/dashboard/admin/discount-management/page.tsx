import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import DiscountItemsManagement from "@/src/components/dashboard/DiscountItemsManagement/DiscountItemsManagement";
import CreateDiscountComponent from "@/src/components/dashboard/createDiscountComponent/CreateDiscountComponent";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { getDiscounts } from "@/src/utils/sevices/api/admin/discount/getDiscount";
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

  const sortItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  const dropItem = [
  
    { value: "code", label: "عنوان" },
  ];
  const items = ["عنوان", "تاریخ انفضا", "مقدار تخفیف", "عملیات"];

  return (
    <FadeIn>
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
        <div className="flex flex-col items-end gap-5 w-full">

  {/* TABLE */}
  <div className="flex flex-col gap-5 w-full">

    <ItemNavbar colsNumber={4} items={items} />

    <div className="flex flex-col gap-3 w-full">

      {discounts.length > 0 ? (
        discounts.map((discount) => (
          <div
            key={discount.id}
            className="
              grid
              grid-cols-4
              items-center

              w-full
              bg-dark-800
              rounded-xl

              px-4 md:px-6
              py-3

              text-white-pure
              text-[12px] md:text-[15px]

              transition-all
              duration-200

              hover:bg-dark-700
            "
          >

            {/* CODE */}
            <p className="truncate">
              {discount.code || "کدی وجود ندارد"}
            </p>

            {/* DATE */}
            <p className="text-center">
              {formatDateTime(discount.valid_until) ||
                "تاریخی وجود ندارد"}
            </p>

            {/* PERCENT */}
            <p className="text-center">
              {discount.discount_percentage || 0}
            </p>

            {/* ACTIONS (این یکی بود که جا افتاده بود) */}
            <div className="flex justify-center">
              <DiscountItemsManagement
                discountId={Number(discount.id)}
                discountCode={discount.code || "کدی وجود ندارد"}
                validDate={discount.valid_until || "تاریخی وجود ندارد"}
                percentage={discount.discount_percentage || 0}
              />
            </div>

          </div>
        ))
      ) : (
        <div className="text-gray-300 text-center text-3xl w-full py-10">
          تخفیفی وجود ندارد
        </div>
      )}

    </div>
  </div>

  {/* FOOTER */}
  <div className="flex justify-between w-full items-center">

    <CreateDiscountComponent />

    <PaginationClient
      totalPages={totalPages}
      totalCount={Number(result?.totalCount)}
    />

  </div>

</div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default DiscountManagement;
