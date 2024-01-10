import React, { useState } from "react";

import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import OrderSummaryCard from "../Invoice/OrderSummaryCard";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { CLIENT_SECRET, USER_STATE } from "../../state";
import { api } from "../../api";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import pricingQuery from "../../api-query/usePricingQuery";
import useServiceData from "../../hooks/useServiceData";
import { toast } from "react-toastify";

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const { serviceData, updateServiceData, setServiceData } = useServiceData();
    const [, setClientSecret] = useAtom(CLIENT_SECRET);
    const [user] = useAtom(USER_STATE);

    const [isCheck, setCheck] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


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
    console.log(activePackagePrice, "customPackagePrice__++++")
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



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            if (!stripe || !elements)
                throw new Error("Stripe or elements not found");

            const { error, setupIntent } = await stripe.confirmSetup({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/account/billing`,
                    payment_method_data: {
                        billing_details: {
                            name: user?.firstName,
                            email: user?.email,
                        },
                    },
                },

                redirect: "if_required",
            });

            if (error) throw new Error(error.message);

            await api.post("/payment/confirm", {
                amount: total && total * 100,
                customer: user?.userStore.customerId,
                payment_method: `${setupIntent.payment_method}`,
            })
                .then((res) => {
                    if (res.status === 200) {
                        // Start Other's code here

                        api.post("/billing", {
                            userId: user?._id,
                            invoiceNo: Math.floor(Math.random() * 899999 + 100000),
                            status: "completed",
                            amount: total,
                        }).then((res: any) => {
                            if (res.status === 200) {
                                const updateReviewState = serviceData?.reviews?.map(function (obj: any) {
                                    return { ...obj, orderId: res.data.billing._id }
                                })
                                api.post('/review', updateReviewState)
                                    .then((res) => {
                                        if (res.status === 200) {
                                            if (user !== undefined) {

                                                api.put(`/user/${user._id}`, { status: "active" })
                                            }
                                            toast.success("Order created successfully !");
                                            console.log("console success :", updateReviewState);
                                            localStorage.removeItem("order-data");
                                            router.push("/dashboard/services/order-confirm");
                                        } else {
                                            toast.error("Something went wrong !")
                                        }
                                    })
                                // res.data.billing._id
                            } else {
                                toast.error("Something went wrong");
                                localStorage.removeItem("order-data");
                                router.push("/dashboard/services");
                            }
                        })
                    }
                    console.log(res, "res after confirn ")
                })

            if (!isCheck) {
                await api.delete(
                    `/payment/customer/${user?.userStore.customerId}/payment-method`
                );
            }

            // Start Other's code here


            // await api.post("/billing", {
            //     userId: user?._id,
            //     invoiceNo: Math.floor(Math.random() * 899999 + 100000),
            //     status: "completed",
            //     amount: total,
            // });
            // End Other's code here

            setClientSecret(undefined);
            // await router.push("/dashboard/services/order-confirm");
            localStorage.removeItem("order-data")
        } catch (err: any) {
            const errMessage = err.response
                ? err.response.data.message
                : err.message;
            setLoading(false);
            setError(errMessage);
        }
    };
    const handlecancle = () => {
        localStorage.removeItem("order-data");
        router.push("/dashboard/services")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="flex flex-col 2xl:flex-row gap-[30px] sm:gap-[40px] md:gap-[50px] 3xl:gap-[30px]">
                    <div className="w-[100%] 2xl:w-[50%]">
                        <div className="w-[100%] px-[20px] py-[30px]  rounded-[10px] bg-[#FFFFFF]">
                            <div>
                                <h1 className="text-[16px] leading-[19px] text-[#031B07] font-semibold">
                                    Payment Details
                                </h1>
                                <div className="pt-5"></div>
                                <div>
                                    <PaymentElement />
                                </div>
                                {error && (
                                    <div className="mt-4 text-sm text-error">
                                        {error}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <div className="hidden 2xl:block pt-[30px]">
                            <SavePayment
                                isCheck={isCheck}
                                setCheck={setCheck}
                            />
                        </div> */}
                    </div>

                    <div className="w-[100%] 2xl:w-[50%]">
                        <OrderSummaryCard orderSummary={orderSummary} />
                    </div>
                </div>
                <div className="pt-[30px] sm:pt-[20px]"></div>

                {/* <div className="2xl:hidden">
                    <SavePayment isCheck={isCheck} setCheck={setCheck} />
                </div> */}

                <div className="flex justify-end flex-col sm:flex-row gap-[20px] md:gap-[30px] pt-[40px] pb-[74px] sm:pb-[158px] md:pb-[76px] lg:pb-[138px] xl:pb-[114px] 2xl:pb-[171px] 3xl:pb-[189px] 4xl:pb-[173px]">
                    <button
                        onClick={handlecancle}
                        type="button"
                        className="w-[100%] h-[53px] sm:w-[141px] xl:w-[180px] text-[18px] font-medium text-[#031706] border border-[#C5C7D0] rounded-[8px] cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button className="w-[100%] h-[53px] sm:w-[141px] xl:w-[180px] text-[18px] font-medium text-[#FFFFFF] rounded-[8px] cursor-pointer bg-[#17B532]">
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
        </form>
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
                Save my payment details for future purchaseasdfa
            </div>
        </div>
    );
};

export default PaymentForm;
