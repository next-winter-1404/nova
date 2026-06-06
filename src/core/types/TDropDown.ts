export interface IOption {
    value?: string|number;
    label?: string;
  }
 export interface IDropDownProps {
    options:IOption[],
    paramKey:string,
    placeholder:string,
    labelText?:string,
    city?: string;
    setCity?: (value: string) => void;
    triggerClassName?:string,
    tagBg?:string,
  }