import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { sideNavData } from "../../utils/const";
import { useRouter } from "next/router";
import LogoutIcon from "../CustomIcons/LogoutIcon";

const SidebarItem = () => {
    const router = useRouter();
    return (
        <>
            <div className="px-[20px] pt-[40px] flex flex-col gap-[20px]">
                {sideNavData.map(({ title, url, Icon }, index) => (
                    <Link
                        href={url}
                        key={index}
                        className={classNames(
                            " px-[23px] flex gap-[18px] items-center cursor-pointer text-[#626F63] font-normal 3xl:text-[18px] 3xl:leading-[28px] xl:text-[16px] xl:leading-[22px] text-[14px] leading-[19.6px] py-[10px]",
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
            <div className="pt-[40px] pb-[40px] px-[20px]">
                <Link
                    onClick={() => {
                        window.localStorage.clear();
                    }}
                    href={"/logout"}
                >
                    <div
                        className={classNames(
                            "px-[23px] py-[10px] flex gap-[18px] items-center cursor-pointer text-[#031B07] font-semibold 3xl:text-[18px] 3xl:leading-[28px] xl:text-[16px] xl:leading-[22px] text-[14px] leading-[19.6px]"
                        )}
                    >
                        <LogoutIcon width={18} height={18} stroke={"#031B07"} />
                        Logout
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SidebarItem;

export function isRouteActive(url: string, path: string) {
    return url !== "/dashboard" ? path.includes(url) : path === url;
}
