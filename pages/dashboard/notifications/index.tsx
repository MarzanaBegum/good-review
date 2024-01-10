import React from "react";
import NotificationDetails from "../../../components/NotificationDetails";
import DashboardLayout from "../../../components/Shared/DashboardLayout";

const NotificationPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-[30px] 3xl:mt-[40px] pb-[50px]">
        <NotificationDetails />
      </div>
    </DashboardLayout>
  );
};

export default NotificationPage;
