/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import pricingQuery from "../../api-query/usePricingQuery";
import useServiceData from "../../hooks/useServiceData";
import uniqueRandom from "unique-random";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";
import classNames from "classnames";

const SelectClientReview = () => {
  const router = useRouter();
  const [user, setUser] = useAtom(USER_STATE);
  const serviceType = router.query.type;
  const { serviceData, updateServiceData, setServiceData } = useServiceData();
  const [selectedPackage, setSelectedPackage] = useState("");
  const random = uniqueRandom(1, 1000);
  const getRandomNumber = random();

  const ReviewData = {
    userId: user && user._id,
    status: "pending",
    serviceType: serviceData && serviceData.serviceType,
    gigUrl: "",
    gigPrice: 0,
    rating: 0,
    // customReview: "",
    privateFeedback: false,
    includeVideoReview: false,
    // buyerCountry: "",
    // buyerType: "",
  };

  const { data, isLoading, refetch } = pricingQuery(`${serviceType}`);
  console.log(data, "data****");

  const increaseReviewHandler = (e: any) => {
    updateServiceData("reviews", [
      ...serviceData.reviews,
      {
        ...ReviewData,
        packageType: e.toLowerCase(),
        reviewCode: randomHndler(getRandomNumber),
      },
    ]);
  };
  const decreaseReviewHandler = (e: any) => {
    setSelectedPackage(e.packageType.toLowerCase());
    const allReviews = serviceData.reviews;
    const filterReview = allReviews.filter(
      (item: any) =>
        item.packageType.toLowerCase() === e.packageType.toLowerCase()
    );
    const removedItem: any = filterReview.slice(-1)[0];
    if (removedItem !== undefined) {
      const preReviewFilter = allReviews.filter(
        (review: any) => review.reviewCode !== removedItem.reviewCode
      );
      updateServiceData("reviews", preReviewFilter);
    }
  };
  const simpleClientReview =
    serviceData &&
    serviceData?.reviews?.filter(
      (item: any) => item.packageType.toLowerCase() === "simple client"
    );
  const activeClientReview =
    serviceData &&
    serviceData?.reviews?.filter(
      (item: any) => item.packageType.toLowerCase() === "active client"
    );
  const customClientReview =
    serviceData &&
    serviceData?.reviews?.filter(
      (item: any) => item.packageType.toLowerCase() === "custom client"
    );

  console.log(data?.length, "select review data..");
  return (
    <div className="w-[100%] 2xl:w-[1015px] 3xl:w-[1155px] 4xl:w-[1385px]">
      <h1 className="text-[24px] xl:text-[32px] leading-[137%] text-[#17B532] font-semibold">
        {router.query.type === "fiverr" ? "Fiverr" : "Upwork"}
      </h1>

      {data && data?.length > 0 ? <div>
        <div className="pt-[10px] xl:pt-[16px]"></div>
        <h2 className="text-[16px] lg:text-[20px] leading-[140%] text-[#031B07] font-medium">
          Select your Client Review
        </h2>
        <div className="pt-[20px]"></div>
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[20px] xl:gap-[30px]">
          {data?.map((item: any) => (
            <div key={item._id} className="p-[20px] w-[100%] bg-[#FFFFFF] hover:outline hover:outline-1 hover:outline-primary  transition-all duration-400 rounded-[10px]">
              <div className="flex items-center gap-[16px] 3xl:gap-[20px] 4xl:gap-[16px]">
                <img
                  src={item.icon ? item.icon : "/icons/package-icon.svg"}
                  alt="icon"
                  className="w-[46px] h-[46px] 3xl:w-[47px] 3xl:h-[47px]"
                />
                <h2 className="text-[14px] xl:text-[16px] leading-[19px] text-[#031B07] font-semibold first-letter:uppercase">
                  {item.packageType}
                </h2>
              </div>
              <div className="pt-[20px]"></div>
              <p className="text-[14px] leading-[140%] text-[#626F63] font-normal">
                {item.packageDescription}
              </p>
              <div className="pt-[10px] sm:pt-[20px] md:pt-[30px] xl:pt-[40px] 2xl:pt-[45px]"></div>
              <h3 className="text-[16px] xl:text-[20px] leading-[140%] text-[#0C5A19] font-medium">
                ${item.price}{" "}
                <span className="text-[16px] text-[#626F63]">/Per order</span>
              </h3>
              <div className="pt-[20px]"></div>
              <div className="max-w-[179px] flex justify-around items-center h-[52px] bg-[#FAFAFA] rounded-full">
                <img
                  onClick={() => decreaseReviewHandler(item)}
                  src="/icons/minus.svg"
                  alt=""
                  className="w-[30px] h-[30px] cursor-pointer"
                />
                <div className="w-[87px] h-[38px] xl:h-[40px] text-[14px] 2xl:text-[16px] font-normal leading-[140%] text-[#031B07] flex items-center justify-center bg-[#FFFFFF] rounded-full">
                  {item.packageType.toLowerCase() === "simple client" &&
                    simpleClientReview?.length}
                  {item.packageType.toLowerCase() === "custom client" &&
                    customClientReview?.length}
                  {item.packageType.toLowerCase() === "active client" &&
                    activeClientReview?.length}
                </div>
                <img
                  onClick={() => increaseReviewHandler(item.packageType)}
                  src="/icons/plus.svg"
                  alt=""
                  className="w-[30px] h-[30px] cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="py-[30px] sm:py-[40px] flex justify-end">
          <button
            onClick={() => router.push("/dashboard/services/custom-review")}
            disabled={
              serviceData?.reviews && serviceData?.reviews?.length === 0
                ? true
                : false
            }
            className={classNames(
              serviceData?.reviews && serviceData?.reviews?.length === 0
                ? "disabled:transform-none disabled:transition-none disabled:bg-[#CCCED6] disabled:cursor-not-allowed disabled:text-white  "
                : "  transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110  bg-primary cursor-pointer text-white ",
              "w-[100%] h-[55px] sm:w-[224px] sm:h-[53px] lg:w-[300px] text-[18px] font-medium text-[#FFFFFF] bg-[#17B532] cursor-pointer rounded-[10px]"
            )}
          >
            Next
          </button>
        </div>
      </div> : <p className="text-[#031B07] font-normal text-[16px] leading-[22.4px]">No packages available under {serviceType} services !</p>}
    </div>
  );
};

export default SelectClientReview;

function randomHndler(randomNumber: any) {
  const number = randomNumber && randomNumber.toString();
  if (number && number.length === 1) {
    return `000${number}`;
  } else if (number && number.length === 2) {
    return `00${number}`;
  } else if (number && number.length === 3) {
    return `0${number}`;
  } else {
    return number;
  }
}
