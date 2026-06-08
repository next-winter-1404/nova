import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import CategoryItems from "@/src/components/dashboard/categoryManagement/categoryManagement";
import CreateCategory from "@/src/components/dashboard/createCategory/createCategory";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
import { FC} from "react";
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
          <ItemNavbar colsNumber={2} items={["ایدی", "نام کتگوری"]} />
          <div>
            {allCategory.length > 0 ? (
              <div className=" text-white px-10">
                {allCategory.map((cat) => (
                  <div className="flex w-full justify-between" key={cat.id}>
                    <div className="grid grid-cols-2 w-full mb-5">
                      <span className="px-20">{cat.id || "--"}</span>
                      <p className="px-7">{cat.name || "عنوانی وجود ندارد"}</p>
                    </div>
                    <CategoryItems
                      categoryId={cat.id}
                      categoryName={cat.name}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="w-full text-3xl text-gray-300 text-center">
                دسته بندی وجود ندارد
              </p>
            )}
          </div>
          <div className="flex justify-between w-full items-center ">
           <CreateCategory/>
            <PaginationClient
              totalPages={totalPages}
              totalCount={Number(result?.totalCount)}
            />
          </div>
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default CategoryManagementPage;
