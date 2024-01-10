import classNames from "classnames";
import React from "react";

const stylePTag =
  "mt-[10px] text-[#334535] text-[16px] font-normal leading-[22px]";
const styleH2Tag = "text-[#031B07] font-semibold text-[16px] leading-[19.36px]";

const OrderRightData = ({ rightData, inputData }: any) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div>
        <h2 className={styleH2Tag}>Buyer’s Country</h2>
        <p
          className={classNames(
            rightData.buyer ? "not-italic" : "italic",
            stylePTag
          )}
        >
          {rightData.buyer ? rightData.buyer.country : "Searching the world"}
        </p>
      </div>
      <div>
        <h2 className={styleH2Tag}>Gig Price</h2>
        <div className="relative">
          <input
            {...inputData("gigPrice")}
            type="number"
            disabled={rightData.status !== "pending"}
            defaultValue={rightData.gigPrice}
            onKeyDown={(e) =>
              ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
            }
            className="text-[#334535] bg-transparent mt-[10px] px-[10px] font-normal text-[16px] leading-[22px] placeholder:text-[#626F63] border-none outline-none w-[100%]"
          />
          <p className="absolute bottom-[2px] text-[14px] font-[400] text-[#334535] mt-[1px]">
            $
          </p>
        </div>
      </div>
      <div>
        <h2 className={styleH2Tag}>Status</h2>
        <p
          className={classNames(
            stylePTag,
            rightData.status === "in progress" && "text-[#5286FE]",
            rightData.status === "completed" && "text-primary",
            rightData.status === "pending" && "text-[#E08F0A]",
            rightData.status === "cancelled" && "text-[#DE2844]"
          )}
        >
          {rightData.status}
        </p>
      </div>
    </div>
  );
};

export default OrderRightData;
