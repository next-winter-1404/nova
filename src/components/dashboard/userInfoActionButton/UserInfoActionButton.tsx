import React, { FC } from "react";
import LoginButton from "../../login/button/LoginButton";
interface IProp {
  title?: string;
  explanation?: string;
}
const UserInfoActionButton: FC<IProp> = ({ title, explanation }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col text-white-pure gap-2">
        <h1 className="font-black text-[20px]">{title}</h1>
        <p>{explanation}</p>
      </div>
      <div className="flex gap-3 text-white-pure">
        <LoginButton
          buttonText="انصراف"
          buttonStyle="bg-transparent border p-3  text-center "
          noIcon
        />
        <LoginButton
          buttonText="اعمال تغییرات"
          type="submit"
          noIcon
          width="p-3 text-white-pure"
          loadingText="اعمال تغییرات ..."
        />
      </div>
    </div>
  );
};

export default UserInfoActionButton;
