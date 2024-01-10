/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { dropdownMenuData } from "./../../../utils/const";
import classNames from "classnames";
import { useDetectClickOutside } from "react-detect-click-outside";
import NotificationCard from "../../NotificationCard";
import MobileDrawer from "../DashboardMoboNav";
import { useRouter } from "next/router";
import useNotifications from "../../../api-query/useNotifications";
import { useAtom } from "jotai";
import { USER_STATE } from "../../../state";
import Link from "next/link";
import { api } from "../../../api";

const DashboardNav = () => {
  const router = useRouter();
  const [user] = useAtom(USER_STATE);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const ref = useDetectClickOutside({
    onTriggered: () => setOpenDropdown(false),
  });
  const Notificationref = useDetectClickOutside({
    onTriggered: () => setOpenNotification(false),
  });

  const { data: notifyData, refetch } = useNotifications();
  const notSeenNotification = notifyData?.filter((v) => !v.isSeen);

  // const handleSeenNotification = async () => {
  //     const notifyArr = notSeenNotification?.map((v) => v._id);

  //     try {
  //         if (notifyArr) {
  //             // await api.put("/notify/notification/all", { arr: notifyArr });
  //         }

  //         await refetch();
  //     } catch (error) {}
  // };

  return (
    <div className="fixed w-full z-[10] bg-white  lg:px-[40px] px-[16px] sm:px-[20px]">
      <div className="h-[44px]  sm:h-[86px] lg:h-[96px] flex items-center justify-between">
        <img
          onClick={() => router.push("/dashboard")}
          src="/icons/logo-green.svg"
          alt="logo"
          className="w-[135px] h-[30px] hidden lg:block cursor-pointer"
        />
        <img
          onClick={toggleDrawer}
          src="/images/hamburg.svg"
          alt=""
          className="w-[24px] h-[24px] lg:hidden"
        />

        <div className="flex gap-[37px] items-center">
          <button
            onClick={() => router.push("/dashboard/services")}
            className="rounded-[7px] w-[139px] h-[40px] bg-primary hover:bg-[#109126] transition-all duration-700 ease-in-out text-white hidden lg:block"
          >
            Get a new client
          </button>
          <div ref={Notificationref} className="relative ">
            <div
              onClick={async () => {
                setOpenNotification(!openNotification);
                // await handleSeenNotification();
              }}
              className=""
            >
              <img
                src="/icons/notification-icon.svg"
                alt="notification"
                className="w-[30px] h-[30px] cursor-pointer "
              />
              <div className="w-[12px] h-[12px] rounded-full bg-[#128725] absolute top-[4px] right-0 text-white text-[8px] font-medium leading-[9.6px] flex items-center justify-center ring-2 ring-[white] cursor-pointer ">
                {notSeenNotification?.length || 0}
              </div>
            </div>
            {openNotification && (
              <div
                style={{
                  boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.07)",
                }}
                className="absolute w-[100vw] top-[37px] right-[-102px] sm:w-[390px] xl:w-[458px] h-[100vh] sm:h-auto bg-white sm:top-[68px] sm:right-0 sm:rounded-[10px]"
              >
                <NotificationCard
                  setOpenNotification={setOpenNotification}
                  openNotification={openNotification}
                  data={notifyData}
                />
              </div>
            )}
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              src={user && user?.profile ? user?.profile : "/images/profile.png"}
              alt="Profile Photo"
              className="w-[30px] h-[30px] rounded-full"
            />
            <div
              ref={ref}

              className="flex gap-[15px] items-center "
            >
              <h2 className="font-semibold text-[16px] leading-[25.6px] hidden sm:block ">
                {user && user?.firstName}
              </h2>
              <div className="relative">
                <img
                  onClick={() => setOpenDropdown(!openDropdown)}
                  src="/icons/dropdown-array.svg"
                  alt=""
                  className={classNames(
                    "w-[10px] h-[6px] cursor-pointer",
                    openDropdown ? "rotate-180" : ""
                  )}
                />
                {openDropdown && (
                  <div
                    style={{
                      boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.07)",
                    }}
                    className="w-[180px] h-auto bg-white absolute sm:top-[44px] top-[25px] right-0 rounded-[10px_10px_0px_0px]"
                  >
                    <div className="px-[18px] py-[14px] flex flex-col gap-[24px]">
                      {dropdownMenuData.map(({ title, url, Icon }, index) => (
                        <Link
                          onClick={() => {
                            if (url === "/logout") {
                              window.localStorage.clear();
                            }
                          }}
                          href={url}
                          key={index}
                        >
                          <div
                            className={classNames(
                              "flex gap-[13px] items-center  text-[14px] font-normal text-[#626F63] relative",
                              isRouteActive(url, router.asPath)
                                ? "text-primary"
                                : ""
                            )}
                          >
                            {index === 0 && (
                              <div className="w-[180px] h-[1px] bg-[#C1C4C0] opacity-50 absolute bottom-[-12px] left-[-18px]"></div>
                            )}
                            <Icon
                              width={15}
                              height={16}
                              stroke={`${isRouteActive(url, router.asPath)
                                ? "#18BA33"
                                : "#626F63"
                                }`}
                            />
                            {title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
};

export function isRouteActive(url: string, path: string) {
  return url === "/dashboard" ? path.includes(url) : path === url;
}
export default DashboardNav;
