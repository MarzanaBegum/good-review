import React, { useState } from "react";
import InvoiceDetailCard from "../../../components/Invoice/InvoiceDetailCard";
import OrderSummaryCard from "../../../components/Invoice/OrderSummaryCard";
import DashboardLayout from "../../../components/Shared/DashboardLayout";
import classNames from "classnames";
import { useRouter } from "next/router";
import useSingleBilling, {
    SingleBilling,
} from "../../../api-query/useSingleBilling";
// import LoadingAnimation from "../../../components/Shared/LoadingAnimation/LoadingAnimation";
import { api } from "../../../api";
import { useQuery } from "react-query";
import NewOrderSummary from "../../../components/Shared/NewOrderSummary";
import LoadingAnimation from "../../../components/Shared/LoadingAnimation/LoadingAnimation";

function InVoiceDetailsPage() {
    const router = useRouter();
    const { id }: any = router.query;

    const { data, isLoading } = useSingleBilling(id);
    const { data: reviewData } = useReviewsByOrder(id);

    return (
        <DashboardLayout>
            {!data ? (
                isLoading ? (
                    <div className="flex items-center justify-center w-full h-[calc(100vh-200px)] top-1/2">
                        <LoadingAnimation
                            height={46}
                            width={46}
                            color="#18BA33"
                        />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-[calc(100vh-200px)] top-1/2">
                        No data found
                    </div>
                )
            ) : (
                <div className="w-[100%]">
                    <div className="mt-[30px] lg:mt-[50px] flex justify-between items-center">
                        <h3 className="text-[#031B07] font-normal leading-[140%] text-[16px] xl:text-[20px] xl:font-medium">
                            Invoice
                        </h3>
                        {data && data?.status === "completed" && <DownloadButton data={data} />}
                    </div>
                    <InvoiceDetailCard data={data} />
                    <div className="pt-5"></div>
                    <NewOrderSummary reviewData={reviewData} />
                    <div
                        className={classNames(
                            data.status !== "pending" && "pt-8 "
                        )}
                    ></div>
                    <div className="pb-8"></div>
                    {/* {data.status === "pending" && (
                        <div className="py-[30px]  sm:py-[40px] flex justify-end">
                            <button className="w-[100%] h-[55px] sm:w-[229px] sm:h-[57px] text-[18px] font-medium text-[#FFFFFF] bg-[#17B532] cursor-pointer rounded-[10px]">
                                Continue to payment
                            </button>
                        </div>
                    )} */}
                </div>
            )}
        </DashboardLayout>
    );
}

function DownloadButton({ data }: { data: SingleBilling }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDownload = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const res = await api.get(`/billing/download/${data._id}`, {
                responseType: "blob",
            });
            const href = URL.createObjectURL(res.data);
            const link = document.createElement("a");
            link.href = href;

            link.setAttribute("download", `invoice#${data._id}.pdf`);

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
            setLoading(false);
        } catch (err: any) {
            console.log(err);
            setLoading(false);
        }
    };
    return (
        <button
            // disabled={data.status !== "completed"}
            onClick={handleDownload}
            className={classNames(
                "enabled:hover:bg-[#17B532] enabled:hover:text-[#FFFFFF] group enabled:border-[#17B532] enabled:text-[#17B532]",
                "disabled:bg-[#DBDCDA]  disabled:border-[#C1C4C0] disabled:text-[#031B07]",
                "w-[134px] flex justify-center items-center h-[56px] text-[18px] font-medium border  cursor-pointer rounded-[10px] transition-all duration-200"
            )}
        >
            {loading ? (
                <LoadingAnimation
                    color="#18BA33"
                    groupClassName="group-hover:stroke-white"
                />
            ) : (
                "Download"
            )}
        </button>
    );
}

function useReviewsByOrder(orderId: string) {
    return useQuery(["order-reviews"], {
        queryFn: async () => {
            const { data } = await api.get("/review/order/" + orderId);
            return data;
        },
        enabled: !!orderId,
    });
}

export default InVoiceDetailsPage;
