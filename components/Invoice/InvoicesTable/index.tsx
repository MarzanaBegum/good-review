/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import classNames from "classnames";
import Pagination from "../../Shared/Pagination";
import { useRouter } from "next/router";
import useBillingHistory, {
    BillingHistory,
} from "../../../api-query/useBillingHistory";

import Moment from "react-moment";
import { api } from "../../../api";
import LoadingAnimation from "../../Shared/LoadingAnimation/LoadingAnimation";

const tableHead = ["Invoice", "Date", "Total", "Status", "Download"];
const InVoicesTable = ({ filter }: { filter: string }) => {
    const { data, isLoading } = useBillingHistory(filter);
    const router = useRouter();

    return (
        <>
            <Pagination
                dataArr={data || []}
                itemsPerPage={7}
                className="!justify-end pb-[100px] w-[100%]"
            >
                {(currentData) => (
                    <div className="py-[30px] lg:py-[50px] w-[100%]">
                        <div className="relative overflow-x-auto style-scroll">
                            <table className="w-full text-left text-[#031B07] border-separate  border-spacing-y-3">
                                <thead className="  text-[#031B07] text-[14px] lg:text-[16px] bg-white">
                                    <tr className="whitespace-nowrap">
                                        {tableHead.map(
                                            (item: any, index: number) => (
                                                <th
                                                    key={index}
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    {item}
                                                </th>
                                            )
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.length ? (
                                        currentData.map((item, i) => (
                                            <InvoiceTableItem
                                                item={item}
                                                key={"support-table-" + i}
                                            />
                                        ))
                                    ) : isLoading ? (
                                        <tr className="mt-12 w-full bg-white rounded-[15px] whitespace-nowrap text-[#031B07] text-[14px] font-medium leading-[16px] md:leading-[19.6px] 2xl:text-[16px] xl:leading-[22.4px]">
                                            <td
                                                className="flex items-center gap-2 px-6 py-4 "
                                                colSpan={2}
                                            >
                                                <LoadingAnimation color="#18BA33" />
                                                <div>Loading..</div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ) : (
                                        <tr className="mt-12 w-full bg-white rounded-[15px] whitespace-nowrap text-[#031B07] text-[14px] font-medium leading-[16px] md:leading-[19.6px] 2xl:text-[16px] xl:leading-[22.4px]">
                                            <td
                                                className="flex items-center gap-2 px-6 py-4 "
                                                colSpan={2}
                                            >
                                                No invoice found
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </Pagination>
        </>
    );
};

function InvoiceTableItem({ item }: { item: BillingHistory }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDownload = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const res = await api.get(`/billing/download/${item._id}`, {
                responseType: "blob",
            });
            const href = URL.createObjectURL(res.data);
            const link = document.createElement("a");
            link.href = href;

            link.setAttribute("download", `invoice#${item._id}.pdf`);

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

    console.log(item);

    return (
        <tr
            onClick={async () =>
                await router.push(`/dashboard/invoices/${item._id}`)
            }
            className="mt-12 bg-white rounded-[15px] whitespace-nowrap text-[#031B07] text-[14px] font-medium leading-[16px] md:leading-[19.6px] 2xl:text-[16px] xl:leading-[22.4px] cursor-pointer"
        >
            <td className="px-6 py-4 ">#{item.invoiceNo}</td>
            <td className="px-6 py-4">
                <Moment format="lll">{item.createdAt}</Moment>
            </td>
            <td className="px-6 py-4">${item.amount}</td>
            <td
                className={classNames(
                    item.status === "completed" && "text-[#17B532]",
                    item.status === "pending" && "text-[#E14960]",
                    // item.status === "in progress" && "text-[#F7A51D]",
                    "px-6 py-4 cursor-pointer"
                )}
            >
                {StatusText(item.status)}
            </td>
            <td className="px-6 py-4">
                {item.status === "pending" ? (
                    <div className="flex items-center  lg:ml-[6px]">
                        <div className="text-primary rounded-[7px] leading-[22.4px] py-2 px-4 bg-[#E8FCEC]">
                            Pay
                        </div>
                    </div>
                ) : <img
                    src="/icons/download-icon.svg"
                    alt=""
                    onClick={async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        await handleDownload();
                    }}
                    className="ml-[20px] lg:ml-[24px] w-[16px] h-[16px] cursor-pointer"
                />}
            </td>
        </tr>
    );
}

export function StatusText(text: string) {
    switch (text) {
        case "pending":
            return "Pending Payment";
        case "completed":
            return "Payment Completed";
        // case "in progress":
        //     return "Processing";

        default:
            return "";
    }
}

export default InVoicesTable;
