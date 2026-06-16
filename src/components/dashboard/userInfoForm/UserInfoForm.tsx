"use client";
import { useRouter } from "next/navigation";
import Input from "../../common/input/Input";
import { FC, useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { editUserInfo } from "@/src/utils/sevices/api/users/editUserInfo";
import { IUser } from "@/src/core/types/IUser";
import UserInfoActionButton from "../userInfoActionButton/UserInfoActionButton";

const UserInfoForm: FC<IUser> = ({
  email,
  phoneNumber,
  lastName,
  firstName,
}) => {
  const router = useRouter();
  const [state, formAction] = useActionState(editUserInfo, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state?.message) return;
    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="flex flex-col md:flex-row  gap-4 w-full lg:w-[80%] xl:w-[60%]  items-center md:justify-between">
      <UserInfoActionButton
        title="اطلاعات فردی"
        explanation="میتوانید اطلاعات فردی خود را تغییر دهید"
      />
      <div  className="flex flex-col gap-4 sm:w-[394px] ">
        <Input
          borderColor="border-gray-300"
          dir="rtl"
          labelText="نام"
          name="firstName"
          tagBgStyle={{ background: "var(--color-dark-700)" }}
          labelTextColor="text-gray-300"
          InputHeight="h-[50px] text-white-pure"
          defaultValue={firstName}

        />
        <Input
          borderColor="border-gray-300"
          dir="rtl"
          labelText="نام خانوادگی"
          name="lastName"
          tagBgStyle={{ background: "var(--color-dark-700)" }}
          labelTextColor="text-gray-300"
          InputHeight="h-[50px] text-white-pure"
          defaultValue={lastName}
        />
        <Input
          borderColor="border-gray-300"
          dir="rtl"
          labelText="ایمیل"
          name="email"
          tagBgStyle={{ background: "var(--color-dark-700)" }}
          labelTextColor="text-gray-300"
          InputHeight="h-[50px] placeholder-gray-300 text-white-pure"
          placeHolder="example@gmail.com"
          type="email"
          defaultValue={email}
        />
        <Input
          borderColor="border-gray-300"
          dir="rtl"
          labelText="شماره تلفن"
          name="phoneNumber"
          tagBgStyle={{ background: "var(--color-dark-700)" }}
          labelTextColor="text-gray-300"
          InputHeight="h-[50px] placeholder-gray-300 text-white-pure"
          placeHolder="09123456789"
          defaultValue={phoneNumber || ""}
        />
      </div>
    </form>
  );
};

export default UserInfoForm;
