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
    buttonStyle ? : React.CSSProperties;
}
export interface ILoginButtonProp{
    buttonText:string, 
    loadingText:string, 
    width:string,
    type?: "button" | "submit" | "reset"
}