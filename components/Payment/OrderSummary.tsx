import React from "react";
import { orderSummaryData } from "../../utils/const";

function OrderSummary() {
  return (
    <div className="w-[100%] py-[30px] 2xl:w-[458px] bg-[#FFFFFF] rounded-[10px]">
      <div className="px-[20px]">
        <h1 className="text-[16px] leading-[19px] pb-[10px] text-[#031B07] font-semibold border-b border-b-[#E6E9EF]">
          Order Summary
        </h1>
      </div>
      <div className="pt-[30px] px-[40px]">
        <div className="flex flex-col gap-[20px] sm:gap-[23px] xl:gap-[20px]">
          {orderSummaryData.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <h2 className="mb-[4px] text-[14px] xl:text-[16px] leading-[146%] font-normal text-[#626F63]">
                  {item.type}
                </h2>
                <h3 className="text-[12px] leading-[160%] text-[#626F63] font-light">
                  Quantity: {item.Qty}
                </h3>
              </div>
              <h2 className="tex-[16px] leading-[19px] text-[#031B07] font-semibold">
                ${item.price}
              </h2>
            </div>
          ))}
        </div>
        <div className="pt-[16px] sm:pt-[17px] xl:pt-[16px]"></div>
        <div className="flex items-center pt-[20px] xl:pt-[24.5px] border-t border-t-[#E6E9EF] justify-between">
          <h2 className="tex-[16px] leading-[19px] text-[#031B07] font-semibold">
            Total
          </h2>
          <p className="text-[20px] leading-[140%] text-[#031B07] font-medium">
            $205
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
