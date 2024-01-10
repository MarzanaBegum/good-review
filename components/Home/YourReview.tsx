import React from "react";
import { reviewData } from "../../utils/const";

const YourReview = () => {
    return (
        <div className="4xl:px-[240px] 3xl:px-[220px] 2xl:px-[120px] xl:px-[80px] lg:px-[70px] sm:px-[40px] px-[16px] mt-[30px] sm:mt-0">
            <div className="hidden text-center sm:block mt-[70px] 2xl:mt-[130px]">
                <h3 className="text-[24px] leading-[30px] font-semibold lg:text-[40px] lg:leading-[48px]  2xl:font-semibold 2xl:text-[56px]">
                    Let your{" "}
                    <span className="font-bold text-primary">reviews</span> do
                    the talking
                </h3>
                <p className="text-[#626F63] font-normal text-[14px] leading-[20.44px] w-[420px] mx-auto mt-[16px] mb-[30px] lg:text-[16px] lg:leading-[23.36px] lg:w-[530px] lg:mt-[20px] lg:mb-[50px] 2xl:text-[16px] 2xl:font-normal 2xl:leading-[23.36px] 2xl:w-[590px] 2xl:mb-[70px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sodales dictum viverra. Nam gravida dignissim eros.{" "}
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]  justify-center ">
                {reviewData.map((itema: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row lg:flex-col  lg:text-center 4xl:w-[447.33px] 3xl:w-[386.67px] 2xl:w-[373.33px] xl:w-[320px] lg:w-[261.33px]"
                    >
                        <img
                            src={itema.icon}
                            alt=""
                            className="w-[140px] h-[140px] mx-auto"
                        />
                        <div className="flex flex-col justify-center text-center lg:text-center sm:text-left">
                            <h3 className="font-semibold text-[16px] lg:text-[24px] leading-[30px]">
                                {itema.title}
                            </h3>
                            <p className="2xl:text-[16px] text-[14px] font-normal leading-[23.36px] text-[#031B07] lg:mt-[16px] xl:mt-[20px]">
                                {itema.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YourReview;
