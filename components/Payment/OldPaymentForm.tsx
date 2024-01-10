import React, { useState } from "react";
import PaymentDetails from "./OldPaymentForm";
import Link from "next/link";
import OrderSummaryCard from "../Invoice/OrderSummaryCard";
import classNames from "classnames";

function PaymentForm({ methodType }: any) {
    const [isCheck, setCheck] = useState(true);
    return (
        <div>
            <form action="">
                {methodType === "paypal" && (
                    <h1 className="mb-[40px] text-[16px] font-medium leading-[140%] text-[#031B07]">
                        In order to complete your transaction, we will transfer
                        you over to PayPal’s secure servers.
                    </h1>
                )}
                <div className="flex flex-col 2xl:flex-row gap-[30px]">
                    {methodType === "card" && (
                        <div className="w-[100%] 2xl:w-[50%]">
                            <div className="w-[100%] px-[20px] py-[30px]  rounded-[10px] bg-[#FFFFFF]">
                                <PaymentDetails />
                                {/* 
                <BillingAddress /> */}
                            </div>
                            <div className="hidden 2xl:block pt-[30px]">
                                <SavePayment
                                    isCheck={isCheck}
                                    setCheck={setCheck}
                                />
                            </div>
                        </div>
                    )}
                    <div
                        className={classNames(
                            methodType === "paypal"
                                ? "w-[100%]"
                                : "w-[100%] 2xl:w-[50%]"
                        )}
                    >
                        <OrderSummaryCard />
                    </div>
                </div>
                <div className="pt-[30px] sm:pt-[20px]"></div>
                {methodType === "card" && (
                    <div className="2xl:hidden">
                        <SavePayment isCheck={isCheck} setCheck={setCheck} />
                    </div>
                )}
                <div className="flex justify-end flex-col sm:flex-row gap-[20px] md:gap-[30px] pt-[40px] pb-[74px] sm:pb-[158px] md:pb-[76px] lg:pb-[138px] xl:pb-[114px] 2xl:pb-[171px] 3xl:pb-[189px] 4xl:pb-[173px]">
                    <button className="w-[100%] h-[53px] sm:w-[141px] xl:w-[180px] text-[18px] font-medium text-[#031706] border border-[#C5C7D0] rounded-[8px] cursor-pointer">
                        Cancel
                    </button>
                    <Link href="/dashboard/services/order-confirm">
                        <button className="w-[100%] h-[53px] sm:w-[141px] xl:w-[180px] text-[18px] font-medium text-[#FFFFFF] rounded-[8px] cursor-pointer bg-[#17B532]">
                            Confirm
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

type RCTYPE = {
    isCheck: boolean;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};
const SavePayment = ({ isCheck, setCheck }: RCTYPE) => {
    return (
        <div
            onClick={() => setCheck(!isCheck)}
            className="flex gap-[10px] items-center cursor-pointer"
        >
            <div
                className={`w-[24px] h-[24px] border rounded-full border-[#D0D5DD] flex justify-center items-center ${isCheck && "!border-[#17B532] bg-[#17B532]"
                    }`}
            >
                {isCheck && <div className="text-[12px] text-white">✓</div>}
            </div>
            <div className="text-[#626F63] text-[14px] xl:text-[16px] font-normal leading-[146%]">
                Save my payment details for future purchase
            </div>
        </div>
    );
};

export default PaymentForm;
