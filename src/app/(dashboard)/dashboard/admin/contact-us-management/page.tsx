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
  const items = ["عنوان", "پیام"];

  return (
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
          <ItemNavbar colsNumber={2} items={items} />
          <div className="">
            {contactUS.length > 0 ? (
              contactUS?.map((contact) => (
                <div
                  key={contact.id}
                  className="flex justify-between w-full items-center"
                >
                  <div className="grid grid-cols-2 gap-5 text-white w-full md:px-10 items-center pb-3">
                    <p className="truncate">
                      {contact.title || "عنوانی وجود ندارد"}
                    </p>
                    <p className="truncate ">
                      {contact.message || "پیامی وجود ندارد"}
                    </p>
                  </div>
                  <ContactUsItemsManagement
                    contactId={Number(contact.id)}
                    contactMessage={contact.message || "پیامی وجود ندارد"}
                    contactTitle={contact.title || "عنوانی وجود ندارد"}
                  />
                </div>
              ))
            ) : (
              <div className="w-full text-gray-300 text-3xl text-center">
                پیامی وجود ندارد
              </div>
            )}
          </div>
        </div>
        <PaginationClient
          totalPages={totalPages}
          totalCount={Number(result?.totalCount)}
        />
      </div>
    </DashboardContentContainer>
  );
};

export default AdminContactUSManagement;
