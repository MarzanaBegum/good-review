import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const AddImage = (props: IconType) => {
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
                    width={37}
                    height={37}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M32.375 18.5v10.792a3.083 3.083 0 0 1-3.083 3.083h-4.625M32.375 18.5c-9.932 0-15.58 3.06-18.585 6.54m18.585-6.54v-2.313m-7.708 16.188H7.708a3.083 3.083 0 0 1-3.083-3.083v-4.625m20.042 7.708c-2.627-4.268-6.826-6.395-10.877-7.334m0 0c-3.558-.826-7.002-.735-9.165-.374m0 0V7.708a3.083 3.083 0 0 1 3.083-3.083h12.334m-6.938 6.167c-.77 0-2.312.462-2.312 2.312 0 1.85 1.541 2.313 2.312 2.313.771 0 2.313-.463 2.313-2.313s-1.542-2.312-2.313-2.312ZM29.292 3.082v4.625m0 0v4.625m0-4.625h4.625m-4.625 0h-4.625"
                        stroke={color}
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        className={groupClassName}
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default AddImage;
