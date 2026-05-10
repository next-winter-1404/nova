import { IButtonProps } from '@/src/core/types/IButtonProps';
import React, { FC } from 'react'

// export interface ButtonProps{
//     text: string | number;
//     backgroundColor?: string;
//     color? :string,
//     icon? : React.ReactNode;
//     children ? : React.ReactNode;
//     onClick? : () => void;
//     disabled ? : boolean;
//     size ? : "lg" | "md";
//     width ? : string;
//     height ? : string;
//     textStyle ? : React.CSSProperties;
//     buttonStyle ? : React.CSSProperties;
// }


const Button: FC<IButtonProps> = ({
    text,
    textStyle,
    backgroundColor,
    icon,
    children,
    onClick,
    disabled = false,
    size,
    width,
    height,
    color,
    buttonStyle,
}) => {
    const baseStyles: React.CSSProperties = {
        backgroundColor : "#FF5555",
        color : "#FFFFFF",        
        width : "150px",
        height : "43px",
        borderRadius :"16px",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        gap: '8px',   
    }

    const finalButtonStyles : React.CSSProperties = {
        ...baseStyles,
        ...buttonStyle,
        
    };

    const content = children || (
        <>
            {icon && <span className="flex">{icon}</span>}
            {text && <span style={textStyle}>{text}</span>}
        </>
    )
  return (
    <button
        style={finalButtonStyles}
        onClick={onClick}
        disabled ={disabled}
    >
        {content}
    </button>
  )
}

export default Button