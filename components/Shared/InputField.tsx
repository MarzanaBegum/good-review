/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from "react";

type InputFieldType = {
  label?: string;
};

const InputField = React.forwardRef(
  (
    {
      label,
      className,
      ...props
    }: InputHTMLAttributes<HTMLInputElement> & InputFieldType,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className="w-full">
        <label
          className="text-[16px] font-normal leading-[146%] text-[#031B07]"
          htmlFor=""
        >
          {label}
        </label>
        <div className="pt-2"></div>
        <input
          ref={ref}
          className={`w-full h-[44px] p-[12px] text-[14px] leading-[146%] font-normal border text-[#626F63] border-[#C1C4C0] focus:outline-none rounded-[10px] ${className}`}
          type="text"
          {...props}
        />
      </div>
    );
  }
);

export default InputField;
