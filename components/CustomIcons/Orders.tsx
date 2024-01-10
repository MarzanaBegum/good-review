import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const Orders = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height, className }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 16 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.0667 3.5H1.93333C1.41787 3.5 1 3.92284 1 4.44444V19.5556C1 20.0772 1.41787 20.5 1.93333 20.5H14.0667C14.5821 20.5 15 20.0772 15 19.5556V4.44444C15 3.92284 14.5821 3.5 14.0667 3.5Z"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 16.5H8.5M5.875 1.5V4.40323V1.5ZM11.125 1.5V4.40323V1.5ZM5 8.75806H12H5ZM5 12.629H10.25H5Z"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default Orders;
