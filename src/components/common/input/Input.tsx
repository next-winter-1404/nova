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
  textSize
}) => {
  return (
    <div className={`${parentWidth} relative`}>
      <label
        htmlFor={htmlFor}
        className={`${labelTextSize} absolute -top-3 right-5 h-5 p-2 flex-center `}
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
