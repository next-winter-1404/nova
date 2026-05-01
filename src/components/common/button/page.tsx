import { IButtonProps } from '@/src/core/types/IButtonProps'
import React, { FC } from 'react'
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
    border
}) => {
    const baseStyles: React.CSSProperties = {
        backgroundColor : "#FF5555",
        color : "#FFFFFF",
        border : "none",
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
            {icon && <span style={{display: "flex"}}>{icon}</span>}
            {text && <span style={textStyle}>{text}</span>}
        </>
    )
  return (
    <button
        style={finalButtonStyles}
        onClick={onClick}
        disabled ={disabled}
    >
        {icon && <span>{icon}</span>} 
        {text && <span style={textStyle}>{text}</span>}
    </button>
  )
}

export default Button