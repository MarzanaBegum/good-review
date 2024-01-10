/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { api } from "../../../api";
import { useQuery } from "react-query";
import dynamic from "next/dynamic";

const ResendEmailButton = dynamic(
  () => import("../../../components/Signup/ResendEmailButton"),
  { ssr: false }
);

const ResendEmailPage = () => {
  const router = useRouter();
  const { email } = router.query;

  const { data } = useQuery(
    ["check-user"],
    () => api.get(`/user?email=${email}`),
    {
      select: (res) => res.data,
      enabled: !!email,
      onSuccess: (data) => {
        if (data.verified === true) {
          router.push("/signin");
        }
      },
    }
  );
  return (
    <div className="w-[100%] h-screen relative flex items-center justify-center">
      <div className="w-[50%] relative h-[100%] hidden xl:flex">
        <img
          src="/images/signup-img.svg"
          alt="image"
          className="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
        />
      </div>
      <div className="w-[100%] xl:w-[50%]">
        <div className="pb-[40px] pt-[30px] 2xl:py-[0px] px-[16px] sm:px-[70px] md:px-[114px] lg:px-[242px] xl:px-[30px] 2xl:pl-[72px] 2xl:pr-[120px] 3xl:px-[150px] 4xl:px-[210px]">
          <h2 className="text-[26px] mb-[16px] leading-[146%] text-center font-semibold text-[#031B07]">
            Check your email & click the link to verify your email.
          </h2>
          <h3 className="text-[16px] leading-[146%] text-center font-normal text-[#667085]">
            If you didn’t recieve the message in your inbox,click the below
            button to resend verification email to verify your account.
          </h3>
          <ResendEmailButton />
        </div>
      </div>
    </div>
  );
};
export default ResendEmailPage;
