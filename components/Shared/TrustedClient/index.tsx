/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";
import { brandData } from "../../../utils/const";
import classNames from "classnames";

type PropsData = {
    bg?: string;
};
const TrustedClient = ({ bg }: PropsData) => {
    return (
        <div className={classNames(bg ? bg : "bg-[#FAFAFA]")}>
            <div className=" py-[20px] sm:py-[40px] 2xl:py-[80px]">
                <div className="text-center">
                    <h1 className="text-[20px] mb-[10px] sm:text-[24px] sm:mb-[16px] lg:text-[40px] 2xl:text-[48px] 2xl:mb-[20px] leading-[120%] text-[#031B07] font-semibold">
                        Trusted clients
                    </h1>
                    <p className="text-[14px] mb-[20px] sm:text-[16px] lg:mb-[40px] leading-[146%] font-normal text-[#334535]">
                        Enjoy the unique features GoodReviews has to offer
                    </p>
                </div>

                {/* brand logo marquee  */}
                <Marquee gradient={false} pauseOnHover={true}>
                    <div className="flex gap-[10px] md:gap-[20px] lg:gap-[30px] xl:gap-[60px] 2xl:gap-[60px] 3xl:gap-[60px] 4xl:gap-[100px]">
                        {brandData.map((item, index) => (
                            <div className="" key={index}>
                                <img
                                    src={item.logo}
                                    alt="brand logo"
                                    className="w-[121px] h-[24px] lg:w-[143px] lg:h-[28px] xl:w-[143px] xl:h-[28px] 2xl:w-[180px] 2xl:h-[90px] cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default TrustedClient;
