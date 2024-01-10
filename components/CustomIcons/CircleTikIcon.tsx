import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const CircleTikIcon = (props: IconType) => {
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
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx={12}
                        cy={12}
                        r={11.5}
                        stroke={stroke}
                        className={groupClassName}
                    />
                    <path
                        d="m17.625 8.25-7.5 7.5L6.375 12"
                        stroke={stroke}
                        className={groupClassName}
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default CircleTikIcon;
