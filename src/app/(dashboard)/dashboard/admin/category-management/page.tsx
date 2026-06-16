import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import CategoryItems from "@/src/components/dashboard/categoryManagement/categoryManagement";
import CreateCategory from "@/src/components/dashboard/createCategory/createCategory";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
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

const CategoryManagementPage: FC<IProps> = async ({ searchParams }) => {
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

  const result = await getCategory(filters);
  const allCategory = result.data || [];

  const totalPages = Math.ceil(Number(result?.totalCount) / limit);

  const sortItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  const dropItem = [
    { value: "created_at", label: "زمان ایجاد" },
    { value: "updated_at", label: "اخرین ویرایش" },
    { value: "name", label: "عنوان" },
    // { value: "views", label: "  تعداد بازدید" },
  ];

  return (
    <FadeIn>
      <DashboardContentContainer
        title={`دسته بندی ها (${result.totalCount})`}
        twTopContent="w-1/2"
        topSectionContent={
          <div className="flex gap-4  w-full py-2">
            <SimpleDropdown
              options={sortItem}
              paramKey="order"
              placeholder="ترتیب نمایش"
              labelText="ترتیب نمایش"
              tagBg="bg-dark-600"
              triggerClassName="w-1/2 h-[50px]  text-[10px] md:text-base"
            />
            <SimpleDropdown
              options={dropItem}
              paramKey="sort"
              placeholder="انتخاب کنید"
              labelText="مرتب بر اساس"
              tagBg="bg-dark-600"
              triggerClassName="w-1/2 h-[50px]  text-[10px] md:text-base"
            />
          </div>
        }
      >
       <div className="flex flex-col gap-3 w-full">

  <ItemNavbar colsNumber={3} items={["ایدی", "نام کتگوری", "عملیات"]} />

  <div className="w-full flex flex-col gap-3">

    {allCategory.length > 0 ? (
      allCategory.map((cat) => (
        <div
          key={cat.id}
          className="
            grid
            grid-cols-3
            items-center

            w-full
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
            hover:shadow-xl
            hover:shadow-black/30

            border
            border-transparent
            hover:border-white/10

            cursor-pointer
          "
        >

          {/* ID */}
          <div className="text-center font-medium">
            {cat.id || "--"}
          </div>

          {/* NAME */}
          <div className="text-center truncate">
            {cat.name || "عنوانی وجود ندارد"}
          </div>

          {/* ACTIONS */}
          <div className="flex justify-center">
            <CategoryItems
              categoryId={cat.id}
              categoryName={cat.name}
            />
          </div>

        </div>
      ))
    ) : (
      <div className="w-full text-3xl text-gray-300 text-center py-10">
        دسته بندی وجود ندارد
      </div>
    )}

  </div>
</div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default CategoryManagementPage;
