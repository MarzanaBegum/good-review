import React from "react";
import AddUserAvater from "./../CustomIcons/AddUserAvater";
import { useRouter } from "next/router";
import reviewPricingQuery from "../../api-query/reviewAndPricingQuery";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";

const overviewData = [
  {
    title: "Active Package",
    total: 10,
    icon: "/icons/avater.svg",
  },
  {
    title: "Active Orders",
    total: 18,
    icon: "/icons/order-icon.svg",
  },
  // {
  //     title: "Completed Order",
  //     total: 97,
  //     icon: "/icons/completed-order.svg",
  // },
];
const Overview = () => {
  const router = useRouter();
  const [user] = useAtom(USER_STATE);

  const { data, isLoading } = reviewPricingQuery(user?._id);
  const activeOrders = data
    ? data.reviews.filter((item: any) => item.status !== "cancelled")
    : [];
  return (
    <div className="pt-4 w-[100%]">
      <h2 className="text-[#031B07] xl:font-semibold xl:text-[16px] xl:leading-[19.36px] text-[14px] font-normal">
        Overview
      </h2>

      <div className="mt-[20px] gap-[20px] lg:gap-[30px] grid grid-cols-2 sm:grid-cols-3">
        {overviewData.map((item: any, index: number) => (
          <div
            style={{
              boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.07)",
            }}
            key={index}
            className=" rounded-[10px] bg-[white] 3xl:px-[40px] lg:px-[20px] 2xl:px-[30px] px-[16px] flex items-center  justify-between lg:py-[44.5px] xl:py-[38.5px] py-[10px]"
          >
            <div className="flex flex-col">
              <h2 className="font-semibold xl:text-[32px] xl:leading-[43.84px] text-[24px] leading-[33px] text-[#031B07]">
                {item.title === "Active Package"
                  ? data
                    ? data.pricings.length
                    : 0
                  : item.title === "Active Orders" && activeOrders
                    ? activeOrders.length
                    : 0}
              </h2>
              <p className="font-normal text-[#626F63] xl:text-[16px] xl:leading-[22px] text-[12px] md:text-[14px] leading-[19px] mt-[8px]">
                {item.title}
              </p>
            </div>

            <div>
              <img
                src={item.icon}
                alt=""
                className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] 2xl:w-[72px] 2xl:h-[72px]"
              />
            </div>
          </div>
        ))}
        <div
          onClick={() => router.push("/dashboard/services")}
          style={{
            boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.07)",
          }}
          className=" rounded-[10px] bg-[#18BA33] col-span-2 sm:col-span-1"
        >
          <div className="flex sm:flex-col items-center gap-[10px] sm:gap-[20px] lg:gap-[18px] xl:gap-[16px] justify-center py-[12px] sm:py-[20px] lg:py-[28px] cursor-pointer ">
            <img
              src="/images/new-client.svg"
              alt=""
              className="w-[25px] h-[24px] sm:w-[42px] sm:h-[40px] lg:w-[59px] lg:h-[55px]"
            />
            <p className="text-white font-medium text-[16px] leading-[22px]">
              Get a new client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
