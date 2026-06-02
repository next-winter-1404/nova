"use client";
import React, { useActionState, useEffect } from "react";
import Input from "../../common/input/Input";
import UserInfoActionButton from "../userInfoActionButton/UserInfoActionButton";
import { changePassword } from "@/src/utils/sevices/api/users/changePassword";
import toast from "react-hot-toast";

const UserChangePasswordForm = () => {
  const [state, formAction] = useActionState(changePassword, {
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
  }, [state]);
  return (
    <form
      action={formAction}
      className="flex flex-col md:flex-row  gap-4 w-full lg:w-[80%] xl:w-[60%]  items-center md:justify-between"
    >
      <UserInfoActionButton
        title="امنیت"
        explanation="میتوانید در این بخش رمز خود را تغییر دهید"
      />
      <div className="flex flex-col gap-4 w-[394px] text-white">
        <Input
          borderColor="border-gray-300"
          dir="rtl"
          labelText="رمز عبور قبلی"
          name="currentPassword"
          tagBgStyle={{ background: "var(--color-dark-700)" }}
          labelTextColor="text-white"
          InputHeight="h-[50px]"
        />
        <Input
          borderColor="border-gray-300"
          dir="rtl"
          labelText="رمز عبور جدید"
          name="newPassword"
          tagBgStyle={{ background: "var(--color-dark-700)" }}
          labelTextColor="text-white"
          InputHeight="h-[50px]"
        />
        <Input
          borderColor="border-gray-300"
          dir="rtl"
          labelText="تکرار رمز عبور جدید"
          name="confirmPassword"
          tagBgStyle={{ background: "var(--color-dark-700)" }}
          labelTextColor="text-white"
          InputHeight="h-[50px]"
        />
      </div>
    </form>
  );
};

export default UserChangePasswordForm;
