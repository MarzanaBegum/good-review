import React, { useState } from "react";
import pricingQuery from "../../api-query/usePricingQuery";
import PricingItem from "./PricingItem";
import classNames from "classnames";

const serviceTab = ["Fiverr", "Upwork"];

const PricingCard = () => {
    const [serviceState, setServiceState] = useState("fiverr");

    const { data, isLoading } = pricingQuery(serviceState);
    return (
        <div
            className={classNames(
                !data && "hidden",
                "mt-[30px] sm:mt-[80px] 2xl:mt-[140px]"
            )}
        >
            <div className="text-center">
                <h3 className="text-[20px] font-medium leading-[27px] text-[#031B07] sm:text-[24px] sm:font-semibold sm:leading-[30px] lg:text-[40px] lg:leading-[48px] 2xl:text-[56px] 2xl:leading-[67px]">
                    Choose your <span className="text-primary">right plan</span>
                </h3>
                <p className="font-normal text-[14px] leading-[20.44px] text-[#031B07] mt-[16px] sm:w-[400px] mx-auto lg:text-[16px] lg:w-[100%] px-[16px]">
                    No matter your sales and marketing objectives, Good Reviews
                    has a plan for you.
                </p>
            </div>
            <div className="w-[339px] h-[66px] mx-auto bg-[#FAFAFA] rounded-[6px] mt-[20px] mb-[20px] text-primary font-bold text-[17px] leading-[22px]  flex  sm:mt-[30px] sm:mb-[30px] md:mt-[40px] md:mb-[40px] 2xl:mb-[80px]">
                {serviceTab.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setServiceState(item.toLowerCase())}
                        className="w-1/2 h-full flex cursor-pointer hover:bg-[rgb(24,186,51,.1)] items-center justify-center border-b-[4px] rounded"
                        style={{
                            borderColor:
                                serviceState === item.toLowerCase()
                                    ? "#18BA33"
                                    : "transparent",
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <PricingItem pricingData={data} />
        </div>
    );
};
export default PricingCard;
