import React from "react";
import { selectClientReviewData } from "../../../utils/const";

const tableHead = ["Package", "Price", "Quantity", "Item Total"];
const OrderSummaryCard = ({ orderSummary }: any) => {
  const filterOrderSummary = orderSummary.filter((item: any) => item.quantity > 0);
  const sum = filterOrderSummary && filterOrderSummary.map((item: any) => Number(item.packagePrice * item.quantity))
    .reduce((prev: any, curr: any) => prev + curr, 0);
  return (
    <>
      <div className="px-[20px] py-[30px] bg-[#FFFFFF] rounded-[10px]">
        <h2 className="text-[16px] leading-[19px] text-[#031B07] font-semibold">
          Order summary
        </h2>
        <div className="pt-[20px]"></div>
        <div className="text-[16px] leading-[146%] pb-[10px] text-[#031B07] font-semibold border-b border-b-[#E6E9EF] flex items-center justify-between gap-[6px]">
          {tableHead.map((item: any, index: number) => (
            <div
              className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] first:text-left text-right font-normal text-[14px] sm:text-[16px]"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="py-[36px] border-b border-b-[#E6E9EF]">
          {filterOrderSummary && filterOrderSummary?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex pb-[20px] text-left last:pb-0 items-center font-normal justify-between"
            >
              <h3 className="w-[100%] md:w-[200px] xl:w-[260px] text-[#626F63] 2xl:w-[448px] font-normal text-[14px] leading-[20.44px] sm:text-[16px] capitalize sm:leading-[23.36px]">
                {item.packageType}
              </h3>

              <h3 className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] font-normal text-[#031B07] text-right text-[14px] leading-[20.44px] sm:text-[16px] sm:leading-[23.36px]">
                ${item.packagePrice}
              </h3>
              <h3 className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] text-[#626F63] text-right text-[14px] leading-[20.44px] sm:text-[16px] sm:leading-[23.36px]">
                x{item.quantity}
              </h3>
              <h3 className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] font-semibold text-[#031B07] text-right text-[16px] leading-[19.36px]">
                ${` ${item.packagePrice * item.quantity}`}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-[20px] pt-[14.5px] leading-[140%] text-[#031B07] font-medium">
          <h3 className="leading-[19px] font-medium text-[20px]">Total</h3>
          <h3 className="leading-[19px] font-medium text-[20px]">{`$${sum}`}</h3>
        </div>
      </div>
    </>
  );
};

export default OrderSummaryCard;
