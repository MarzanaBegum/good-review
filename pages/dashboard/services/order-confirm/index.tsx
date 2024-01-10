/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Header from "../../../../components/Layout/Header";
import DashboardLayout from "../../../../components/Shared/DashboardLayout";

function OrderConfirm() {
    return (
        <>
            <DashboardLayout>
                <div className="bg-[#FAFAFA] w-[100%] min-h-screen">
                    <div className="container pt-[16px] pb-[60px] sm:py-[50px] lg:py-[80px] 4xl:py-[100px] flex items-center justify-center">
                        <div className="bg-[#FFFFFF] p-[20px] sm:p-[40px] lg:p-[60px] xl:p-[80px] text-center rounded-[10px]">
                            <img
                                src="/images/logo.svg"
                                alt="logo"
                                className="w-[144px] h-[30px] sm:w-[288px] sm:h-[60px] mx-auto"
                            />
                            <h2 className="text-[20px] mt-[30px] sm:text-[24px] leading-[125%] font-semibold text-[#0C5A19]">
                                Order Confirmed!
                            </h2>
                            <h3 className="mt-[12px] text-[14px] sm:text-[16px] font-normal leading-[146%] text-[#666666]">
                                We’ve sent confirmation and an invoice to
                                greeg@gmail.com
                            </h3>
                            <div className="pt-[20px] pb-[30px] mt-[30px] sm:py-[30px] sm:mt-[30px] lg:py-[40px] lg:mt-[40px] max-w-[882px] bg-[#F5F6F8] rounded-[10px] text-center">
                                <h2 className="text-[20px] pb-[12px] leading-[135%] font-medium text-[#031B07]">
                                    Complete Order
                                </h2>
                                <hr className="w-full bg-[#C5C7D0]" />
                                <h1 className="px-[10px] pt-[30px] pb-[40px] text-[24px] sm:px-[30px] sm:text-[40px] lg:p-[40px] 2xl:text-[48px]  font-bold leading-[120%] text-[#031B07]">
                                    Thank you for{" "}
                                    <span className="text-[#18BA33]">
                                        choosing us!
                                    </span>{" "}
                                    We appreciate it.
                                </h1>
                                <Link href="/dashboard">
                                    <button className="w-[137px] h-[40px] sm:w-[155px] sm:h-[48px] sm:text-[16px] xl:w-[168px] xl:h-[56px] xl:text-[18px] font-medium text-[#FFFFFF] bg-[#18BA33] rounded-[10px] cursor-pointer">
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
}

export default OrderConfirm;
