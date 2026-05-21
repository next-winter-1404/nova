import UserChangePasswordForm from "@/src/components/dashboard/userChangePassword/UserChangePasswordForm";
import UserInfoActionButton from "@/src/components/dashboard/userInfoActionButton/UserInfoActionButton";
import UserInfoForm from "@/src/components/dashboard/userInfoForm/UserInfoForm";
import { TbCamera, TbCircleX } from "react-icons/tb";
const BuyerInformationPage = () => {
  return (
    <div className="bg-dark-700 rounded-xl p-5 flex-col flex gap-10">
      <div className="flex  lg:w-1/2 w-full justify-between">
        <div className="text-white  flex  flex-col gap-2">
          <h1 className="text-[20px] font-black ">عکس نمایه شما</h1>
          <span>میتوانید عکس نمایه خود را تغییر دهید</span>
        </div>
        <div className="w-30 h-30 bg-gray-300 rounded-full relative">
          <div className="w-5 h-5 bg-primary-accent-green flex-center p-0.5 absolute top-2 right-1 rounded-full shadow-[-1px_1px_1px_2px_#393939]">
            <TbCamera />
          </div>
          <div className="w-5 h-5 bg-[#FF5555] flex-center p-0.5 absolute bottom-4 right-1 rounded-full shadow-[-2px_-1px_1px_2px_#393939]">
            <TbCircleX />
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-300 w-full" />
      <div className="flex  gap-4  w-full lg:w-[60%] justify-between ">
      <UserInfoActionButton title="اطلاعات فردی" explanation="میتوانید اطلاعات فردی خود را تغییر دهید"/>
        <UserInfoForm/>
      </div>
      <div className="h-px bg-gray-300 w-full" />

      <div className="flex  gap-4  w-full lg:w-[60%] justify-between ">
      <UserInfoActionButton title="امنیت" explanation="میتوانید در این بخش رمز خود را تغییر دهید"/>
        <UserChangePasswordForm/>
      </div>
    </div>
  );
};

export default BuyerInformationPage;
