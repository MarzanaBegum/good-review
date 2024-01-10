import React, { useState } from "react";
import ReviewDetails from "./ReviewDetails";
import ReviewType from "./ReviewType";
import { useRouter } from "next/router";
import useServiceData from "../../hooks/useServiceData";
import pricingQuery from "../../api-query/usePricingQuery";
import BackArrowIcons from "../CustomIcons/BackArrowIcons";

const CustomClients = () => {
    const router = useRouter();
    const { serviceData, updateServiceData, setServiceData } = useServiceData();
    const [reviewIndex, setReviewIndex] = useState();
    const [selectedReview, setSelectedReview] = useState(0);
    const [mouseEnter, setMouseEnter] = useState(false);

    const { data: planData, isLoading } = pricingQuery();
    const simpleClientDataArray = planData?.filter((iteam: any) => iteam.packageType.includes("simple client"));
    const activeClientDataArray = planData?.filter((iteam: any) => iteam.packageType.includes("active client"));
    const customClientDataArray = planData?.filter((iteam: any) => iteam.packageType.includes("custom client"));

    const filterSimpleArray = simpleClientDataArray && simpleClientDataArray.filter((item: any) => item.serviceType === serviceData.serviceType);
    const filterCustomArray = customClientDataArray && customClientDataArray.filter((item: any) => item.serviceType === serviceData.serviceType);
    const filterActiveArray = activeClientDataArray && activeClientDataArray.filter((item: any) => item.serviceType === serviceData.serviceType);


    return (
        <div>
            <button
                onClick={() => router.back()}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                className="h-[38px] text-[#676B68] sm:border hover:bg-primary hover:text-white sm:border-[#C5C7D0] rounded-[8px] gap-[18px] flex items-center justify-between px-[20px] 
                font-normal text-[16px] leading-[22px]"
            >
                <BackArrowIcons stroke={mouseEnter === false ? "#676879" : "white"} />
                <span className="hidden sm:block"> Back</span>
            </button>

            <div className="flex flex-col lg:flex-row gap-[30px]  mt-[50px]">
                <div className="2xl:w-[245px] xl:w-[201px] min-h-[100px] lg:w-[189px] w-[100%] bg-white rounded-[10px]">
                    <ReviewType serviceData={serviceData} setServiceData={setServiceData} updateServiceData={updateServiceData} setReviewIndex={setReviewIndex} setSelectedReview={setSelectedReview} selectedReview={selectedReview} filterSimpleArray={filterSimpleArray} filterCustomArray={filterCustomArray} filterActiveArray={filterActiveArray} />
                </div>

                {/* rigt part  */}
                <div>
                    <div className="w-[100%] lg:w-[calc(100vw_-_515px)] xl:w-[calc(100vw_-_540px)]  2xl:w-[calc(100vw_-_600px)] bg-white rounded-[10px]">
                        <ReviewDetails reviewIndex={reviewIndex} setReviewIndex={setReviewIndex} setSelectedReview={setSelectedReview} filterSimpleArray={filterSimpleArray} filterCustomArray={filterCustomArray} filterActiveArray={filterActiveArray} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomClients;
