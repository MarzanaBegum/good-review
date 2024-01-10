import React, { ButtonHTMLAttributes } from "react";

function Button({
    children,
    className,
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`w-full h-[46px] rounded-[10px] bg-[#F5F6F8] ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
