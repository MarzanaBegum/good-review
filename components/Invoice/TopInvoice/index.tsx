import React from "react";
import { invoiceFilter } from "../../../utils/const";
import SelectDropdown from "../../SelectDropdown";

const TopInvoice = ({ setFilter }: any) => {
    return (
        <div className="w-[100%] mt-[30px] lg:mt-[50px] flex justify-between items-center">
            <h3 className="text-[#031B07] font-normal text-[14px] leading-[140%] lg:text-[16px] xl:text-[20px] xl:font-medium">
                Invoice
            </h3>
            <SelectDropdown
                options={invoiceFilter}
                defaultValue={invoiceFilter[0]}
                onChange={(v: any) => {
                    setFilter(v.value);
                }}
                placeholder="All order"
            />
        </div>
    );
};

export default TopInvoice;
