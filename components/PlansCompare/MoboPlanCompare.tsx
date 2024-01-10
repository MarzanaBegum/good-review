/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  planCompareMoboData,
  planMoboData,
  planMoboHead,
} from "../../utils/const";

const MoboPlansCompare = () => {
  return (
    <div className="sm:hidden">
      <div className="flex flex-col gap-[30px]">
        {planMoboData.map((item, index) => (
          <div key={index}>
            <div className="text-center">
              <div className="w-[100%] flex items-center justify-center gap-[8px]">
                <img src={item.image} alt="" className="w-[32px] h-[32px]"/>
                <h2 className="text-[14px] leading-[140%] font-normal text-[#031B07]">
                  {item.title}
                </h2>
              </div>
              <p className="w-[290px] mt-[14px] mx-auto text-[14px] leading-[140%] font-normal text-[#626F63]">
                {item.description}
              </p>
            </div>
            <table className="w-full text-left mt-[24px]">
              <thead className="capitalize bg-[#F5F6F8]">
                <tr>
                  {planMoboHead.map((item, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="p-[12px] text-[16px] font-medium text-[#031B07]"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planCompareMoboData?.map((item: any, index: any) => (
                  <tr key={index} className="text-left ">
                    <th
                      scope="row"
                      className="p-[12px] text-[#3C403D] text-[14px] font-normal"
                    >
                      <p key={index} className="w-[110px] truncate">
                        {item.features}
                      </p>
                    </th>

                    <td className="sm:p-[20px] md:px-[40px] md:py-[20px]">
                      {item.type === true ? (
                        <img
                          src="/icons/check-mark.svg"
                          alt="checkMark"
                          className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] mx-auto"
                        />
                      ) : (
                        <img
                          src="/icons/cross-mark.svg"
                          alt="crossMark"
                          className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] mx-auto"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoboPlansCompare;
