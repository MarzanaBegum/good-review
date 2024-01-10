import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const Support = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height, className }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2.5C6.47254 2.5 2 6.97293 2 12.5C2 18.0275 6.47293 22.5 12 22.5C17.5275 22.5 22 18.0271 22 12.5C22 6.97254 17.527 2.5 12 2.5ZM12 20.9375C7.33621 20.9375 3.5625 17.1635 3.5625 12.5C3.5625 7.83621 7.33652 4.0625 12 4.0625C16.6638 4.0625 20.4375 7.83652 20.4375 12.5C20.4375 17.1638 16.6634 20.9375 12 20.9375Z"
                        fill={stroke}
                    />
                    <path
                        d="M12 10.5C11.4477 10.5 11 10.8183 11 11.2109V15.7891C11 16.1817 11.4477 16.5 12 16.5C12.5523 16.5 13 16.1817 13 15.789V11.2109C13 10.8183 12.5523 10.5 12 10.5Z"
                        fill={stroke}
                    />
                    <path
                        d="M12 9.5C12.5523 9.5 13 9.05228 13 8.5C13 7.94772 12.5523 7.5 12 7.5C11.4477 7.5 11 7.94772 11 8.5C11 9.05228 11.4477 9.5 12 9.5Z"
                        fill={stroke}
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default Support;
