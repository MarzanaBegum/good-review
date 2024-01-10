import React from "react";
import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";
import RealtimeNotification from "../RealtimeNotification";

type ChildrenType = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: ChildrenType) => {
    return (
        <>
            <div className="bg-[#fafafa] min-h-screen w-full">
                <div className="h-[44px]  sm:h-[86px] lg:h-[96px]">
                    <DashboardNav />
                </div>

                <div className="hidden lg:block">
                    <Sidebar />
                </div>
                {/* <div className="sticky top-0 z-50 lg:hidden">
                    <MoboNav />
                </div> */}
                <div className="w-[100%] min-h-full bg-[#fafafa] 2xl:pl-[285px] 2xl:pr-[30px] xl:pl-[260px] xl:pr-[25px] lg:pl-[250px] sm:pl-[20px] pl-[16px] pr-[16px] sm:pr-[20px] modal-scroll">
                    {children}
                </div>
                <RealtimeNotification />
            </div>
        </>
    );
};

export default DashboardLayout;
