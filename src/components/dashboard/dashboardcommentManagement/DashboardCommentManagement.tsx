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
        <div className="flex gap-4 py-2">
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
            triggerClassName="h-[50px] md:w-[155px] w-[100px] text-[13px]"
            labelText="ترتیب نمایش"
          />
          <SimpleDropdown
            options={sortItems}
            paramKey="sort"
            placeholder="مرتب سازی"
            tagBg="bg-dark-600"
            triggerClassName="h-[50px] md:w-[155px] w-[100px] text-[13px] "
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
                  <div className=" grid grid-cols-3 md:w-[90%]  w-full text-[13px] md:text-base text-white">
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
                    <p className=" md:px-15  mr-5 md:mr-0">
                      {comment.title || "بدون عنوان"}
                    </p>
                    <p className="  md:ml-8   md:text-center">
                      {formatDateTime(comment.created_at)}
                    </p>
                  </div>
                  {isAdmin ? (
                    <CommentITemsManagement comment={comment} />
                  ) : (
                    <Modal
                      contentClassName="bg-dark-900 text-white "
                      modalBtn={
                        <TbEye className="w-5 h-5 text-gray-500 cursor-pointer" />
                      }
                      mainContent={
                        <div className="flex flex-col gap-8 " dir="rtl">
                          <div className="flex gap-3 items-center">
                            <ImageFallback
                              fallbackSrc={userPlaceHolder}
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
                  )}
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
  );
};

export default DashboardCommentManagement;
