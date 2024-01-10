import React from "react";
import InputField from "../Shared/InputField";

function BillingAddress() {
  return (
    <div>
      <h1 className="text-[16px] leading-[19px] text-[#031B07] font-semibold">
        Billing Address
      </h1>
      <div className="pt-5"></div>
      <div className="flex flex-col gap-[16px] sm:gap-[30px]">
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[30px] justify-between">
          <InputField
            label="Address"
            placeholder="Address"
            className="bg-[#FAFAFA] h-[46px]"
          />
          <InputField
            label="State"
            placeholder="State"
            className="bg-[#FAFAFA] h-[46px]"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[30px] justify-between">
          <InputField label="Zip" placeholder="Code" className="bg-[#FAFAFA] h-[46px]" />
          <InputField
            label="Country"
            placeholder="Country"
            className="bg-[#FAFAFA] h-[46px]"
          />
        </div>
      </div>
    </div>
  );
}

export default BillingAddress;
