import { Modal } from "@/src/components/common/modal";
import ChoosePicture from "@/src/components/dashboard/choosePic/ChoosePicture";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import Image from "next/image";
import { TbCamera, TbCircleX } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import UserInfoActionButton from "@/src/components/dashboard/userInfoActionButton/UserInfoActionButton";
import { userActivities } from "@/src/utils/sevices/api/userActivities/userActivities";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import { formatDateTime } from "@/src/utils/hooks/formDates";

type UserDetailProps = {
  params: {
    id: number;
  };
};

const UserDetail = async ({ params }: UserDetailProps) => {
  const { id } = await params;

  const userInfo = await getUsersDetail(id);
  const activities = await userActivities(id);
  console.log("user userInfo= ", userInfo);

  return (
    <div className="padding-section flex flex-col justify-end">
      <div className="bg-dark-700 rounded-xl p-5 flex-col flex gap-10">
        <div className="flex items-center  flex-col md:flex-row  gap-4 w-[460px]  md:justify-between ">
          <div className="text-semibold-20  flex  flex-col  gap-2">
            <h1>عکس نمایه کاربر</h1>
          </div>
          <div className="  relative">
            <div className="w-30 h-30 rounded-full border border-gray-300 flex-center">
              <ImageFallback
                fallbackSrc={userPlaceHolder}
                width={125}
                height={125}
                className="rounded-full"
                src={userInfo?.user?.profilePicture || userPlaceHolder}
                alt="user profile"
              />
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-300 w-full" />
        <div className="flex flex-col md:flex-row  gap-4 w-full lg:w-[80%] xl:w-[60%]  items-center md:justify-between">
          <h1 className="text-semibold-20">اطلاعات فردی</h1>
          <div className="flex flex-col justify-between gap-4 w-[394px]">
            <div className="w-full flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">نام :</span>
              <span className="text-16-medium text-white-pure">
                {userInfo?.user?.firstName || "- -"}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">
                نام خانوادگی :
              </span>
              <span className="text-16-medium text-white-pure">
                {userInfo?.user?.lastName || "- -"}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">نفش :</span>
              <span className="text-16-medium text-white-pure">
                {userInfo?.user?.role || "- -"}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">ایمیل :</span>
              <span className="text-16-medium text-white-pure">
                {userInfo?.user?.email || "- -"}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure text-right">
                شماره تلفن :
              </span>
              <span className="text-16-medium text-white-pure">
                {userInfo?.user?.phoneNumber || "- -"}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure text-right">
                تاریخ عضویت:
              </span>
              <span className="text-16-medium text-white-pure">
                {formatDateTime(userInfo?.user?.created_at)}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure text-right">
                آخرین بروزرسانی :
              </span>
              <span className="text-16-medium text-white-pure">
                {formatDateTime(userInfo?.user?.updated_at)}
              </span>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-300 w-full" />
        <div className="flex flex-col md:flex-row  gap-4 w-full lg:w-[80%] xl:w-[60%]  items-center md:justify-between">
          <h1 className="text-semibold-20"> فعالیت های کاربر </h1>
          <div className="flex flex-col justify-between gap-4 w-[394px]">
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">
                تعداد رزرو شده ها :
              </span>
              <span className="text-16-medium text-white-pure">
                {activities.bookingCount || "- -"}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">
                تعداد بازخوردهای داده شده:
              </span>
              <span className="text-16-medium text-white-pure">
                {activities.feedbackGiven || "- -"}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">
                تعداد بازخوردهای دریافت شده:
              </span>
              <span className="text-16-medium text-white-pure">
                {activities.feedbackReceived}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="text-16-medium text-white-pure">
                تعداد املاک ثبت شده:
              </span>
              <span className="text-16-medium text-white-pure">
                {activities.housesCreated || "- -"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
