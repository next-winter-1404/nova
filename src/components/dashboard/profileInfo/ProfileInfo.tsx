import Image from "next/image";
import userPlaceholder from "@/src/assets/images/userPlaceHolder.jpg";
import { FC } from "react";

interface IProps {
  profilePicture?: any;
  name?: string;
  phone?: string | number | undefined | null;
}
const ProfileInfo: FC<IProps> = ({ profilePicture, name, phone }) => {
  return (
    <div className="flex gap-2" dir="rtl">
      <div className="border border-[#D9D9D9] rounded-lg">
        <Image
          alt="prof"
          src={profilePicture || userPlaceholder}
          width={37}
          height={30}
          className="rounded-lg "
        />
      </div>
      <div className="flex flex-col gap-1">
        <span>{name || "نام کاربر"}</span>
        <span className="text-gray-300">{phone || "------------"}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
