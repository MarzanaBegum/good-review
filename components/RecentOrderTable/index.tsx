import React from "react";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import Pagination from "../Shared/Pagination";
import OrderTableItem from "./OrderTableItem";
import classNames from "classnames";

const tableHead = [
  "Package type",
  "Client name",
  "Location",
  "Gig url",
  "Status",
  "view",
];

const RecentOrderTable = ({
  orderData,
  isLoading,
  isPagination,
  orderRefetch,
}: {
  orderData?: any;
  isLoading?: boolean;
  isPagination?: boolean;
  orderRefetch?: any;
}) => {
  return (
    <>
      <Pagination
        dataArr={orderData || []}
        itemsPerPage={10}
        className={classNames(
          isPagination === false && "hidden",
          "!justify-end pb-[100px] w-[100%]"
        )}
      >
        {(data) => (
          <div className="py-[30px] lg:py-[50px] w-[100%]">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-[#031B07] border-separate  border-spacing-y-3">
                <thead className="  text-[#031B07] text-[12px] lg:text-[14px] uppercase bg-white">
                  <tr className="whitespace-nowrap">
                    {tableHead.map((item: any, index: number) => (
                      <th key={index} scope="col" className="px-6 py-3">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data && data.length !== 0 ? (
                    data.map((item: any, index: number) => (
                      <OrderTableItem
                        tableData={item}
                        orderRefetch={orderRefetch}
                        key={index}
                      />
                    ))
                  ) : isLoading ? (
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex gap-3 item-center">
                          <LoadingAnimation color="#18BA33" />
                          <div>Loading...</div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="px-6 py-2">
                        <div>No Order Found</div>
                      </td>
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

export default RecentOrderTable;
