import { ChangeEvent,CSSProperties } from "react";

export interface IInputProp {
    parentWidth?: string;
    htmlFor?: string;
    labelText: string;
    type?: string;
    id?: string;
    InputHeight?: string;
    placeHolder?: string;
    name?: string;
    value?:string|number,
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void,
    tagBgStyle?:CSSProperties
    borderColor?: string
    textColor? : string
    labelTextSize?: string
    textSize? : string
  }
 