import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const FaceBook = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height, className }) => (
                <svg
                    width={width}
                    height={height}
                    className={className}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="24" cy="24.0005" r="23.5" stroke={stroke} />
                    <path
                        d="M28.6373 14.8383L26.3229 14.8345C23.7228 14.8345 22.0425 16.6054 22.0425 19.3463V21.4266H19.7155C19.5144 21.4266 19.3516 21.5941 19.3516 21.8006V24.8147C19.3516 25.0212 19.5146 25.1885 19.7155 25.1885H22.0425V32.794C22.0425 33.0005 22.2053 33.1678 22.4064 33.1678H25.4425C25.6436 33.1678 25.8064 33.0003 25.8064 32.794V25.1885H28.5272C28.7283 25.1885 28.8911 25.0212 28.8911 24.8147L28.8923 21.8006C28.8923 21.7014 28.8538 21.6065 28.7857 21.5363C28.7175 21.4661 28.6247 21.4266 28.5282 21.4266H25.8064V19.6631C25.8064 18.8155 26.003 18.3853 27.0779 18.3853L28.637 18.3847C28.8379 18.3847 29.0007 18.2172 29.0007 18.0109V15.2121C29.0007 15.0059 28.838 14.8387 28.6373 14.8383Z"
                        fill="white"
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default FaceBook;
