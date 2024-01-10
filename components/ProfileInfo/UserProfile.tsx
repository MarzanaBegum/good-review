import Link from "next/link";
import React, { useState } from "react";
import BillingAddress from "./BillingAddress";
import PersonalInfo from "./PersonalInfo";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";
import { api } from "../../api";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";

const UserProfile = () => {
  const [user, setUser] = useAtom(USER_STATE);
  const [isLoadng, setIsLoading] = useState(false);

  const { data, refetch } = useQuery(
    ["Get user"],
    () => api.get(`/user/${user?._id}`),
    {
      select: (res) => res.data,
      enabled: !!user,
    }
  );

  const handleUploadProfile = async (e: File) => {
    const formData = new FormData();
    formData.append("file", e);
    // console.log(e, "e...");
    setIsLoading(true);

    const { data } = await api.post("/bucket-store/upload", formData);
    if (data && user !== undefined) {
      localStorage.setItem("profile-key", data.key);
      const { data: userData } = await api.put(`/user/${user._id}`, {
        profile: data.location,
      });
      refetch();
      setIsLoading(false);
      setUser({ ...user, profile: data.location });
    }
  };
  return (
    <div className="py-[30px] px-[40px] sm:px-[30px] sm:py-[60px] md:px-[40px] 2xl:p-[60px] 4xl:py-[60px] 4xl:px-[80px] bg-[#FFFFFF] rounded-[10px] w-[100%]">
      <div className="flex justify-center">
        <div className="relative">
          <img
            src={data && data?.profile ? data.profile : "/images/profile.png"}
            alt=""
            className="w-[127px] h-[127px]"
          />
          <div className="absolute left-[94px] bottom-[2px]">
            {isLoadng ? (
              <div className="flex items-center justify-center bg-white w-[30px] h-[30px] rounded-full">
                <LoadingAnimation color="#18BA33" />
              </div>
            ) : (
              <label htmlFor="upload">
                <input
                  type="file"
                  id="upload"
                  name="upload"
                  hidden
                  onChange={(e: any) => handleUploadProfile(e.target.files[0])}
                />
                <img src="/icons/edit-icon.svg" className="w-[30px] h-[30px] cursor-pointer" />
              </label>
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-[16px] mt-[30px] md:text-[20px] lg:text-[16px] xl:text-[20px] font-medium leading-[140%] text-[#031B07]">
          {data && data.firstName + " " + data.lastName}
        </h1>
        <h2 className="text-[14px] xl:text-[16px] mt-[10px] font-normal leading-[140%] text-[#031B07]">
          {data && data.email}
          {/* New York, USA */}
        </h2>
        <Link href="/dashboard/account-settings">
          <button className="w-[104px] h-[36px] mt-[20px] text-primary text-[14px] font-normal border border-[#18BA33] hover:bg-[rgb(24,186,51,.1)] duration-700 ease-in-out rounded-[10px] cursor-pointer">
            Profile Edit
          </button>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-[30px] sm:gap-[78px] pt-[30px] sm:pt-[60px] md:gap-[110px]">
        <PersonalInfo userData={data}/>
        <BillingAddress userData={data} />
      </div>
    </div>
  );
};

export default UserProfile;
