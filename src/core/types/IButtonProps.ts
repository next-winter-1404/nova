export interface IButtonProps{
    text: string | number;
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
    className? : string;
    borderRadius ? : string;
    buttonStyle ? : React.CSSProperties;
    border? : string
}
export interface ILoginButtonProp{
    type?:"button"|"submit"|"reset",
    loadingText?:string
    width?:string
    buttonText?:string
    height?:string
    radius?:string

}