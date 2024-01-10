import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import Logout from "../CustomIcons/Logout";
import MailIcon from "../CustomIcons/MailIcon";
import PhoneIcon from "../CustomIcons/PhoneIcon";

const PersonalInfo = ({ userData }: any) => {
  const router = useRouter();
  const personalInfo = [
    {
      id: 1,
      title: userData && userData.email,
      Icon: MailIcon,
    },
    {
      id: 2,
      title: userData && userData.phone ? userData.phone : "-",
      Icon: PhoneIcon,
    },
    {
      id: 3,
      title: "Log Out",
      Icon: Logout,
    },
  ];
  return (
    <div className="w-[100%] sm:w-[50%]">
      <h1 className="text-[24px] xl:text-[32px] pb-[10px] text-[#031B07] font-semibold leading-[137%] border-b border-b-[#E6E9EF]">
        Personal Information
      </h1>
      <div className="flex flex-col gap-[22px]  sm:gap-[20px] mt-[30px]">
        {personalInfo.map(({ title, id, Icon }) => (
          <div
            key={id}
            onClick={() => {
              if (title === "Log Out") {
                window.localStorage.clear();
                router.push("/logout");
              }
            }}
            className={classNames(
              title === "Log Out" && "cursor-pointer",
              "flex gap-[16px] items-center text-[16px] text-[#3C403D] font-normal leading-[140%]"
            )}
          >
            <Icon width={19} height={19} stroke={"#0F172A"} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
