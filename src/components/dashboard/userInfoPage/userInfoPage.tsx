import UserChangePasswordForm from "@/src/components/dashboard/userChangePassword/UserChangePasswordForm";
import UserInfoForm from "@/src/components/dashboard/userInfoForm/UserInfoForm";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import Image from "next/image";
import { TbCamera, TbCircleX } from "react-icons/tb";
import userDefault from "@/src/assets/images/userPlaceHolder.jpg";
import { Modal } from "@/src/components/common/modal";
import ChoosePicture from "@/src/components/dashboard/choosePic/ChoosePicture";
const UserInfoPage = async() => {
    const userId = await getServerSideCookie("userId");
  const result = await getUsersDetail(Number(userId));
  const userDetail = result?.user;
  return (
    <div className="bg-dark-700 rounded-xl p-5 flex-col flex gap-10">
      <div className="flex  lg:w-1/2 w-full justify-between">
        <div className="text-white  flex  flex-col gap-2">
          <h1 className="text-[20px] font-black ">عکس نمایه شما</h1>
          <span>میتوانید عکس نمایه خود را تغییر دهید</span>
        </div>
        <div className="  relative">
          <Image
            width={125}
            height={125}
            className="rounded-full border border-gray-300"
            src={userDetail?.profilePicture || userDefault}
            alt="user profile"
          />
          <Modal
            contentClassName="bg-dark-900   flex-center"
            mainContent={
              <div className="flex-col flex-center gap-10  w-full">
                <Image
                  width={125}
                  height={125}
                  className="rounded-full border border-gray-300 "
                  src={userDetail?.profilePicture || userDefault}
                  alt="user profile"
                />
               <ChoosePicture/>
              </div>
            }
            modalBtn={
              <div className="w-5 h-5 cursor-pointer bg-primary-accent-green flex-center p-0.5 absolute top-2 right-1 rounded-full shadow-[-1px_1px_1px_2px_#393939]">
                <TbCamera />
              </div>
            }
          />

          <div className="w-5 h-5 cursor-pointer bg-[#FF5555] flex-center p-0.5 absolute bottom-4 right-1 rounded-full shadow-[-2px_-1px_1px_2px_#393939]">
            <TbCircleX />
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-300 w-full" />

      <UserInfoForm
        email={userDetail?.email}
        firstName={userDetail?.firstName}
        lastName={userDetail?.lastName}
        phoneNumber={userDetail?.phoneNumber}
      />
      <div className="h-px bg-gray-300 w-full" />

      <UserChangePasswordForm />
    </div>
  );
}

export default UserInfoPage
