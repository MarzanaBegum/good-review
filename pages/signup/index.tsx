/* eslint-disable @next/next/no-img-element */
import React from "react";
import SignUpForm from "../../components/Signup/SignupForm";

const SignupPage = () => {
  return (
    <div className="w-[100%] h-screen relative flex items-center justify-center">
      <div className="w-[50%] relative h-[100%] hidden 2xl:flex">
        <img
          src="/images/signup-img.svg"
          alt="image"
          className="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
        />
      </div>
      <div className="w-[100%] 2xl:w-[50%] h-[100%] modal-scroll">
        <div className="pb-[40px] pt-[30px] sm:pt-[60px] md:pt-[130px] lg:pt-[150px] xl:pt-[90px] 2xl:pt-[150px] 3xl:pt-[165px] 4xl:pt-[180px] px-[16px] sm:px-[70px] md:px-[114px] lg:px-[242px] xl:px-[330px] 2xl:pl-[72px] 2xl:pr-[120px] 3xl:px-[150px] 4xl:px-[210px]">
          <h2 className="text-[32px] mb-[16px] sm:text-[40px] text-center font-semibold text-[#031B07]">
            Sign Up
          </h2>
          <h3 className="text-[16px] mb-[24px] sm:mb-[40px] leading-[146%] text-center font-normal text-[#667085]">
            Secure your business with GoodReviews
          </h3>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
