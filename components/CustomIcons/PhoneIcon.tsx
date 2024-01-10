import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const PhoneIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height, className }) => (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 5.75C1.25 14.0343 7.96573 20.75 16.25 20.75H18.5C19.7426 20.75 20.75 19.7426 20.75 18.5V17.1284C20.75 16.6121 20.3987 16.1622 19.8979 16.037L15.4747 14.9312C15.0355 14.8214 14.5734 14.9855 14.3018 15.3476L13.3316 16.6412C13.05 17.0166 12.563 17.1827 12.1223 17.0212C8.81539 15.8098 6.19015 13.1846 4.97876 9.87766C4.81734 9.43699 4.98336 8.94998 5.3588 8.6684L6.65242 7.69818C7.01453 7.4266 7.17861 6.96445 7.06883 6.52533L5.96304 2.10215C5.83783 1.60133 5.38785 1.25 4.87163 1.25H3.5C2.25736 1.25 1.25 2.25736 1.25 3.5V5.75Z" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
            )}
        ></CustomIcon>
    );
};

export default PhoneIcon;
