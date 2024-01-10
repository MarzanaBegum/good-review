import React from "react";
import MoboPlansCompare from "./MoboPlanCompare";
import PlanCompareTable from "./PlansCompareTable";

const PlansCompare = () => {
  return (
    <div className="py-[30px] md:py-[40px] 2xl:py-[140px] sm:bg-[#FFFFFF] sm:rounded-[10px] 2xl:rounded-none 2xl:bg-transparent">
      <div className="text-center">
        <h1 className="text-[24px] pb-[8px] sm:pb-[16px] lg:text-[32px] 2xl:text-[48px] 2xl:pb-[20px] leading-[120%] text-[#031B07] font-semibold">Plans compare</h1>
        <h2 className="text-[14px] pb-[24px] sm:text-[16px] leading-[146%] sm:pb-[30px] md:pb-[40px] text-[#334535] font-normal">Enjoy the unique features GoodReviews has to offer</h2>
      </div>
      <PlanCompareTable/>
      <MoboPlansCompare/>
    </div>
  );
};

export default PlansCompare;
