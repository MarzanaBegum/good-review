/* eslint-disable @next/next/no-img-element */
import React, { HTMLInputTypeAttribute, useState } from "react";

type InputPasswordType = {
  label?: string;
};

// eslint-disable-next-line react/display-name
const InputPassword = React.forwardRef(
  (
    {
      label,
      className,
      ...props
    }: React.InputHTMLAttributes<HTMLInputElement> & InputPasswordType,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <label
          className="text-[16px] font-normal leading-[146%] text-[#031B07]"
          htmlFor=""
        >
          {label}
        </label>
        <div className="pt-2"></div>
        <div className="relative">
          <input
            ref={ref}
            {...props}
            className={`w-full h-[44px] p-[12px] text-[14px] leading-[146%] font-normal border text-[#626F63] border-[#C1C4C0] focus:outline-none rounded-[10px] ${className}`}
            type={open ? "text" : "password"}
          />
          <img
            onClick={() => setOpen(!open)}
            className="w-5 h-5 absolute top-[13px] right-4 "
            src={open ? "/icons/visible.svg" : "/icons/invisible.svg"}
            alt="icon"
          />
        </div>
      </div>
    );
  }
);

export default InputPassword;
