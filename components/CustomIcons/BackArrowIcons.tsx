import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const BackArrowIcons = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height, className }) => (
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 9.18072L0.75 8.65039L0.21967 8.12006C-0.0732236 8.41295 -0.0732237 8.88783 0.21967 9.18072ZM1.81066 8.65039L8.28033 2.18072C8.57322 1.88783 8.57322 1.41295 8.28033 1.12006C7.98744 0.827168 7.51256 0.827168 7.21967 1.12006L0.21967 8.12006C0.219637 8.12009 0.21967 8.12006 0.75 8.65039C0.21967 9.18072 0.219637 9.18069 0.21967 9.18072L7.21967 16.1807C7.51256 16.4736 7.98744 16.4736 8.28033 16.1807C8.57322 15.8878 8.57322 15.413 8.28033 15.1201L1.81066 8.65039Z" fill={stroke} />
                </svg>

            )}
        ></CustomIcon>
    );
};

export default BackArrowIcons;
