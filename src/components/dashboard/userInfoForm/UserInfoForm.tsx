import React from 'react'
import Input from '../../common/input/Input'

const UserInfoForm = () => {
  return (
    <form className="flex flex-col gap-4 w-[394px] ">
    <Input
      borderColor="border-gray-300"
      dir="rtl"
      labelText="نام"
      name="name"
      tagBgStyle={{ background: "var(--color-dark-700)" }}
      labelTextColor="text-white"
      InputHeight="h-[50px]"
    />
    <Input
      borderColor="border-gray-300"
      dir="rtl"
      labelText="نام خانوادگی"
      name="name"
      tagBgStyle={{ background: "var(--color-dark-700)" }}
      labelTextColor="text-white"
      InputHeight="h-[50px]"
    />
    <Input
      borderColor="border-gray-300"
      dir="rtl"
      labelText="ایمیل"
      name="name"
      tagBgStyle={{ background: "var(--color-dark-700)" }}
      labelTextColor="text-white"
      InputHeight="h-[50px] placeholder-gray-300"
      placeHolder="example@gmail.com"
      type="email"
    />
    <Input
      borderColor="border-gray-300"
      dir="rtl"
      labelText="شماره تلفن"
      name="name"
      tagBgStyle={{ background: "var(--color-dark-700)" }}
      labelTextColor="text-white"
      InputHeight="h-[50px] placeholder-gray-300"
      placeHolder="09123456789"
    />
  </form>
  )
}

export default UserInfoForm
