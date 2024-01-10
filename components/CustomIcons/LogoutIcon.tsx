import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const LogoutIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ stroke, color, width, height, className }) => (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 3.87305L19 3.87305C19.5304 3.87305 20.0391 4.08376 20.4142 4.45883C20.7893 4.83391 21 5.34261 21 5.87305L21 19.873C21 20.4035 20.7893 20.9122 20.4142 21.2873C20.0391 21.6623 19.5304 21.873 19 21.873L15 21.873"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 7.87305L3 12.873L8 17.873"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12.873L15 12.873"
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

export default LogoutIcon;
