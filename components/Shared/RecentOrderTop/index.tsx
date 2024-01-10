import React from "react";
import { orderFilter } from "../../../utils/const";
import SelectDropdown from "../../SelectDropdown";
import { ActionMeta } from "react-select";

type Type = {
  handleOnChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
};
const RecentOrderTop = (props: Type) => {
  return (
    <div className="mt-[30px] lg:mt-[50px] flex justify-between items-center">
      <h3 className="text-[#031B07] xl:font-semibold font-normal text-[14px] leading-[19.6px ] xl:text-[16px] xl:leading-[19.36px]">
        Recent orders
      </h3>
      <SelectDropdown
        options={orderFilter}
        defaultValue={orderFilter[0]}
        onChange={props.handleOnChange}
        placeholder="All orders"
      />
    </div>
  );
};

export default RecentOrderTop;
