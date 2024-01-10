import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="4xl:pl-[240px] 4xl:pr-[143px] 3xl:pl-[220px] 3xl:pr-[44.44px] 2xl:pl-[120px] 2xl:pr-[38px] xl:pl-[80px] xl:pr-[40px] lg:pl-[80px] sm:pl-[40px] sm:pr-[40px] pl-[16px] pr-[16px]">
                <div className="py-[30px] 2xl:py-[140px] lg:py-[100px] gap-[10px] sm:py-[40px] flex justify-between items-center">
                    <div className="3xl:max-w-[820px] 2xl:max-w-[755px] xl:max-w-[590px] lg:max-w-[570px] md:max-w-[378px]  text-center sm:w-[calc(100%-296px)] sm:text-left">
                        <h1 className="text-[#252B42] font-secondary font-semibold 2xl:text-[64px] 2xl:leading-[73px] lg:text-[48px] lg:leading-[57px] md:text-[32px] md:leading-[40px] sm:text-[24px] sm:leading-[30px] text-[24px] leading-[30px] tracking-tight">
                            GoodReviews High-Quality platform. Reliable and
                            Affordable
                        </h1>

                        {/* img section  */}
                        <div className=""></div>
                        <div className="relative pt-5 w-[296px] mx-auto sm:hidden ">
                            <img
                                src="/hero-img/women.png"
                                className="w-full relative z-10"
                                alt=""
                            />
                            <div className="absolute bottom-0 left-0 w-full h-[196px] bg-[#A5F3B2] rounded"></div>
                        </div>

                        <p className="mt-[20px] text-[#334535] font-medium lg:text-[20px] leading-[27px] sm:text-[16px] sm:leading-[23.36px] text-[14px]">
                            With positive reviews, you will attract more
                            clients, which helps grow your sales and increase
                            your rank.
                        </p>

                        <Link href="/signin">
                            <button className="xl:w-[187px] xl:h-[56px] sm:w-[171px] sm:h-[48px] w-[100%] h-[41px]  bg-primary text-white rounded-[10px] font-medium xl:text-[18px] leading-[24.48px] mt-[16px] sm:mt-[40px] text-[16px] hover:bg-[#128725] transit">
                                Get Review now
                            </button>
                        </Link>
                    </div>
                    <div className="relative pt-5 xl:w-[454px] 2xl:w-[500px] lg:w-[347px] w-[296px] sm:block hidden">
                        <img
                            src="/hero-img/women.png"
                            className="w-full  relative z-10"
                            alt=""
                        />
                        <div className="absolute 2xl:w-[500px] 3xl:w-[550px] left-0 bottom-0 xl:h-[363px] 3xl:-left-[50px] 2xl:-left-[0px] lg:rounded-xl w-full h-[196px] 4xl:-left-[100px] 4xl:w-[632px] sm:h-[237px] bg-[#A5F3B2] rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
