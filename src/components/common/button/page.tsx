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
    className = "",
    borderRadius,
}) => {
    const baseClasses = `
        flex items-center gap-2
        border-none
        justify-center
        ${disabled? 'opacity-50 cursor-not-allowed' : ''}
    `;

    const finalClasses = `${baseClasses} ${className}`;

    const buttonStyle : React.CSSProperties = {
        backgroundColor : backgroundColor || undefined,
        width : width || undefined,
        height : height || undefined,
        borderRadius : borderRadius || undefined
    }

    const content = children || (
        <>
            {icon && <span className="flex">{icon}</span>}
            {text && <span style={textStyle}>{text}</span>}
        </>
    )
  return (
    <button
        className={finalClasses}
        style={buttonStyle}
        onClick={onClick}
        disabled ={disabled}
    >
        {content}
    </button>
  )
}

export default Button