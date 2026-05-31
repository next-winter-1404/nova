import DashboardCommentManagement from "@/src/components/dashboard/dashboardcommentManagement/DashboardCommentManagement";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { getAllComment } from "@/src/utils/sevices/api/comments/getAllComments/getAllComments";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import { getSellerComment } from "@/src/utils/sevices/api/seller/comments/getAllComments";

import { getSellerHouses } from "@/src/utils/sevices/api/seller/houses/getHouses";
import { FC } from "react";

interface IProp {
  searchParams: Promise<IFilters>;
}
interface IFilters {
  order?: string;
  sort?: string;
  page?: string | number;
  limit?: string | number;
  house_id?: string | number;
  houseId?: string | number;
}
const AdminCommentManagementPage: FC<IProp> = async ({ searchParams }) => {
  const limit = 5;
  const userId = await getServerSideCookie("userId");
  const params = await searchParams;
  const order = params.order;
  const sort = params.sort;
  const currentPage = Number(params.page) || 1;
  const house_id = params.houseId;
  const filters: IFilters = {};

  if (order) filters.order = order;
  if (sort) filters.sort = sort;
  if (currentPage) filters.page = currentPage;
  if (limit) filters.limit = limit;
  if (house_id) filters.house_id = house_id;

  const res = await getAllComment( filters);
  const comments = res.comments || [];
  const result = await getHouses();
  const allHouses = result.houses || [];
  const items = ["نام کاربر", "عنوان نظر", "تاریخ"];

  const orderItems = [
    { value: "DESC", label: "نزولی" },
    { value: "ASC", label: "صعودی" },
  ];
  const sortItems = [
    { value: "rating", label: "امتیاز" },
    { value: "created_at", label: "زمان ایجاد" },
  ];
  return (
    <div>
      <DashboardCommentManagement
        comments={comments}
        items={items}
        modalHouse={allHouses}
        orderItems={orderItems}
        res={res}
        sortItems={sortItems}
        isAdmin
      />
    </div>
  );
};

export default AdminCommentManagementPage;
