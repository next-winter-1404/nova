export interface IOption {
    value: string;
    label: string;
  }
 export interface IDropDownProps {
    options:IOption[],
    paramKey:string,
    placeholder:string,
    labelText?:string,
    value?: string;
    onChange?: (value: string) => void;
    triggerClassName?:string,
    tagBg?:string,
  }