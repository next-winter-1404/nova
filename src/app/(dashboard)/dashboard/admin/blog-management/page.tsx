import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import BlogItemsManagement from "@/src/components/dashboard/blogItemsManagement/BlogItemsManagement";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { getBlogs } from "@/src/utils/sevices/api/blogs/getBlogs";
import Link from "next/link";
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

const AdminBlogManagementPage: FC<IProps> = async ({ searchParams }) => {
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

  const result = await getBlogs(filters);
  const blogs = result.data || [];

  const totalPages = Math.ceil(Number(result?.totalCount) / limit);

  const sortItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  const dropItem = [
    { value: "created_at", label: "زمان ایجاد" },
    { value: "title", label: "عنوان" },
  ];
  const items = ["نام نویسنده", "عنوان", "تاریخ ایجاد", "عملیات"];

  return (
    <FadeIn>
      <DashboardContentContainer
        title={`لیست مقالات (${result.totalCount})`}
        twTopContent="w-1/2"
        topSectionContent={
          <div className="flex gap-4  w-full py-2">
            <SimpleDropdown
              options={sortItem}
              paramKey="order"
              placeholder="ترتیب نمایش"
              labelText="ترتیب نمایش"
              tagBg="bg-dark-600"
              triggerClassName="w-1/2 h-[50px] text-[10px] md:text-base"
            />
            <SimpleDropdown
              options={dropItem}
              paramKey="sort"
              placeholder="انتخاب کنید"
              labelText="مرتب بر اساس"
              tagBg="bg-dark-600"
              triggerClassName="w-1/2 h-[50px] text-[10px] md:text-base"
            />
          </div>
        }
      >
        <div className="flex flex-col items-end gap-5 w-full">
          <div className="flex flex-col gap-5 w-full">
            <ItemNavbar colsNumber={4} items={items} />

            <div className="w-full overflow-x-hidden">
              <div className="flex flex-col gap-3 w-full">
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="
  grid
  grid-cols-4
  items-center
  gap-4

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
  hover:shadow-2xl
  hover:shadow-black/40

  border
  border-transparent
  hover:border-white/10

  cursor-pointer
"
                    >
                      {/* Author */}
                      <div className="truncate">
                        <UserName userId={Number(blog.author_id)} />
                      </div>

                      {/* Title */}
                      <p className="truncate text-center">
                        {blog.title || "عنوانی وجود ندارد"}
                      </p>

                      {/* Date */}
                      <p className="text-center whitespace-nowrap">
                        {formatDateTime(blog.created_at) || "تاریخی وجود ندارد"}
                      </p>

                      {/* Actions */}
                      <div className="flex justify-center overflow-hidden">
                        <BlogItemsManagement blogId={blog.id} />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full text-gray-300 text-3xl text-center py-10">
                    وبلاگی وجود ندارد
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between w-full items-end px-2">
            <Link
              href="/dashboard/admin/blog-management/create"
              className="cursor-pointer text-black bg-primary-accent-green w-[150px] h-[43px] rounded-[16px] flex-center"
            >
              ساخت وبلاگ +
            </Link>

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

export default AdminBlogManagementPage;
