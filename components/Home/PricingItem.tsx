import React, { useState } from "react";
import { useRouter } from "next/router";
import CircleTikIcon from "../CustomIcons/CircleTikIcon";

const PricingItem = ({ pricingData }: any) => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-[20px] lg:gap-[30px] lg:justify-center px-[16px] xs:px-0">
      {pricingData && pricingData.length > 0 ? (
        pricingData?.map((item: any, index: number) => (
          <div
            key={index}
            className="4xl:w-[460px] group lg:hover:bg-primary transition-all duration-200 max-lg:mx-auto 3xl:w-[393.33px] 2xl:w-[380px] xl:w-[326.67px] lg:w-[268px] sm:w-[350px]  xs:w-[343px] w-[100%] h-auto bg-[#F5F6F8] rounded-[10px]"
          >
            <div className="px-[20px] flex flex-col h-full justify-between py-[20px]">
              <div>
                <h3 className="text-[#031B07] transit lg:group-hover:text-white font-semibold text-[24px] leading-[30px]">
                  {item.packageType}
                </h3>
                <p className="mt-[16px] text-[#626F63] transit lg:group-hover:text-white font-normal ">
                  <span className="text-primary transit lg:group-hover:text-white font-semibold text-[32px] leading-[40px] mr-2">
                    ${item.price}
                  </span>{" "}
                  / per review
                </p>
                <p className="text-[#626F63] transit lg:group-hover:text-white font-normal text-[16px] leading-[23.36px] mt-[5px]">
                  Businesses with excellent reviews.
                </p>
                <div className="flex flex-col mt-[30px]">
                  {item.features.map((featureItem: any, index: number) => (
                    <div key={index} className="flex gap-[16px] mb-[20px]">
                      <CircleTikIcon
                        stroke={"#18BA33"}
                        groupClassName="lg:group-hover:stroke-white transit"
                      />
                      <p className="text-[#031B07] transit lg:group-hover:text-white text-[16px] font-normal leading-[23.36px]">
                        {featureItem.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => router.push("/signup")}
                className="mt-[20px] w-[100%] py-[11.5px] lg:group-hover:bg-white transit rounded-[10px] border border-primary text-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-[#626F63]">
          No plan available under this service !
        </p>
      )}
    </div>
  );
};

export default PricingItem;
