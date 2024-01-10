/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";

const ForgotPassword = () => {
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
          <h2 className="text-[32px] mb-[16px] sm:text-[40px] text-center font-semibold text-[#031B07]">
            Forgot Password
          </h2>
          <h3 className="text-[16px] mb-[24px] sm:mb-[40px] leading-[146%] text-center font-normal text-[#667085]">
            Secure your business with GoodReviews
          </h3>
          <ForgotPasswordForm />
          <div className="pt-4"></div>
          <h2 className="text-[#3B415A] text-[16px] text-center font-normal leading-[24px]">
            Back to{" "}
            <Link href="/signin">
              <span className="cursor-pointer text-[#17B532] underline decoration-[#17B532]">Sign In</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
