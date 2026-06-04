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
const items = [
  " پروفایل",
  "نام کاربر",
  "ایمیل",
  "تاریخ ورود",
  "آخرین آپدیت ",
  "عملیات",
];

const UserManegment = async () => {
  const allUser = await getAllusers();

  return (
    <DashboardContentContainer
      title="لیست کاربران"
      topSectionContent={<UserManegmentSearch />}
    >
      <div>
        <div className="w-full flex-col-center">
          <ItemNavbar colsNumber={6} items={items} />
        </div>
        <div className="flex text-white-pure mt-5 items-center">
          {allUser?.data?.length > 0 ? (
            <div className="w-full flex flex-col gap-5">
              <>
                {allUser?.data?.map((item: IAdminAllUsers) => (
                  <div
                    className="flex justify-between w-full items-center"
                    key={item.id}
                  >
                    <div className="flex-center justify-between w-full h-[50px] items-center">
                      <div className="flex-center rounded-full  mr-[140px]">
                        <ImageFallback
                          fallbackSrc={usePlaceHolder}
                          src={item.profilePicture || usePlaceHolder}
                          alt="user profile"
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      </div>
                      <div
                        className="max-w-[150px] overflow-ellipsis flex-center"
                        dir="rtl"
                      >
                        <span>{item.fullName || "  --"}</span>
                      </div>
                      <div className="max-w-[150px] overflow-ellipsis text-center">
                        {item.email}
                      </div>
                      <div className="text-center  ">
                        {item.createdAt.split("T")[0]}
                      </div>
                      <div className="text-center  ">
                        {item.updatedAt.split("T")[0]}
                      </div>
                      <div className=" ml-[140px] flex-center ">
                        <UserManegmentActionMenu user={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </div>
          ) : (
            <div className="text-4xl text-gray-300">کاربری وجود ندارد</div>
          )}
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default UserManegment;
