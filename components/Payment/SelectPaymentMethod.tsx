/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { selectPaymentMethoData } from "../../utils/const";
import classNames from "classnames";
import CardPaymentMethod from "./CardPaymentMethod";
import PayoneerMethod from "./PayoneerMethod";

function SelectPaymentMethod() {
    const [methodType, setMethodType] = useState("card");
    return (
        <div className="">
            <h2 className="pb-[19.5px] text-[16px] sm:mb-[22.5px] xl:text-[20px] 4xl:mb-[23px] text-[#031B07] leading-[140%] font-medium">
                Select Payment Method
            </h2>
            <div className="flex gap-[16px] sm:gap-[24px] items-center">
                {selectPaymentMethoData.map((item, index) => (
                    <div key={index} onClick={() => setMethodType(item.method)}>
                        <div
                            className={classNames(
                                item.method === methodType
                                    ? "border-[#18BA33]"
                                    : "border-[#626F63]",
                                "relative w-[60px] h-[34.62px] sm:w-[104px] sm:h-[60px] text-[20px] leading-[140%] text-[#000000] font-medium flex items-center justify-center border  text-center rounded cursor-pointer"
                            )}
                        >
                            <img
                                src={item.img}
                                alt=""
                                className="w-[49.62px] h-[24.54px] sm:w-[86px] sm:h-[42.53px]"
                            />
                            {item.method === methodType && (
                                <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] absolute top-0 right-[-10px] -translate-y-1/3 flex items-center justify-center bg-[#17B532] rounded-full text-[11px] text-white">
                                    <div>✓</div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-[30px] sm:pt-[50px]"></div>
            {/* <PaymentForm methodType={methodType}/> */}
            {methodType === "card" && <CardPaymentMethod />}
            {methodType === "payoneer" && <PayoneerMethod />}
        </div>
    );
}

export default SelectPaymentMethod;
