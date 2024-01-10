import React, { useState } from "react";
import BenefitIcon from "../CustomIcons/BenefitIcon";

const Benefit = () => {
  const [iconColor, setColor] = useState(false);
  const [indexNum, setIndexNum] = useState<any>();
  return (
    <div className="bg-[#F5F6F8]">
      <div className="container py-[20px] sm:py-[40px] 2xl:py-[80px]">
        <div className="text-center">
          <h2 className="font-bold sm:font-semibold text-[20px] md:text-[24px]   leading-[24px] mb-[10px] sm:mb-[16px] text-[#252B42] lg:text-[40px] lg:leading-[49px] lg:mb-[20px] 2xl:text-[48px] 2xl:leading-[57px]">
            Get benefits & advantages
          </h2>
          <p className="font-normal 2xl:text-[20px] 2xl:leading-[27px] sm:font-medium sm:text-[16px] sm:leading-[21px] text-[14px] leading-[20.44px] text-[#334535] lg:w-[580px] 2xl:w-[750px] lg:mx-auto">
            With positive reviews, you will attract more clients, which helps
            grow your sales and increase your rank.With positive reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[32px] place-content-center 2xl:mt-[60px] lg:mt-[40px] md:mt-[32px] mt-[20px] px-[16px] sm:px-0">
          {[...Array(6)].map((item: any, index: number) => (
            <div
              key={index}
              onMouseOver={() => {
                setColor(true), setIndexNum(index);
              }}
              onMouseLeave={() => {
                setColor(false), setIndexNum(index);
              }}
              className="border border-[#DBDCDA] hover:bg-primary group transition-all duration-700 ease-in-out rounded-[12px] text-center sm:text-left"
            >
              <div className="px-[30px] py-[30px]">
                {/* <img
                  src="/icons/benefit.svg"
                  alt=""
                  className="w-[40px] h-[40px] mx-auto sm:mx-0"
                /> */}
                <div className="flex justify-center sm:justify-start">
                  <BenefitIcon
                    width={40}
                    height={40}
                    stroke={
                      indexNum === index && iconColor === true
                        ? "#FFFFFF"
                        : "#18BA33"
                    }
                    color={
                      indexNum === index && iconColor === true
                        ? "LimeGreen"
                        : "white"
                    }
                  />
                </div>
                <h2 className="font-semibold mt-[40px] mb-[16px] lg:mb-[20px] group-hover:text-white text-[#252B42] text-[24px] leading-[30px]">
                  Top- Grade quality
                </h2>
                <p className="font-normal text-[16px] leading-[23.36px] text-[#3C403D] group-hover:text-[#f3f5f4]">
                  Amet minim mollit non deserunt ullamcest sit aliqua dolor do
                  amet sint. Velit officia{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
