import classNames from "classnames";
import Link from "next/link";
import React from "react";

const data = [
  {
    type: "/images/fiver-icon.svg",
    title: "Get direct customer feedback, avoid negative reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus it semper gravida ultrices sit est, facilisis. Orci pulvin rem ipsum dolor siar .",
    img: "/section/first.png",
  },
  {
    type: "/images/upwork-icon.svg",
    title: "Get direct customer feedback, avoid negative reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscin elit. Purus semper gravida ultrices sit est, facilisis. Orci pulvin rem ipsum dolor siar .",
    img: "/section/second.png",
  },
];

const MoreReview = () => {
  return (
    <div className="4xl:px-[240px] 3xl:px-[220px] 2xl:px-[120px] xl:px-[80px] lg:px-[70px] sm:px-[40px] px-[16px] mt-[30px] sm:mt-[80px] 2xl:mt-[140px] text-center">
      <div className="">
        <h3 className=" font-semibold text-[20px] leading-[25px] sm:text-[24px] sm:leading-[30px]  w-[300px] mx-auto sm:w-[390px] lg:text-[40px] lg:leading-[48px] lg:w-[600px] 2xl:text-[56px] 2xl:leading-[67.2px] 2xl:w-[920px]">
          GoodReviews makes it easy to get more review
        </h3>
        <p className="text-[#334535] mt-[10px] font-normal text-[14px] leading-[20.44px]  w-[300px] mx-auto sm:w-[100%] sm:mt-[16px] lg:text-[16px] lg:leading-[23.36px] lg:mt-[20px]">
          Deliver SMS and Email review requests that engage customers
        </p>
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[80px] mt-[80px] text-left">
        {data.map((itema: any, index: number) => (
          <div
            key={index}
            className={classNames(
              "flex flex-col  3xl:gap-[125px] 2xl:gap-[90px] items-center justify-center gap-[40px] lg:gap-[120px] ",
              index === 1 ? "lg:flex-row-reverse " : "lg:flex-row"
            )}
          >
            <img
              src={itema.img}
              alt=""
              className="3xl:w-[657px] object-contain  2xl:w-[550px] lg:w-[445px] lg:h-[481px] md:w-[332px] md:h-[345px] 2xl:h-[710px] sm:w-[320px] xs:w-[203px] w-[100%]"
            />
            <div className="3xl:w-[658px] 2xl:w-[518px] xl:w-[470px] w-[100%] xs:w-[300px] sm:w-[420px] md:w-[479px] text-center lg:text-left">
              <img src={itema.type} alt="" className="mx-auto lg:mx-0" />
              <h3 className="font-medium sm:font-semibold 2xl:text-[48px] md:text-[24px] md:leading-[33px] 2xl:leading-[57.6px] 2xl:mt-[40px] mt-[24px] lg:text-[32px] lg:leading-[38px] text-[20px] leading-[27px] sm:text-[24px] sm:leading-[30px]">
                {itema.title}
              </h3>
              <p className="text-[#334535] text-[16px] font-normal leading-[23.36px] mt-[20px]">
                {itema.description}
              </p>
              <Link href="/signup">
                <button className="w-[180px] h-[48px] hover:bg-[rgb(24,186,51,.1)] transit rounded-[10px] text-primary text-[16px] font-normal leading-[23.36px] mt-[40px] border border-primary">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreReview;
