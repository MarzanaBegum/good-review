/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import DashboardLayout from "../../../components/Shared/DashboardLayout";
import { useRouter } from "next/router";
import { services } from "../../../utils/const";
import useServiceData from "../../../hooks/useServiceData";

function ServicesPage() {
  const router = useRouter();
  const { serviceData, updateServiceData, setServiceData } = useServiceData();

  // const handleAddOrder = () => {
  //   updateServiceData("reviews", [...serviceData.reviews, data]);
  //   // updateServiceData("serviceType", "fiver");
  // }
  const handleServiceClick = async (type: string) => {
    updateServiceData("serviceType", type);
    await router.push({
      pathname: "/dashboard/services/select-review",
      query: { type: type },
    });
  };
  useEffect(() => {
    localStorage.removeItem("order-data");
  }, [router.pathname]);
  return (
    <DashboardLayout>
      <div className="w-[335px] sm:w-[560px] md:w-[648px] lg:w-[649px] xl:w-[789px] 2xl:w-[909px] 3xl:w-[1321px] mx-auto">
        <h2 className="text-[16px] xl:text-[20px] 4xl:text-[32px] 4xl:leading-[137%] leading-[140%] text-[#031B07] font-medium pt-[40px] sm:pt-[60px] 2xl:pt-[80px] pb-[24.35px] sm:pb-[30px] xl:pb-[40px]">
          Select a service
        </h2>
        <div className="flex flex-col items-center gap-[32px] sm:gap-[40.17px] md:gap-[40.18px] lg:gap-[40px] xl:gap-[60px] 3xl:gap-[110px] sm:flex-row">
          {services.map((item: any, index: any) => (
            <div key={index}>
              {item.type === "or" ? (
                <h2 className="text-[14px] xl:text-[16px] leading-[140%] text-[#626F63] font-normal">
                  OR
                </h2>
              ) : (
                <div
                  onClick={() => handleServiceClick(item.type)}
                  className="bg-[#FFFFFF] w-[335px] h-[147px] py-[41px] sm:w-[224px] sm:h-[158px] sm:py-[58.74px] md:w-[269px] md:h-[190px] md:py-[70.63px] lg:w-[270px] xl:w-[320px] xl:h-[226px] xl:py-[84.02px] 2xl:w-[380px] 2xl:h-[270px] 2xl:py-[100.38px] 3xl:py-[139.41px] 3xl:w-[530px] 3xl:h-[375px] rounded-[10px] cursor-pointer hover:border-b-2 hover:border-primary hover:shadow-[0_18px_20px_-2px_rgb(24,186,51,.1)] transition-all duration-400"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt="fiverr"
                      className="w-[208px] h-[64.26px] sm:w-[136px] sm:h-[40px] md:w-[163px] md:h-[48px] lg:w-[169.07px] lg:h-[57.46px] xl:w-[194px] xl:h-[57px] 2xl:w-[230.02px] 2xl:h-[68.96px] 3xl:w-[264.53px] 3xl:h-[79.3px] mx-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pt-[12.98px] sm:pt-[30px] xl:pt-[40px] pb-[20px]">
          <h2 className="text-[16px] leading-[140%] text-[#626F63] font-normal">
            Are you a client looking for the perfect match for your project?{" "}
            <span className="text-[#18BA33] cursor-pointer">Click here</span>
          </h2>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ServicesPage;
