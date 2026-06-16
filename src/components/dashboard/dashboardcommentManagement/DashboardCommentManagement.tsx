import React, { FC } from "react";
import PaginationClient from "@/src/components/common/pagination/page";
import { TbEye } from "react-icons/tb";
import Image from "next/image";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import SimpleDropdown from "@/src/components/common/dropDown";
import { Modal } from "@/src/components/common/modal";
import Button from "@/src/components/common/button/page";
import { RiBuildingLine } from "react-icons/ri";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import { IOption } from "@/src/core/types/TDropDown";
import { IHouse } from "@/src/core/types/IHouse";
import { IComment, ICommentResponse } from "@/src/core/types/IComment";
import CommentITemsManagement from "../commentItemsManagement/commentItemsManagement";
import SellerHouse from "../sellerHouse/SellerHouse";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
import { formatDateTime } from "@/src/utils/hooks/formDates";
interface IProp {
  orderItems: IOption[];
  sortItems: IOption[];
  items: string[];
  comments: IComment[];
  res: ICommentResponse;
  modalHouse: IHouse[];
  isAdmin?: boolean;
}
const DashboardCommentManagement: FC<IProp> = ({
  orderItems,
  sortItems,
  items,
  comments,
  res,
  modalHouse,
  isAdmin = false,
}) => {
  return (
    <DashboardContentContainer
      title={`لیست نظرات کاربران (${res.totalCount})`}
      topSectionContent={
        <div className="flex gap-4 py-2 flex-col   items-center sm:flex-row">
          <Modal
            contentClassName="bg-dark-900 text-white text-right"
            modalTitle="لیست املاک شما:"
            width="lg:w-[60%] overflow-y-auto h-[550px]"
            mainContent={<SellerHouse modalHouse={modalHouse} />}
            modalBtn={
              <Button
                text={"انتخاب ملک"}
                buttonStyle={{
                  background: "var(--color-primary-accent-green)",
                  color: "black",
                  height: 52,
                }}
                icon={<RiBuildingLine className="w-4 h-4" />}
              />
            }
          />

          <div className=" flex w-full  justify-between gap-2">
            <SimpleDropdown
              options={orderItems}
              paramKey="order"
              placeholder="ترتیب نمایش"
              tagBg="bg-dark-600"
              triggerClassName="md:h-[50px] h-10  w-full text-[10px] md:text-base"
              labelText="ترتیب نمایش"
            />
            <SimpleDropdown
              options={sortItems}
              paramKey="sort"
              placeholder="مرتب سازی"
              tagBg="bg-dark-600"
              triggerClassName="md:h-[50px] h-10  w-full text-[10px] md:text-base "
              labelText="مرتب سازی"
            />
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-3 w-full">

  {/* NAVBAR */}
  <ItemNavbar colsNumber={5} items={items} />

  {/* LIST */}
  <div className="flex flex-col gap-3 w-full">
    {comments.length > 0 ? (
      comments.map((comment) => (
        <div
          key={comment.id}
          className="
            grid
            grid-cols-5
            items-center

            w-full
            bg-dark-800
            rounded-xl

            px-4 md:px-6
            py-4

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
          "
        >
          {/* USER */}
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src={comment.user?.profilePicture || userPlaceHolder}
              alt="user"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <p className="truncate">
              {`${comment.user?.firstName || ""} ${comment.user?.lastName || ""}`.trim() ||
                "نام کاربر"}
            </p>
          </div>

          {/* TITLE */}
          <p className="text-center truncate">
            {comment.title || "بدون عنوان"}
          </p>

          {/* DATE */}
          <p className="text-center truncate">
            {formatDateTime(comment.created_at)}
          </p>

          {/* CAPTION */}
          <p className="text-center truncate px-2">
            {comment.caption || "---"}
          </p>

          {/* ACTIONS / DETAILS */}
          <div className="flex justify-center">
            {isAdmin ? (
              <CommentITemsManagement comment={comment} />
            ) : (
              <Modal
                contentClassName="bg-dark-900 text-white-pure"
                modalBtn={
                  <TbEye className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition" />
                }
                mainContent={
                  <div className="flex flex-col gap-6" dir="rtl">
                    <div className="flex items-center gap-3">
                      <ImageFallback
                        fallbackSrc={userPlaceHolder}
                        src={comment.user?.profilePicture || userPlaceHolder}
                        alt="user"
                        width={37}
                        height={37}
                        className="rounded-lg"
                      />
                      <p>
                        {`${comment.user?.firstName || ""} ${comment.user?.lastName || ""}`.trim()}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span>عنوان نظر:</span>
                      <p className="bg-dark-600 p-3 rounded-lg">
                        {comment.title}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span>توضیحات:</span>
                      <p className="bg-dark-600 p-3 rounded-lg min-h-[150px]">
                        {comment.caption}
                      </p>
                    </div>
                  </div>
                }
              />
            )}
          </div>
        </div>
      ))
    ) : (
      <div className="w-full text-center py-16 text-gray-300 text-xl md:text-3xl">
        کامنتی وجود ندارد
      </div>
    )}
  </div>

  {/* PAGINATION */}
  <PaginationClient
    totalCount={Number(res.totalCount)}
    totalPages={Number(res.totalPages)}
  />
</div>
    </DashboardContentContainer>
  );
};

export default DashboardCommentManagement;
