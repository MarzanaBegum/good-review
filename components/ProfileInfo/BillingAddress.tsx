import React from "react";

const BillingAddress = ({ userData }: any) => {
  return (
    <div className="w-[100%] sm:w-[50%]">
      <h1 className="text-[24px] xl:text-[32px] pb-[10px] text-[#031B07] font-semibold leading-[137%] border-b border-b-[#E6E9EF]">
        Billing Address
      </h1>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        <div className="text-[14px] xl:text-[16px] font-normal text-[#3C403D] leading-[140%]">
          <label>Address</label>
          <h2 className="mt-[10px]">
            {userData && userData.address ? userData.address : "-"}
          </h2>
        </div>
        <div className="text-[14px] xl:text-[16px] font-normal text-[#3C403D] leading-[140%]">
          <label>Time Zone</label>
          <h2 className="mt-[10px]">{userData && userData.timeZone ? userData.timeZone : "-"}</h2>
        </div>
        <div className="text-[14px] xl:text-[16px] font-normal text-[#3C403D] leading-[140%]">
          <label>Post Code</label>
          <h2 className="mt-[10px]">{userData && userData.zipCode ? userData.zipCode : "-"}</h2>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
