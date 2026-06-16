import FadeIn from "@/src/components/animations/FadeIn";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import ContactUsItemsManagement from "@/src/components/dashboard/contactUsItemsManagement/ContactUsItemsManagement";
import { getContactUs } from "@/src/utils/sevices/api/admin/contactUs/getContactUs";
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

const AdminContactUSManagement: FC<IProps> = async ({ searchParams }) => {
  const limit = 10;

  const params = await searchParams;
  const order = params.order;
  const sort = params.sort;
  const currentPage = Number(params.page) || 1;

  const filters: IFilters = {};
  if (order) filters.order = order;
  if (sort) filters.sort = sort;
  if (currentPage) filters.page = currentPage;
  if (limit) filters.limit = limit;

  const result = await getContactUs(filters);
  const contactUS = result.data || [];

  const totalPages = Math.ceil(Number(result?.totalCount) / limit);

  const sortItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  const dropItem = [
    { value: "message", label: "پیام" },
    { value: "title", label: "عنوان" },
  ];
  const items = ["عنوان", "پیام", "عملیات"];

  return (
    <FadeIn>
      <DashboardContentContainer
        title={`لیست پیام ها (${result.totalCount})`}
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
        <div className="flex flex-col items-end gap-5 w-full">
          {/* TABLE */}
          <div className="flex flex-col gap-5 w-full">
            <ItemNavbar colsNumber={3} items={items} />

            <div className="flex flex-col gap-3 w-full">
              {contactUS.length > 0 ? (
                contactUS.map((contact) => (
                  <div
                    key={contact.id}
                    className="
              grid
              grid-cols-3
              items-center

              w-full
              bg-dark-800
              rounded-xl

              px-6 md:px-10
              py-4

              text-white-pure
              text-[13px] md:text-base

              transition-all
              duration-200

              hover:bg-dark-700
            "
                  >
                    {/* TITLE */}
                    <p className="truncate pr-2">
                      {contact.title || "عنوانی وجود ندارد"}
                    </p>

                    {/* MESSAGE */}
                    <p className="truncate text-center">
                      {contact.message || "پیامی وجود ندارد"}
                    </p>

                    {/* ACTIONS */}
                    <div className="flex justify-center">
                      <ContactUsItemsManagement
                        contactId={Number(contact.id)}
                        contactMessage={contact.message || "پیامی وجود ندارد"}
                        contactTitle={contact.title || "عنوانی وجود ندارد"}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-gray-300 text-3xl text-center py-10">
                  پیامی وجود ندارد
                </div>
              )}
            </div>
          </div>

          {/* PAGINATION */}
          <div className="w-full">
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

export default AdminContactUSManagement;
