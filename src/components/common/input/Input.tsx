import { IInputProp } from "@/src/core/types/IInputProp";
import React, { FC } from "react";
const Input: FC<IInputProp> = ({
  parentWidth,
  htmlFor,
  labelText,
  type,
  id,
  InputHeight,
  placeHolder,
  name,
}) => {
  return (
    <div className={`${parentWidth} relative`}>
      <label
        htmlFor={htmlFor}
        className="text-13-regular absolute -top-3 right-5 h-5 bg-dark-900 p-2 flex-center"
      >
        {labelText}
      </label>
      <input
        autoComplete="new-password"
        name={name}
        type={type}
        id={id}
        className={` w-full border border-white rounded-2xl  text-gray-300 px-6 ${InputHeight}`}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
