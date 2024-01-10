import React from "react";
import { questionsData } from "../../../utils/const";
import FrequentlyQuestion from "./FrequentlyQuestion";

const FreequentSection = () => {
    return (
        <div className="container py-[30px] sm:py-[40px] lg:py-[80px] 2xl:py-[140px]">
            <div className="mb-[20px] sm:mb-[30px] md:mb-[42px] lg:mb-[60px] 2xl:mb-[80px] text-center">
                <h1 className="text-[20px] mb-[10px] lg:text-[48px] sm:text-[24px] md:text-[24px] sm:mb-[20px] leading-[120%] text-[#252B42] font-semibold">
                    Frequently asked questions?
                </h1>
                <p className="text-[14px] text-center sm:text-[16px] leading-[146%] text-[#737373] font-normal max-w-[800px] mx-auto">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                    exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
            <div className="flex flex-col sm:w-[600px] xs:w-[343px] w-[100%] md:w-[688px] lg:w-[864px] xl:w-[1040px] 2xl:w-[1200px] mx-auto ">
                {questionsData.map((v, i) => (
                    <div className="border-b border-b-[#C1C4C0]" key={i}>
                        <FrequentlyQuestion data={v} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreequentSection;
