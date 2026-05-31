export interface IButtonProps{
    text?: string | number;
    backgroundColor?: string;
    color? :string,
    icon? : React.ReactNode;
    children ? : React.ReactNode;
    onClick? : () => void;
    disabled ? : boolean;
    size ? : "lg" | "md";
    width ? : string;
    height ? : string;
    textStyle ? : React.CSSProperties;
    borderRadius ? : string;
    buttonStyle ? : React.CSSProperties;
    className ? : string
    type ? : "button"|"submit"|"reset"
}

export interface ILoginButtonProp{
    type?:"button"|"submit"|"reset",
    loadingText?:string
    width?:string
    buttonText?:string
    height?:string
    radius?:string
    buttonStyle ? : string;
    noIcon?:boolean
}