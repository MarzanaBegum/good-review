/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SelectPaymentMethod from "../../../../components/Payment/SelectPaymentMethod";
import DashboardLayout from "../../../../components/Shared/DashboardLayout";
import { useRouter } from "next/router";
import useServiceData from "../../../../hooks/useServiceData";
import BackArrowIcons from "../../../../components/CustomIcons/BackArrowIcons";

function Checkout() {
    const router = useRouter();
    const { serviceData, updateServiceData, setServiceData } = useServiceData();
    const [mouseEnter, setMouseEnter] = useState(false);
    useEffect(() => {
        if (serviceData && serviceData.reviews?.length === 0) {
            router.push("/dashboard/services/custom-review")
        }
    }, [])
    return (
        <DashboardLayout>
            <>
                <div className="sm:pt-[40px] md:pt-[30px] lg:pt-[40px] xl:pt-[50px]"></div>
                <button
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                    onClick={() => router.back()}
                    className="hidden w-[109.5px] h-[45px] text-[18px] hover:bg-primary hover:text-white text-[#626F63] font-medium cursor-pointer rounded-[8px] border border-[#C5C7D0] sm:flex items-center justify-between px-[20px] py-[8px]"
                >
                    <BackArrowIcons stroke={mouseEnter === false ? "#676879" : "white"} />
                    Back
                </button>
                <div onClick={() => router.back()} className="sm:hidden cursor-pointer py-[25px]">
                    <img
                        src="/icons/back-arrow.svg"
                        alt="icon"
                        className="w-[17px] h-[17px]"
                    />
                </div>
                <div className="sm:pt-[40px] md:pt-[30px] lg:pt-[50px]"></div>
                <SelectPaymentMethod />
            </>
        </DashboardLayout>
    );
}

export default Checkout;
