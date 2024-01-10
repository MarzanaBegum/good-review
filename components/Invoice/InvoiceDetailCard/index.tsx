import React, { useState } from "react";
import classNames from "classnames";
import { SingleBilling } from "../../../api-query/useSingleBilling";
import { StatusText } from "../InvoicesTable";
import Moment from "react-moment";

const InvoiceDetailCard = ({ data }: { data: SingleBilling }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-[20px] pt-[48px]">
      <div className="w-[100%] lg:w-[50%] px-[20px] py-[30px] text-[16px] leading-[146%] text-[#031B07] font-semibold rounded-[10px] bg-[#FFFFFF]">
        <div className="flex items-center justify-between">
          <div className="">Name</div>
          <div className="">
            {data.userId.firstName} {data.userId.lastName}
          </div>
        </div>
        <div className="pt-4"></div>
        <div className="flex items-center justify-between">
          <div className="">Country</div>
          <div className="">
            {data.userId.country ? data.userId.country : "-"}
          </div>
        </div>
        <div className="pt-4"></div>
        <div className="flex items-center justify-between">
          <div className="">Email</div>
          <div className="">{data.userId.email}</div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[50%] px-[20px] py-[30px] text-[16px] leading-[146%] text-[#031B07] font-semibold rounded-[10px] bg-[#FFFFFF]">
        <div className="flex items-center justify-between">
          <div className="">Status</div>
          <div
            className={classNames(
              data.status === "completed" && "text-[#17B532]",
              data.status === "pending" && "text-[#E14960]",
              data.status === "processing" && "text-[#F7A51D]"
            )}
          >
            {StatusText(data.status)}
          </div>
        </div>
        <div className="pt-4"></div>
        <div className="flex items-center justify-between">
          <div className="">Invoice ID</div>
          <div className="">#{data.invoiceNo}</div>
        </div>
        <div className="pt-4"></div>
        <div className="flex items-center justify-between">
          <div className="">Date</div>
          <div className="">
            <Moment format="lll">{data.createdAt}</Moment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailCard;
