import React, { useEffect } from "react";
import DashboardLayout from "../../../../components/Shared/DashboardLayout/index";
import CustomClients from "../../../../components/CustomClients/index";
import useServiceData from "../../../../hooks/useServiceData";
import { useRouter } from "next/router";

const CustomReviews = () => {
    const { serviceData, updateServiceData, setServiceData } = useServiceData();
    const router = useRouter();

    useEffect(() => {
        if (serviceData && serviceData.serviceType === "") {
            router.push("/dashboard/services")
        }
    }, [serviceData.serviceType]);
    return (
        <>
            <DashboardLayout>
                <div className="py-[25px] sm:py-[30px] md:py-[40px] xl:py-[50px]">
                    <CustomClients />
                </div>
            </DashboardLayout>
        </>
    );
};

export default CustomReviews;
