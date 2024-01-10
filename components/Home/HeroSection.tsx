import React from "react";
import HeroLeft from "./HeroLeft";

const HeroSection = () => {
    return (
        <div className="w-[100%] pt-[30px] sm:pt-[60px] lg:pt-[100px] bg-[#F5F6F8]">
            <div className="4xl:px-[240px] 3xl:px-[220px] 2xl:px-[120px] xl:px-[80px] lg:px-[70px] sm:px-[40px] px-[16px] flex justify-center xl:gap-[100px] 2xl:gap-[70px] 3xl:gap-[34px] 4xl:gap-0 items-center">
                <div className="4xl:w-[662px] 3xl:w-[637px] 2xl:w-[519px] xl:w-[521px] lg:w-[395px] md:w-[318px] sm:w-[300px]">
                    <div className="w-[100%]">
                        <HeroLeft />
                    </div>
                </div>
                {/* right part  */}
                <div className="4xl:w-[779px] h-full 3xl:w-[677px] 2xl:w-[611px] xl:w-[449px] lg:w-[471px] md:w-[318px] sm:w-[289px] w-[100%] hidden sm:block">
                    {/* <img
                        src="images/heroCover.png"
                        alt=""
                        className="w-full h-[208px] lg:h-[406px]  md:h-[294px] 2xl:h-[547px] 4xl:h-[703px] -mb-[90px] md:-mb-[30px] xl:-mb-[0px]"
                    /> */}
                    <div className="w-full h-full bg-red-500"></div>
                </div>
            </div>
        </div>
    );
};

export const NewHeroSection = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="container"> 
                <div className="flex justify-between">
                    <div className="w-full lg:pb-[5px] xl:pb-[50px] md:w-[55%] sm:w-[60%] lg:w-[55%] pt-[30px] sm:pt-[60px] lg:pt-[100px] 2xl:pt-[130px] 2xl:w-[50%] 3xl:pt-[170px] 3xl:pb-[80px] 4xl:pb-[100px] 4xl:pt-[200px]">
                        <HeroLeft />
                    </div>
                    <div className="hidden self-end relative sm:block w-[40%] md:w-[38%] lg:w-[45%] xl:w-[40%] 2xl:w-[45%]">
                        <img src="/hero-img/man.png" alt="man" />
                        <div className="lg:hidden">
                            <img
                                src="/hero-img/left-item-sm.svg"
                                className=" absolute top-[70px] -left-[50px] z-10"
                                alt=""
                            />
                            <img
                                src="/hero-img/right-item-sm.svg"
                                className=" absolute -bottom-[10px] -right-[50px] z-10"
                                alt=""
                            />
                        </div>
                        <div className="hidden lg:block xl:hidden">
                            <img
                                src="/hero-img/left-item-lg.svg"
                                className=" absolute top-[110px] xl:top-[150px] -left-[40px] z-10"
                                alt=""
                            />
                            <img
                                src="/hero-img/right-item-lg.svg"
                                className=" absolute bottom-[10px] -right-[50px] z-10"
                                alt=""
                            />
                        </div>
                        <div className="hidden 2xl:block ">
                            <img
                                src="/hero-img/left-item-2xl.svg"
                                className=" absolute top-[240px] -left-[80px] z-10"
                                alt=""
                            />
                            <img
                                src="/hero-img/right-item-2xl.svg"
                                className=" absolute bottom-[20px] 4xl:bottom-[] -right-[50px] z-10"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
