/* eslint-disable @next/next/no-img-element */
import React from "react";
import { planCompareData, planCompareHead } from "../../utils/const";

const PlanCompareTable = () => {
  return (
    <div className="hidden sm:block">
      <table className="w-full text-center">
        <thead className="capitalize bg-[#FAFAFA]">
          <tr>
            {planCompareHead.map((item, index) => (
              <th
                key={index}
                scope="col"
                className="sm:p-[20px] md:px-[40px] md:py-[20px] text-[20px] font-medium text-[#031B07]"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planCompareData?.map((item: any, index: any) => (
            <tr key={index} className="border-b text-left border-b-[#E6E9EF]">
              <th
                scope="row"
                className="sm:p-[20px] md:px-[40px] md:py-[20px] text-[#3C403D] text-[16px] font-normal"
              >
                <p className="w-[110px] md:w-[150px] md:mx-auto truncate">
                  {item.featureText}
                </p>
              </th>

              <td className="sm:p-[20px] md:px-[40px] md:py-[20px]">
                {item.simpleClient === true ? (
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
              <td className="sm:p-[20px] md:px-[40px] md:py-[20px]">
                {item.customClient === true ? (
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
              <td className="sm:p-[20px] md:px-[40px] md:py-[20px]">
                {item.activeClient === true ? (
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
  );
};

export default PlanCompareTable;
