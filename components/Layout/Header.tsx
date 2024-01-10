import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useDetectClickOutside } from "react-detect-click-outside";

const navItem = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "How it works",
    url: "/how-it-works",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
];

const Header = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setMenu(false) });
  return (
    <div className="w-[100%] lg:h-[85px] sm:h-[70px] h-[47px] bg-[#FFFFFF] flex items-center flex-row-reverse sm:flex-row  justify-between 4xl:px-[240px] 3xl:px-[220px] 2xl:px-[120px] xl:px-[80px] lg:px-[70px] sm:px-[40px] px-[16px]  text-[16px] font-normal lg:font-semibold leading-[24.34px]">
      <div>
        <img
          onClick={() => router.push("/")}
          src="/images/logo.svg"
          alt="logo"
          className="w-[188px] h-[41px] hidden lg:block cursor-pointer"
        />
        <div ref={ref} className="relative">
          <img
            onClick={() => setMenu(!menu)}
            src="/images/hamburg.svg"
            alt="logo"
            className="w-[22px] h-[18px] lg:hidden cursor-pointer"
          />
          {menu && (
            <div
              style={{
                boxShadow: "0px 4px 22px rgba(0, 0, 0, 0.1)",
              }}
              className="w-[135px] h-auto bg-[#FFFFFF] absolute top-[32px] sm:top-[45px] rounded-[0px_0px_8px_8px] right-0 sm:left-0 z-50 lg:hidden"
            >
              <div className="px-[16px] py-[16px] text-[16px] font-semibold leading-[24.34px]  flex flex-col">
                {navItem.map((item: any, index: number) => (
                  <Link
                    href={item.url}
                    className={classNames(
                      "mb-[20px] last:mb-0 hover:text-primary transition-all duration-400 ease-in-out",
                      router.asPath === item.url
                        ? "text-primary"
                        : "text-[#3C403D]"
                    )}
                    key={index}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <h2
                onClick={() => router.push("/signin")}
                className={classNames(
                  "px-[16px] pb-[16px] hover:text-primary transition duration-700 ease-in-out sm:hidden text-[16px] font-semibold leading-[24.34px]",
                  router.asPath === "/signin" ? "text-primary" : "text-[#3C403D]"
                )}
              >
                Sign in
              </h2>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className=" lg:gap-[48px]  hidden lg:flex">
          {navItem.map((item: any, index: number) => (
            <Link
              href={item.url}
              key={index}
              className={classNames(
                "hover:text-primary hover:underline hover:decoration-[#18BA33] transition-all duration-400 ease-in-out",
                router.asPath === item.url ? "text-primary underline decoration-[#18BA33]" : "text-[#3C403D]"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <img
          onClick={() => router.push("/")}
          src="/images/subtract.svg"
          alt="brand logo"
          className="sm:w-[39px] sm:h-[36px] w-[30px] h-[30px] lg:hidden cursor-pointer"
        />
      </div>
      <div className="hidden lg:gap-[32px] gap-[24px] sm:flex">
        <button
          onClick={() => router.push("/signin")}
          className="text-[#3C403D] hover:text-primary transition duration-700 ease-in-out"
        >
          Sign in
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="rounded-[10px] hover:bg-[#128725] bg-primary transition-all duration-700 ease-in-out text-white font-normal px-[16.5px] py-[12.5px]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
