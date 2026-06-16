import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import UserManegmentActionMenu from "@/src/components/common/userManegmentActionMenu/UserManegmentActionMenu";
import { IAdminAllUsers } from "@/src/core/types/IAdminGetAllUser";
import { getAllusers } from "@/src/utils/sevices/api/admin/users/getAllusers/getAllusers";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import usePlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import { PiImageBrokenDuotone } from "react-icons/pi";
import UserManegmentSearch from "@/src/components/dashboard/userManegmentSearch/userManegmentSearch";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { Modal } from "@/src/components/common/modal";
import Button from "@/src/components/common/button/page";
import { RiBuildingLine } from "react-icons/ri";
import { getAllSellerRequests } from "@/src/utils/sevices/api/seller/sellerUpgrade/getAllSellerRequests";
import SimpleDropdown from "@/src/components/common/dropDown";
import SellerUpgradeRequest from "@/src/components/dashboard/sellerUpgradeList/SellerUpgradeRequest";
import { FC } from "react";
import PaginationClient from "@/src/components/common/pagination/page";
import FadeIn from "@/src/components/animations/FadeIn";
const items = [
  " پروفایل",
  "نام کاربر",
  "ایمیل",
  "تاریخ ورود",
  "آخرین آپدیت ",
  "عملیات",
];
interface IFilters {
  status?: string;
  page?: string | number;
  limit?: string | number;
}
interface IProp {
  searchParams: IFilters;
}
const UserManegment: FC<IProp> = async ({ searchParams }) => {
  const limit = 5;

  const params = await searchParams;
  const status = params.status || "";
  const currentPage = Number(params.page) || 1;
  const filters: IFilters = {};
  if (status) filters.status = status;
  if (currentPage) filters.page = currentPage;
  if (limit) filters.limit = limit;
  const allUser = await getAllusers();
  const result = await getAllSellerRequests(filters);
  const allSellerRequest = result.requests || [];
  const totalPages = result.totalPages;

  return (
    <FadeIn>
      <DashboardContentContainer
        title="لیست کاربران"
        topSectionContent={
          <div className="flex gap-4">
            <UserManegmentSearch />
            <SellerUpgradeRequest
              allSellerRequest={allSellerRequest}
              totalCount={result.totalCount}
              totalPages={totalPages}
            />
          </div>
        }
      >
       <div>
  <div className="w-full flex-col-center">
    <ItemNavbar colsNumber={6} items={items} />
  </div>

  <div className="mt-5 text-white-pure">
    {allUser?.data?.length > 0 ? (
      <div className="flex flex-col gap-3">
        {allUser.data.map((item: IAdminAllUsers) => (
          <div
            key={item.id}
            className="
              grid
              grid-cols-6
              items-center
              rounded-xl
              bg-dark-800
              px-6
              py-4
              transition-all
              duration-300
              hover:scale-[1.01]
              hover:shadow-xl
              hover:shadow-black/20
              hover:bg-dark-700
            "
          >
            {/* avatar */}
            <div className="flex justify-center">
              <ImageFallback
                fallbackSrc={usePlaceHolder}
                src={item.profilePicture || usePlaceHolder}
                alt="user profile"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>

            {/* name */}
            <div className="truncate text-center">
              {item.fullName || "--"}
            </div>

            {/* email */}
            <div className="truncate text-center">
              {item.email || "--"}
            </div>

            {/* created */}
            <div className="text-center">
              {formatDateTime(item.created_at)}
            </div>

            {/* updated */}
            <div className="text-center">
              {formatDateTime(item.updated_at)}
            </div>

            {/* actions */}
            <div className="flex justify-center">
              <UserManegmentActionMenu user={item} />
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="flex justify-center py-20">
        <span className="text-3xl text-gray-400">
          کاربری وجود ندارد
        </span>
      </div>
    )}
  </div>
</div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default UserManegment;
