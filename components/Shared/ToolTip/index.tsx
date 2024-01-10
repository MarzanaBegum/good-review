/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

type RCTYPE = {
    className?: string;
    toolTipText?: string;
    children?: ReactNode;
};

const ToolTip = ({ toolTipText, className, children }: RCTYPE) => {
    return (
        <div className="relative inline-block overflow-visible group z-[9]">
            {children}
            <div
                className={`${className} z-[1] tooltiptext mb-[6px] after:ml-[76px] p-[8px] rounded-[4px] right-[2%] invisible group-hover:visible text-white text-[12px] font-normal text-center absolute bottom-[100%] bg-[#031B07]`}
            >
                {toolTipText}
            </div>
        </div>
    );
};

export default ToolTip;
