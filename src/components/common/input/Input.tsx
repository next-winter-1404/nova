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
  labelTextColor,
  dir = "ltr",
  readOnly = false,  
  disabled = false,  
  className
}) => {
  return (
    <div className={`${parentWidth} relative`} dir={dir}>
      <label
        htmlFor={htmlFor}
        className={`${labelTextSize} ${labelTextColor} absolute -top-3 right-5 h-5 p-2 flex-center whitespace-nowrap`}
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
        readOnly={readOnly}
        disabled={disabled}
        className={`w-full border focus:outline-none ${borderColor} ${textSize} rounded-2xl ${className} ${textColor} px-6 ${InputHeight} ${
          readOnly || disabled ? " cursor-not-allowed" : ""
        }`}
        placeholder={placeHolder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;