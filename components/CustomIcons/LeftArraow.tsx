import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const LeftArraow = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({
                stroke,
                color,
                width,
                height,
                className,
                groupClassName,
            }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.91602 12.4621L1.08268 6.62874L6.91602 0.79541"
                        stroke={stroke}
                        className={groupClassName}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default LeftArraow;
