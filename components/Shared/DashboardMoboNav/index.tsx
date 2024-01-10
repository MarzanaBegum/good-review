/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("react-modern-drawer"), {
    ssr: false,
});

import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import classNames from "classnames";
import { sideNavData } from "../../../utils/const";
import LogoutIcon from "../../CustomIcons/LogoutIcon";
import { isRouteActive } from "../../SidebarItem";

const MobileDrawer = ({ toggleDrawer, isOpen }: any) => {
    const router = useRouter();

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="!w-[100%] xs:!w-[295px] sm:!w-[360px] md:!w-[384px]"
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <div className="w-[100%] h-screen modal-scroll">
                    <div className="px-[20px] py-[34px]">
                        <div className="flex items-center justify-between">
                            <img
                                onClick={toggleDrawer}
                                src="/icons/x-icon.svg"
                                alt="X "
                                className="w-[24px] h-[24px] cursor-pointer hover:rotate-180"
                            />
                            <Link href="/dashboard">
                                <img
                                    src="/icons/logo-green.svg"
                                    alt="logo"
                                    className="w-[135px] h-[30px] cursor-pointer"
                                />
                            </Link>
                        </div>
                        <div className="pt-[56px]"></div>
                        <button
                            onClick={() => router.push("/dashboard/services")}
                            className="flex items-center justify-center gap-[10px] cursor-pointer rounded-[7px] w-[215px] h-[48px] bg-primary hover:bg-[#109126] transition-all duration-700 ease-in-out text-white"
                        >
                            <img src="/images/new-client.svg" alt="icon" />
                            Get a new client
                        </button>
                        <div className=" pt-[40px] flex flex-col gap-[20px]">
                            {sideNavData.map(({ title, url, Icon }, index) => (
                                <Link
                                    href={url}
                                    key={index}
                                    className={classNames(
                                        " px-[23px] flex gap-[18px] items-center cursor-pointer text-[#626F63] hover:text-[#18BA33] font-normal 3xl:text-[18px] 3xl:leading-[28px] xl:text-[16px] xl:leading-[22px] text-[14px] leading-[19.6px] py-[10px]",
                                        isRouteActive(url, router.asPath)
                                            ? "bg-[#E8FCEC]  rounded-[10px] text-[#18BA33]"
                                            : ""
                                    )}
                                >
                                    <Icon
                                        width={18}
                                        height={18}
                                        stroke={
                                            isRouteActive(url, router.asPath)
                                                ? "#18BA33"
                                                : "#626F63"
                                        }
                                    />
                                    {title}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-[20px] pb-[40px]">
                            <Link
                                onClick={() => {
                                    window.localStorage.clear();
                                }}
                                href="/logout"
                            >
                                <div
                                    className={classNames(
                                        "px-[23px] py-[10px] flex gap-[18px] items-center cursor-pointer text-[#031B07] font-semibold 3xl:text-[18px] 3xl:leading-[28px] xl:text-[16px] xl:leading-[22px] text-[14px] leading-[19.6px]"
                                    )}
                                >
                                    <LogoutIcon
                                        width={18}
                                        height={18}
                                        stroke={"#031B07"}
                                    />
                                    Logout
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default MobileDrawer;
