import React from "react";
import CustomIcon, { IconType } from "./CustomSvgIcon";

const Invoice = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height, className }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.57508 21.4436L4.2048 19.4715L6.10725 21.374C6.4002 21.667 6.8748 21.667 7.16783 21.374L9 19.5419L10.8322 21.3741C11.1251 21.667 11.5997 21.667 11.8927 21.3741L13.7952 19.4716L16.4249 21.4437C16.5575 21.5429 16.7157 21.5938 16.875 21.5938C16.9892 21.5938 17.1043 21.5678 17.2105 21.5147C17.4646 21.3876 17.625 21.1279 17.625 20.8438V1.15625C17.625 0.7421 17.2892 0.40625 16.875 0.40625H1.125C0.71085 0.40625 0.375 0.7421 0.375 1.15625V20.8438C0.375 21.1279 0.535425 21.3876 0.789525 21.5146C1.04258 21.6414 1.34655 21.6139 1.57508 21.4436ZM1.875 1.90625H16.125V19.3438L14.1749 17.8815C13.8754 17.657 13.4579 17.687 13.1946 17.9511L11.3624 19.7833L9.53025 17.9511C9.38378 17.8046 9.19185 17.7313 9 17.7313C8.80815 17.7313 8.61623 17.8046 8.46975 17.9511L6.63757 19.7833L4.8054 17.9511C4.5417 17.687 4.12387 17.657 3.82507 17.8815L1.875 19.3438V1.90625Z"
                        fill={stroke}
                    />
                    <path
                        d="M5.0625 14.5078H12.9375C13.3517 14.5078 13.6875 14.172 13.6875 13.7578C13.6875 13.3437 13.3517 13.0078 12.9375 13.0078H5.0625C4.64835 13.0078 4.3125 13.3437 4.3125 13.7578C4.3125 14.172 4.64835 14.5078 5.0625 14.5078Z"
                        fill={stroke}
                    />
                    <path
                        d="M5.0625 10.5703H12.9375C13.3517 10.5703 13.6875 10.2345 13.6875 9.82031C13.6875 9.40616 13.3517 9.07031 12.9375 9.07031H5.0625C4.64835 9.07031 4.3125 9.40616 4.3125 9.82031C4.3125 10.2345 4.64835 10.5703 5.0625 10.5703Z"
                        fill={stroke}
                    />
                    <path
                        d="M5.0625 6.63281H12.9375C13.3517 6.63281 13.6875 6.29696 13.6875 5.88281C13.6875 5.46866 13.3517 5.13281 12.9375 5.13281H5.0625C4.64835 5.13281 4.3125 5.46866 4.3125 5.88281C4.3125 6.29696 4.64835 6.63281 5.0625 6.63281Z"
                        fill={stroke}
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default Invoice;