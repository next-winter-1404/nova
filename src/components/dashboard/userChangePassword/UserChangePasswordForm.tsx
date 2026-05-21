import React from "react";
import Input from "../../common/input/Input";

const UserChangePasswordForm = () => {
  return (
    <form className="flex flex-col gap-4 w-[394px] ">
      <Input
        borderColor="border-gray-300"
        dir="rtl"
        labelText="رمز عبور قبلی"
        name="name"
        tagBgStyle={{ background: "var(--color-dark-700)" }}
        labelTextColor="text-white"
        InputHeight="h-[50px]"
      />
      <Input
        borderColor="border-gray-300"
        dir="rtl"
        labelText="رمز عبور جدید"
        name="name"
        tagBgStyle={{ background: "var(--color-dark-700)" }}
        labelTextColor="text-white"
        InputHeight="h-[50px]"
      />
      <Input
        borderColor="border-gray-300"
        dir="rtl"
        labelText="تکرار رمز عبور جدید"
        name="name"
        tagBgStyle={{ background: "var(--color-dark-700)" }}
        labelTextColor="text-white"
        InputHeight="h-[50px]"
      />
    </form>
  );
};

export default UserChangePasswordForm;
