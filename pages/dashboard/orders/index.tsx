import React, { useState } from "react";
import { useQuery } from "react-query";
import useReviewQuery from "../../../api-query/useReviewQuery";
import RecentOrderTable from "../../../components/RecentOrderTable";
import DashboardLayout from "../../../components/Shared/DashboardLayout";
import RecentOrderTop from "../../../components/Shared/RecentOrderTop";
import { useAtom } from "jotai";
import { USER_STATE } from "../../../state";
import recentReviewQuery from "../../../api-query/recentReviewQuery";

const OrderPage = () => {
  const [filter, setFilter] = useState("all");
  const [user] = useAtom(USER_STATE);

  const handleFilterChange = (filterValue: any) => {
    setFilter(filterValue.value);
  };
  const { data, isLoading, refetch } = useQuery(
    ["Get Recent Review"],
    recentReviewQuery(user?._id, filter)
  );
  return (
    <DashboardLayout>
      <div className="w-[100%]">
        <RecentOrderTop handleOnChange={handleFilterChange} />
        <RecentOrderTable
          orderData={data}
          isLoading={isLoading}
          isPagination={true}
          orderRefetch={refetch}
        />
      </div>
    </DashboardLayout>
  );
};

export default OrderPage;
