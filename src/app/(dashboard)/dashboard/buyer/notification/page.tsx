import AccordionComponent from "@/src/components/common/accardeon/Accardeon";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import MarkAllAsReaButton from "@/src/components/dashboard/notification/MarkAsReadButton/MarkAllAsReaButton";
import MarkAsReadButton from "@/src/components/dashboard/notification/MarkAsReadButton/MarkAsReadButton";
import NotificationSearchBox from "@/src/components/dashboard/notification/searchBox/searchBox";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { getUserNotification } from "@/src/utils/sevices/api/notification/getNotification";
import { FC } from "react";
interface IProps {
  searchParams: Promise<IFilters>;
}
interface IFilters {
  order?: string;
  title?: string;
  search?: string;
  page?: string | number;
  limit?: string | number;
}
const BuyerNotificationPage: FC<IProps> = async ({ searchParams }) => {
  const limit = 6;
  const params = await searchParams;
  const order = params.order;
  const search = params.search;
  const currentPage = Number(params.page) || 1;
  const filters: IFilters = {};
  if (order) filters.order = order;
  if (search) filters.title = search;
  if (currentPage) filters.page = currentPage;
  if (limit) filters.limit = limit;
  const items = ["اعلان", "تاریخ"];
  const sortItems = [
    { value: "DESC", label: "نزولی" },
    { value: "ASC", label: "صعودی" },
  ];
  const userId = await getServerSideCookie("userId");
  const result = await getUserNotification(Number(userId), filters);
  const notifications = result?.data || [];
  const unreadNotifications = notifications.filter((n) => n.isRead == false);
  const readNotifications = notifications.filter((n) => n.isRead == true);
  const totalPages = Math.ceil(Number(result?.totalCount) / limit);

  return (
    <div>
      <DashboardContentContainer
        title="لیست اعلان های شما"
        topSectionContent={
          <div className="flex gap-5 py-2">
            <SimpleDropdown
              options={sortItems}
              paramKey="order"
              placeholder="ترتیب نمایش"
              triggerClassName="h-[50px] w-[250px]"
              tagBg="bg-dark-600"
              labelText="ترتیب نمایش"
            />
            <NotificationSearchBox />
            <MarkAllAsReaButton />
          </div>
        }
      >
      <div className="flex flex-col items-end w-full ">
      <div className="flex flex-col gap-5 w-full">
          <ItemNavbar items={items} colsNumber={2} />
          <AccordionComponent
            accordionContent={
              <div className="flex flex-col items-end">
                <div className="w-full">
                  {unreadNotifications.length > 0 ? (
                    unreadNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex justify-between w-full"
                      >
                        <div className="grid grid-cols-2  w-[80%] text-white mr-15 gap-5 ">
                          <span>{notification.title}</span>
                          <span>{notification.createdAt?.slice(0, 10)}</span>
                        </div>
                        <MarkAsReadButton notifId={Number(notification.id)} />
                      </div>
                    ))
                  ) : (
                    <div className="text-3xl text-gray-300 text-center w-full">
                      اعلان خوانده نشده ای وجود ندارد
                    </div>
                  )}
                </div>
                <PaginationClient
                  totalPages={totalPages}
                  totalCount={Number(result?.totalCount)}
                />
              </div>
            }
            accordionTitle="خوانده نشده"
            twTitleClassName="text-gray-300 whitespace-nowrap"
            twContentClassName="flex flex-col gap-5"
          />

          <AccordionComponent
            accordionContent={
              <>
                {readNotifications.length > 0 ? (
                  readNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="grid grid-cols-2  w-[80%] text-white mr-15 gap-5 "
                    >
                      <span>{notification.title}</span>
                      <span>{notification.createdAt?.slice(0, 10)}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-3xl text-gray-300 text-center w-full">
                    اعلان خوانده شده ای وجود ندارد
                  </div>
                )}
              </>
            }
            accordionTitle="خوانده شده"
            twTitleClassName="text-gray-300 whitespace-nowrap"
            twContentClassName="flex flex-col gap-5"
          />
        </div>
        <PaginationClient
          totalPages={totalPages}
          totalCount={Number(result?.totalCount)}
        />
      </div>
      </DashboardContentContainer>
    </div>
  );
};

export default BuyerNotificationPage;
