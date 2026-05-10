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
  value,
  defaultValue,
  onChange,
  tagBgStyle,
  borderColor,
  textColor,
  labelTextSize,
  textSize,
<<<<<<< HEAD
  labelTextColor,
=======
  dir="ltr"
>>>>>>> 93c8eba5762a64b2b37e39f88eae31c51a9d851d
}) => {
  return (
    <div className={`${parentWidth} relative`} dir={dir}>
      <label
        htmlFor={htmlFor}
<<<<<<< HEAD
        className={`${labelTextSize} ${labelTextColor} absolute -top-3 right-5 h-5 p-2 flex-center `}
=======
        className={`${labelTextSize} absolute -top-3 right-5 h-5 p-2 flex-center whitespace-nowrap`}
>>>>>>> 93c8eba5762a64b2b37e39f88eae31c51a9d851d
        style={tagBgStyle}
      >
        {labelText}
      </label>
      <input
        autoComplete="new-password"
        name={name}
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        className={` w-full border focus:outline-none ${borderColor} ${textSize} rounded-2xl  ${textColor} px-6 ${InputHeight}`}
        placeholder={placeHolder}
        defaultValue={defaultValue}
    />
    </div>
  );
};

export default Input;
