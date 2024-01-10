/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const HeroLeft = () => {
    return (
        <div className="mb-8 text-center sm:text-left">
            <div className="flex  justify-center sm:justify-start items-center gap-[20px] text-[14px] font-normal leading-[20.44px] md:text-[14px] lg:font-medium lg:text-[20px] lg:leading-[27px]">
                {" "}
                <div className="flex gap-[3.87px] ">
                    {[...Array(5)].map((iteam: any, index: any) => (
                        <div key={index} className="flex">
                            <img
                                src="/images/green-star.svg"
                                alt=""
                                className="w-[12.7px] h-[12.7px] lg:w-[18.7px] lg:h-[18.7px]"
                            />
                        </div>
                    ))}
                </div>
                <span>
                    Based on <span className="text-primary">10K+ </span> reviews
                </span>
            </div>
            <h1 className="text-[24px] font-semibold leading-[30px] sm:text-[32px] sm:leading-[40px] lg:text-[48px] lg:leading-[57px] 2xl:text-[64px] 2xl:leading-[73px] mt-[16px] lg:mt-[20px] 2xl:mt-[30px]">
                Get <span className="text-primary">100% Real</span> Reviews from
                Real Clients!
            </h1>
            <p className="text-[#031B07] font-normal text-[14px] leading-[20.44px] lg:font-medium lg:text-[20px] lg:leading-[27px] mt-[10px] sm:mt-[16px] lg:mt-[20px] 2xl:mt-[30px]">
                With positive reviews, you will attact more client, which helps
                grow your sales and increase
            </p>
            <div className="flex md:gap-[24px] items-center 4xl:mt-[56px] mt-[30px] lg:mt-[40px] 2xl:mt-[60px] mb-[20px] sm:mb-0">
                <Link href="/signin" className="max-sm:w-full">
                    <button className="text-white hover:bg-[#128725] transit bg-primary rounded-[10px] py-[11px] w-[100%]  sm:py-[12.5px] sm:w-[149px] lg:w-[172px] lg:py-[15.5px] xl:w-[197px] xl:py-[12.5px]">
                        Get Review now
                    </button>
                </Link>
                <Link href="/how-it-works">
                    <button className=" group items-center gap-[16px] hidden sm:flex">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            className="hidden lg:block w-[48px] h-[48px] "
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="24"
                                cy="24"
                                r="24"
                                fill="white"
                                className="lg:group-hover:fill-[#128725] transit"
                            />
                            <g clipPath="url(#clip0_4503_6929)">
                                <path
                                    d="M31.7148 22.9726L20.1949 16.4926C19.9717 16.3673 19.6995 16.3702 19.4792 16.4983C19.2574 16.6279 19.1221 16.8641 19.1221 17.1204V30.0804C19.1221 30.3367 19.2574 30.5729 19.4792 30.7025C19.5915 30.7673 19.7168 30.8004 19.8421 30.8004C19.963 30.8004 20.0854 30.7701 20.1949 30.7082L31.7148 24.2282C31.9409 24.1001 32.082 23.861 32.082 23.6004C32.082 23.3398 31.9409 23.1007 31.7148 22.9726Z"
                                    fill="#18BA33"
                                    className="lg:group-hover:fill-white transit"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_4503_6929">
                                    <rect
                                        width="14.4"
                                        height="14.4"
                                        fill="white"
                                        className="lg:group-hover:!fill-primary transit"
                                        transform="translate(18.4004 16.4004)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>{" "}
                        <span className="font-semibold sm:ml-6  lg:group-hover:text-primary transit text-[16px] leading-[24.34px]">
                            How It Works
                        </span>
                    </button>
                </Link>
            </div>
            <Link
                href=""
                className="underline text-primary font-normal text-[16px] leading-[23.36px]  sm:hidden"
            >
                How it Works
            </Link>
        </div>
    );
};

export default HeroLeft;
