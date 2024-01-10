import React, { useState } from "react";
import Overview from "../../components/Overview";
import RecentOrderTable from "../../components/RecentOrderTable";
import DashboardLayout from "../../components/Shared/DashboardLayout";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";
import RecentOrderTop from "../../components/Shared/RecentOrderTop";
import { useQuery } from "react-query";
import recentReviewQuery from "../../api-query/recentReviewQuery";

const Dashboard = () => {
    const [user] = useAtom(USER_STATE);
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (filterValue: any) => {
        setFilter(filterValue.value);
    };
    const { data, isLoading, refetch } = useQuery(
        ["Get Recent Review"],
        recentReviewQuery(user?._id, filter)
    );

    return (
        <DashboardLayout>
            <Overview />
            <div className="w-[100%]">
                <RecentOrderTop handleOnChange={handleFilterChange} />
            </div>
            <RecentOrderTable
                orderData={data}
                isLoading={isLoading}
                isPagination={false}
                orderRefetch={refetch}
            />
        </DashboardLayout>
    );
};

export default Dashboard;
