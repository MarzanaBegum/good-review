import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const PlusIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height, className }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.75 9.15512C4.336 9.15512 4 8.81912 4 8.40512V1.07812C4 0.664125 4.336 0.328125 4.75 0.328125C5.164 0.328125 5.5 0.664125 5.5 1.07812V8.40512C5.5 8.81912 5.164 9.15512 4.75 9.15512Z"
                        fill={stroke}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.41894 5.49219H1.08594C0.670938 5.49219 0.335938 5.15619 0.335938 4.74219C0.335938 4.32819 0.670938 3.99219 1.08594 3.99219H8.41894C8.83294 3.99219 9.16894 4.32819 9.16894 4.74219C9.16894 5.15619 8.83294 5.49219 8.41894 5.49219Z"
                        fill={stroke}
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default PlusIcon;
