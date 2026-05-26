import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { getSellerComment } from "@/src/utils/sevices/api/seller/comments/getAllComments";
import Image from "next/image";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import SimpleDropdown from "@/src/components/common/dropDown";
import { Modal } from "@/src/components/common/modal";
import Button from "@/src/components/common/button/page";
import { RiBuildingLine } from "react-icons/ri";
import { getSellerHouses } from "@/src/utils/sevices/api/seller/houses/getHouses";
import { TbEye, TbBell } from "react-icons/tb";
import { FC } from "react";
import PaginationClient from "@/src/components/common/pagination/page";
import SellerHouse from "@/src/components/dashboard/sellerHouse/SellerHouse";

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
const SellerCommentManagementPage: FC<IProp> = async ({ searchParams }) => {
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

  const res = await getSellerComment(Number(userId), filters);
  const comments = res.comments || [];
  const result = await getSellerHouses();
  const sellerHouses = result.houses || [];
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
      <DashboardContentContainer
        title="لیست نظرات کاربران"
        topSectionContent={
          <div className="flex gap-4 py-2">
            <Modal
              contentClassName="bg-dark-900 text-white text-right"
              modalTitle="لیست املاک شما:"
              width="w-[60%] overflow-y-auto h-[550px]"
              mainContent={<SellerHouse sellerHouses={sellerHouses} />}
              modalBtn={
                <Button
                  text={"انتخاب ملک"}
                  buttonStyle={{
                    background: "var(--color-primary-accent-green)",
                    color: "black",
                  }}
                  icon={<RiBuildingLine className="w-4 h-4" />}
                />
              }
            />

            <SimpleDropdown
              options={orderItems}
              paramKey="order"
              placeholder="ترتیب نمایش"
              tagBg="bg-dark-600"
              triggerClassName="h-[50px] w-[155px]"
              labelText="ترتیب نمایش"
            />
            <SimpleDropdown
              options={sortItems}
              paramKey="sort"
              placeholder="مرتب سازی بر اساس"
              tagBg="bg-dark-600"
              triggerClassName="h-[50px] w-[155px]"
              labelText="مرتب سازی"
            />
          </div>
        }
      >
        <div className="flex flex-col items-end">
          <div className="flex flex-col gap-5 w-full">
            <ItemNavbar
              items={items}
              colsNumber={3}
              twClassName="p-3 text-[20px] "
            />
            <div className="flex flex-col gap-5">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div className="w-full flex justify-between" key={comment.id}>
                    <div className=" grid grid-cols-3 w-[90%] text-white">
                      <div className="flex items-center gap-3   ">
                        <Image
                          src={comment.user?.profilePicture || userPlaceHolder}
                          alt="prof"
                          width={37}
                          height={37}
                          className="rounded-lg border border-amber-50"
                        />
                        <p>
                          {`${comment.user?.firstName} ${comment.user?.lastName}` ||
                            "نام کاربر"}
                        </p>
                      </div>
                      <p className=" px-15">{comment.title || "بدون عنوان"}</p>
                      <p className=" text-center ml-8">
                        {comment.created_at?.slice(0, 10) || "--"}
                      </p>
                    </div>

                    <Modal
                      contentClassName="bg-dark-900 text-white "
                      modalBtn={
                        <TbEye className="w-5 h-5 text-gray-500 cursor-pointer" />
                      }
                      mainContent={
                        <div className="flex flex-col gap-8 " dir="rtl">
                          <div className="flex gap-3 items-center">
                            <Image
                              src={
                                comment.user?.profilePicture || userPlaceHolder
                              }
                              alt="prof"
                              width={37}
                              height={37}
                              className="rounded-lg border border-amber-50"
                            />
                            <p>
                              {`${comment.user?.firstName} ${comment.user?.lastName}` ||
                                "نام کاربر"}
                            </p>
                          </div>
                          <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                              <span>عنوان نظر:</span>
                              <p className="bg-dark-600 p-2 rounded-lg">
                                {comment.title}
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span>توضیحات نظر:</span>
                              <p className="bg-dark-600 p-2 rounded-lg h-[150px]">
                                {comment.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    />
                    <TbBell className="w-5 h-5 text-gray-500 cursor-pointer" />
                  </div>
                ))
              ) : (
                <div className="w-full text-3xl text-center text-gray-300">
                  کامنتی وجود ندارد
                </div>
              )}
            </div>
          </div>
          <PaginationClient
            totalCount={Number(res.totalCount)}
            totalPages={Number(res.totalPages)}
          />
        </div>
      </DashboardContentContainer>
    </div>
  );
};

export default SellerCommentManagementPage;
