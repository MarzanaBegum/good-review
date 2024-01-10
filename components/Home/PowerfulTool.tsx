import React from "react";
import { toolReviews } from "../../data/constant";

const PowerfulTool = () => {
    const toolImage = [
        "sms-reques",
        "email-reques",
        "direct-link",
        "reaction",
        "survay",
        "feedback",
    ];
    return (
        <div className="bg-[#F5F6F8] mt-[30px] mb-[30px] sm:mt-[50px] sm:mb-[50px] lg:mt-[80px] lg:mb-[80px] 2xl:mt-[70px] 2xl:mb-[70px] 3xl:mt-[140px] 3xl:mb-[140px]">
            <div className="container py-[16px] sm:py-[40px] 2xl:py-[70px] 3xl:py-[80px]">
                <div className="flex flex-col items-center justify-between 2xl:flex-row">
                    <div className="w-[343px] sm:w-[490px] lg:w-[630px] 2xl:w-[400px] 4xl:w-[607px] text-center 2xl:text-left">
                        <h2 className=" font-semibold text-[20px] leading-[25px] sm:text-[24px] sm:leading-[30px] lg:text-[32px] 2xl:text-[56px] 2xl:leading-[67px]">
                            <span className="text-primary">Powerful tool</span>{" "}
                            to get reviews
                        </h2>
                        <p className="text-[14px] font-normal leading-[20.44px] mt-[10px] lg:mt-[20px] text-[#031B07] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[23.36px]">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit mollit non deserunt.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-[20px]  sm:gap-[30px] 2xl:gap-[40px] mt-[20px]">
                        {toolReviews.map((item, i) => (
                            <div key={"tool_reviews_" + i} className="">
                                <div className="w-[161px] h-[118px] sm:w-[180px] sm:h-[121px] md:w-[209px] md:h-[121px] lg:w-[268px] rounded-[10px] bg-white lg:h-[185px] xl:w-[326.67px] xl:h-[185px] 2xl:w-[209px] 2xl:h-[191px] flex flex-col items-center justify-center">
                                    <img
                                        src={item.icon}
                                        className="h-[48px] 2xl:h-[64px] "
                                        alt=""
                                    />
                                    <div className="pt-[10px] 2xl:pt-[20px]"></div>
                                    <div className="text-sm lg:font-medium leading-[20.5px] sm:text-base sm:leading-[23.3px] lg:text-[20px] lg:leading-[27px]">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerfulTool;
