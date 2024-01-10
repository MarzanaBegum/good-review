import React, { useState } from "react";
import OrderSummaryCard from "../Invoice/OrderSummaryCard";
import { useRouter } from "next/router";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { api } from "../../api";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";
import useServiceData from "../../hooks/useServiceData";
import pricingQuery from "../../api-query/usePricingQuery";

function PayoneerMethod() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { serviceData, updateServiceData, setServiceData } = useServiceData();
    const [trxId, setTrxId] = useState("");

    const [user] = useAtom(USER_STATE);
    const { data, isLoading } = pricingQuery(serviceData.serviceType);
    const allReviews = serviceData && serviceData?.reviews;

    const simpleClientData = allReviews.filter((item: any) => item.packageType === "simple client");
    const customClientData = allReviews.filter((item: any) => item.packageType === "custom client");
    const activeClientData = allReviews.filter((item: any) => item.packageType === "active client");

    // const packagePrice = data && data.reduce((obj, cur) => ({...obj, [cur.packageType]: cur.price}), {});
    const simplePackagePrice = data && data.filter((item: any) => item.packageType === "simple client");
    const customPackagePrice = data && data.filter((item: any) => item.packageType === "custom client");
    const activePackagePrice = data && data.filter((item: any) => item.packageType === "active client");

    const simpleClientItemTotal: any = simplePackagePrice && simplePackagePrice?.length > 0 ? Number(simpleClientData?.length * simplePackagePrice[0].price) : 0;
    const customClientItemTotal: any = customPackagePrice && customPackagePrice?.length > 0 ? Number(customClientData?.length * customPackagePrice[0].price) : 0;
    const activeClientItemTotal: any = activePackagePrice && activePackagePrice?.length > 0 ? Number(activeClientData?.length * activePackagePrice[0].price) : 0;
    const total = Number(simpleClientItemTotal + customClientItemTotal + activeClientItemTotal);

    const orderSummary = [
        {
            packageType: "simple client",
            quantity: simpleClientData && simpleClientData?.length,
            packagePrice: simplePackagePrice && simplePackagePrice?.length > 0 ? simplePackagePrice[0].price : 0,
            itemTotalPrice: simpleClientItemTotal ? simpleClientItemTotal : 0,
            total: total
        },
        {
            packageType: "custom client",
            quantity: customClientData && customClientData?.length,
            packagePrice: customPackagePrice && customPackagePrice?.length > 0 ? customPackagePrice[0].price : 0,
            itemTotalPrice: customClientItemTotal ? customClientItemTotal : 0,
            total: total
        },
        {
            packageType: "active client",
            quantity: activeClientData && activeClientData?.length,
            packagePrice: activePackagePrice && activePackagePrice?.length > 0 ? activePackagePrice[0].price : 0,
            itemTotalPrice: activeClientItemTotal ? activeClientItemTotal : 0,
            total: total
        },
    ]
    const handleOnSubmit = async () => {
        if (loading) return;
        setError("");
        if (!trxId) {
            setLoading(false);
            return setError("Must provide transaction id to process further!");
        }

        try {
            setLoading(true);

            const { data } = await api.post("/billing", {
                userId: user?._id,
                invoiceNo: Math.floor(Math.random() * 899999 + 100000),
                status: "pending",
                amount: total,
                trxId,
            });


            if (data?.billing) {
                const updateReviewState = serviceData?.reviews?.map(function (obj: any) {
                    return { ...obj, orderId: data.billing._id }
                })
                api.post('/review', updateReviewState)
                    .then((res) => {
                        if (res.status === 200) {
                            if (user !== undefined) {

                                api.put(`/user/${user._id}`, { status: "inactive" })
                            }
                            toast.success("Order created successfully !");
                            console.log("console success :", updateReviewState);
                            localStorage.removeItem("order-data");
                            router.push("/dashboard/services/order-confirm");
                        } else {
                            toast.error("Something went wrong !")
                        }
                    })
            }

            // create order here

            // end here
            setTrxId("");
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            const errMessage = err.response
                ? err.response.data.message
                : err.message;
            toast.error(errMessage);
        }
    };
    console.log(user?._id, "user id")
    const handlecancle = () => {
        localStorage.removeItem("order-data");
        router.push("/dashboard/services")
    }
    return (
        <div>
            <div className="flex flex-col 2xl:flex-row gap-[30px]">
                <div className="w-[100%] 2xl:w-[50%]">
                    <div className="w-[100%] px-[20px] py-[30px]  rounded-[10px] bg-[#FFFFFF]">
                        <div>
                            <h1 className="text-[16px] leading-[19px] text-[#031B07] font-semibold">
                                Payment Details
                            </h1>
                            <div className="pt-5"></div>
                            <div>
                                <div>
                                    Please transfer total amount to the email
                                    listed below. Once payment is confirmed we
                                    will notify you, when your order has been
                                    started.
                                </div>
                                <div className="pt-3"></div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-primary">
                                        mail@example.com{" "}
                                    </span>{" "}
                                    <CopyToClipboard
                                        text="mail@example.com"
                                        onCopy={() => {
                                            toast.success("Email copied");
                                        }}
                                    >
                                        <div className="p-1 cursor-pointer">
                                            <img
                                                src="/icons/copy.svg"
                                                className="w-5 "
                                                alt=""
                                            />
                                        </div>
                                    </CopyToClipboard>
                                </div>
                                <div className="pt-5"></div>
                                <div>
                                    <label htmlFor="trxId" className="block">
                                        Transaction Id
                                    </label>
                                    <div className="pt-2"></div>

                                    <input
                                        type="text"
                                        id="trxId"
                                        onChange={(e) => {
                                            setTrxId(e.target.value);
                                        }}
                                        value={trxId}
                                        className={`w-full h-[46px] focus:outline-none rounded-[10px] bg-[#FAFAFA] placeholder:text-sm focus:border-primary border border-transparent placeholder:text-[#626F63] text-sm px-4 ${error && "!border-error"
                                            }`}
                                        placeholder="enter transaction id"
                                    />
                                    {error && (
                                        <div className="mt-2 text-sm text-error">
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="pt-5"></div>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] 2xl:w-[50%]">
                    <OrderSummaryCard orderSummary={orderSummary} />
                </div>
            </div>
            <div className="pt-[30px] sm:pt-[20px]"></div>

            <div className="flex justify-end flex-col sm:flex-row gap-[20px] md:gap-[30px] pt-[40px] pb-[74px] sm:pb-[158px] md:pb-[76px] lg:pb-[138px] xl:pb-[114px] 2xl:pb-[171px] 3xl:pb-[189px] 4xl:pb-[173px]">
                <button
                    onClick={handlecancle}
                    type="button"
                    className="w-[100%] h-[53px] sm:w-[141px] xl:w-[180px] text-[18px] font-medium text-[#031706] border border-[#C5C7D0] rounded-[8px] cursor-pointer"
                >
                    Cancel
                </button>

                <button
                    onClick={handleOnSubmit}
                    className="w-[100%] h-[53px] sm:w-[141px] xl:w-[180px] text-[18px] font-medium text-[#FFFFFF] rounded-[8px] cursor-pointer bg-[#17B532]"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <LoadingAnimation color="#fff" />
                            Loading...
                        </div>
                    ) : (
                        "Confirm"
                    )}
                </button>
            </div>
        </div>
    );
}

export default PayoneerMethod;
