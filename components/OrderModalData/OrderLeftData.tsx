import classNames from "classnames";
import React from "react";

const OrderLeftData = ({ leftData }: any) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div>
        <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px]">
          Client Name
        </h2>
        <p
          className={classNames(
            leftData.buyer ? "not-italic" : "italic",
            "mt-[10px] text-[#334535] text-[16px] font-normal leading-[22px]"
          )}
        >
          {leftData.buyer ? leftData.buyer.name : "Finding client"}
        </p>
      </div>
      <div>
        <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px]">
          Package Type
        </h2>
        <p className="mt-[10px] text-[#334535] text-[16px] font-normal leading-[22px]">
          {leftData.packageType}
        </p>
      </div>
      <div>
        <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px]">
          Buyer’s Type
        </h2>
        <p className="mt-[10px] text-[#334535] text-[16px] font-normal leading-[22px]">
          {leftData.buyer ? leftData.buyer.buyerType : "-"}
        </p>
      </div>
    </div>
  );
};

export default OrderLeftData;
