export interface IOption {
    value: string;
    label: string;
  }
 export interface IDropDownProps {
    options:IOption[],
    paramKey:string,
    placeholder:string,
  }