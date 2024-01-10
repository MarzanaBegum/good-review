/* eslint-disable @next/next/no-img-element */
import React from "react";
import Pagination from "../../Shared/Pagination";
import { supportData } from "../../../utils/const";
import EditOrderModal from "../../Modal/EditOrderModal";
import { useState } from "react";
import ToolTip from "../../Shared/ToolTip";
import useSupportQuery, {
    SupportData,
} from "../../../api-query/useSupportQuery";
import Moment from "react-moment";
import LoadingAnimation from "../../Shared/LoadingAnimation/LoadingAnimation";
import classNames from "classnames";

const tableHead = ["Code", "Date", "Details", "Status", "View"];
const SupportTable = () => {
    const { data, isLoading } = useSupportQuery();

    return (
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
                                    {tableHead.map((item, index) => (
                                        <th
                                            key={index}
                                            scope="col"
                                            className="px-6 py-3"
                                        >
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.length ? (
                                    currentData.map((item, i) => (
                                        <TableItem
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
                                            No ticket found
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
    );
};

function TableItem({ item }: { item: SupportData }) {
    const [openEditModal, setEditModal] = useState<boolean>(false);
    const handleEditModal = () => {
        setEditModal(!openEditModal);
    };
    return (
        <tr className="mt-12 bg-white rounded-[15px] whitespace-nowrap text-[#031B07] text-[14px] font-medium leading-[16px] md:leading-[19.6px] 2xl:text-[16px] xl:leading-[22.4px]">
            <td className="px-6 py-4 ">#{item.ticketNo}</td>
            <td className="px-6 py-4">
                <Moment format="lll">{item.createdAt}</Moment>
            </td>
            <td className="px-6 max-w-[300px] truncate py-4">
                {item.chats[0].text}
            </td>
            <td
                className={classNames(
                    item.status === "solved" && "text-[#17B532]",
                    item.status === "pending" && "text-[#F1C950]",
                    item.status === "replied" && "text-[#f1505d]",
                    "px-6 py-4 capitalize"
                )}
            >
                {item.status}
            </td>
            <td className="flex items-center px-6 py-4">
                <ToolTip
                    toolTipText="Click for edit ticket"
                    className="w-[150px]  after:ml-[60px]"
                >
                    <img
                        onClick={handleEditModal}
                        src="/icons/support-eye.svg"
                        alt=""
                        className="h-4 cursor-pointer "
                    />
                </ToolTip>
                <EditOrderModal
                    isOpen={openEditModal}
                    onClose={handleEditModal}
                    data={item}
                />
            </td>
        </tr>
    );
}

export default SupportTable;
