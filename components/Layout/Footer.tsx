/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import FaceBook from "../CustomIcons/FacebookIcon";
import Instragram from "../CustomIcons/InstragramIcon";
import Twitter from "../CustomIcons/TwitterIcon";

const firstList = [
    {
        id: 1,
        title: "Resources",
        url: "/",
    },
    {
        id: 2,
        title: "Company",
        url: "/",
    },
    {
        id: 3,
        title: "Contact us",
        url: "/contact-us",
    },
    {
        id: 4,
        title: "Social Media",
        url: "/",
    },
];
const secondList = [
    {
        id: 1,
        title: "Privacy Policy",
        url: "/privacy-policy",
    },
    {
        id: 2,
        title: "Terms of service",
        url: "/",
    },
];

const socialICon = [
    {
        id: 1,
        url: "#",
        Icon: FaceBook,
    },
    {
        id: 2,
        url: "#",
        Icon: Twitter,
    },
    {
        id: 3,
        url: "#",
        Icon: Instragram,
    },
];

export default function Footer() {
    const [iconColor, setIconColor] = useState(false);

    const [getIndex, setIndex] = useState<any>({});
    const mouseOver = (id: number) => {
        if (id) setIconColor(true);
    };
    const mouseLeave = (id: number) => {
        if (id) setIconColor(false);
    };
    return (
        <div className="w-[100%] bg-[#031706] h-auto text-[#FFFFFF]">
            <div className="px-[16px] py-[30px] sm:p-[40px] xl:pt-[40px] xl:px-[80px] xl:pb-[61px] 2xl:pt-[80px] 2xl:px-[120px] 3xl:px-[220px] 4xl:px-[240px]">
                <div className="pb-[30px] flex flex-col items-center sm:pb-[40px] lg:mb-[60px] 2xl:mb-[80px] text-center">
                    <h2 className="text-[24px] w-[70%] leading-[30px] mb-[20px] sm:mb-[16px] lg:text-[48px] lg:mb-[20px] 3xl:text-[56px] lg:leading-[120%] font-semibold">
                        Start getting more reviews today
                    </h2>
                    <h3 className="text-[14px] sm:text-[16px] leading-[146%] font-normal text-[#C1C4C0]">
                        Send up to 250 SMS & Email requests absolutely free
                        during your free 14-day trial!
                    </h3>
                    <Link href="/pricing">
                        <button className="w-[123px] h-[40px] mt-[30px] text-[14px] sm:w-[172px] sm:h-[56px] sm:text-[18px] lg:mt-[40px] 2xl:w-[180px] 2xl:h-[48px] font-medium rounded-[10px] cursor-pointer bg-[#18BA33] hover:bg-[#119226] text-white transition-all duration-700">
                            See all plans
                        </button>
                    </Link>
                </div>
                <hr className="w-full bg-[#626F63] opacity-60" />

                <div className="flex lg:items-center justify-between py-[16px] sm:py-[38px] lg:py-[40px]">
                    <div>
                        <div className="flex flex-col gap-[20px] sm:gap-[30px]">
                            <Link href="/">
                                <img
                                    src="/images/footer-logo.svg"
                                    alt="logo"
                                    className="w-[142px] h-[30px] cursor-pointer 2xl:w-[218px] 2xl:h-[46px]"
                                />
                            </Link>
                            <ul className="lg:hidden flex-row flex gap-[14px] sm:gap-[20px] md:gap-[32px]">
                                {socialICon.map(({ id, Icon, url }) => (
                                    <Link href={url} passHref key={id}>
                                        <li
                                            onMouseOver={() => {
                                                mouseOver(id), setIndex(id);
                                            }}
                                            onMouseLeave={() => {
                                                mouseLeave(id), setIndex(id);
                                            }}
                                            className="flex cursor-pointer"
                                        >
                                            <Icon
                                                width="48"
                                                height="48"
                                                stroke={`${
                                                    id === getIndex &&
                                                    iconColor === true
                                                        ? "#18BA33"
                                                        : "#fff"
                                                }`}
                                                className="w-[24px] h-[24px] sm:w-[48px] sm:h-[48px]"
                                            />
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <ul className="flex  flex-col gap-[10px] sm:gap-5 lg:flex-row lg:gap-[47px]">
                            {firstList.map((item, index) => (
                                <Link href={item.url} passHref key={item.id}>
                                    <li className="text-[14px] sm:text-[16px]  leading-[146%] font-normal hover:underline">
                                        {item.title}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                        <div className="sm:hidden pr-[40px] mt-[20px]">
                            <ul className="flex flex-col gap-[10px] lg:flex-row lg:gap-[47px]">
                                {secondList.map((item, index) => (
                                    <Link
                                        href={item.url}
                                        passHref
                                        key={item.id}
                                    >
                                        <li className="text-[14px] sm:text-[16px] leading-[146%] font-normal hover:underline">
                                            {item.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="flex flex-col gap-[20px] lg:flex-row lg:gap-[47px]">
                            {secondList.map((item, index) => (
                                <Link href={item.url} passHref key={item.id}>
                                    <li className="text-[14px] sm:text-[16px] leading-[146%] font-normal hover:underline">
                                        {item.title}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="w-full bg-[#626F63] opacity-60" />
                <div className="pt-[30px] sm:pt-[20px] lg:pt-[40px] xl:pt-[41px]"></div>
                <div className="flex items-center lg:gap-[60px] justify-between">
                    <div className="4xl:w-[1172px]">
                        <h2 className="text-[#C1C4C0] w-[80%] mx-auto lg:mx-0 text-center lg:text-left text-[14px] lg:text-[16px] leading-[146%] font-normal">
                            Sed ut perspiciatis undmnis iste natus error sit
                            voluptatem accu santium dolore sed ut udantiuy
                            totam. Sed ut perspiciatis undmnis iste natus error
                            sit voluptatem accu santium dolore sed ut.
                        </h2>
                    </div>
                    <div>
                        <ul className="lg:flex flex-row hidden lg:gap-[32px]">
                            {socialICon.map(({ id, Icon, url }) => (
                                <Link href={url} passHref key={id}>
                                    <li
                                        onMouseOver={() => {
                                            mouseOver(id), setIndex(id);
                                        }}
                                        onMouseLeave={() => {
                                            mouseLeave(id), setIndex(id);
                                        }}
                                        className="flex cursor-pointer"
                                    >
                                        <Icon
                                            width="48"
                                            height="48"
                                            stroke={`${
                                                id === getIndex &&
                                                iconColor === true
                                                    ? "#18BA33"
                                                    : "#fff"
                                            }`}
                                            color={`${
                                                id === getIndex &&
                                                iconColor === true
                                                    ? "#18BA33"
                                                    : "#031B07"
                                            }`}
                                            className="w-[24px] h-[24px] sm:w-[48px] sm:h-[48px]"
                                        />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
