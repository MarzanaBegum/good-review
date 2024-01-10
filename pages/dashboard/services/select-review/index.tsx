/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SelectClientReview from "../../../../components/Services/SelectClientReview";
import DashboardLayout from "../../../../components/Shared/DashboardLayout";
import { useRouter } from "next/router";
import { servicedata } from "../../../../state";
import { useAtom } from "jotai";
import useServiceData from "../../../../hooks/useServiceData";
import { toast } from "react-toastify";
import BackArrowIcons from "../../../../components/CustomIcons/BackArrowIcons";

function SelectReview() {
    const router = useRouter();
    const { serviceData, updateServiceData } = useServiceData();
    const [mouseEnter, setMouseEnter] = useState(false);
    // const [mouseLeave, setMouseLeave] = useState(false);

    useEffect(() => {
        if (serviceData && serviceData.serviceType === "") {
            router.push("/dashboard/services")
        }
    }, [serviceData.serviceType]);
    return (
        <DashboardLayout>
            <button
                onClick={() => router.back()}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                className="hidden w-[109.5px] h-[45px] sm:my-[30px] md:mt-[32px] md:mb-[30px] lg:my-[40px] xl:my-[50px] gap-[18px] px-[20px] py-[14px] text-[18px] text-[#626F63] font-medium cursor-pointer rounded-[8px] border border-[#C5C7D0] sm:flex items-center justify-center hover:bg-primary hover:text-white"
            >
                <BackArrowIcons stroke={mouseEnter === false ? "#676879" : "white"} />
                Back
            </button>
            <div className="sm:hidden cursor-pointer py-[26px]">
                <img
                    onClick={() => router.push("/dashboard/services")}
                    src="/icons/back-arrow.svg"
                    alt="icon"
                    className="w-[17px] h-[17px]"
                />
            </div>
            <SelectClientReview />
        </DashboardLayout>
    );
}

export default SelectReview;
