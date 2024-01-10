import React from "react";
import UserProfile from "../../../components/ProfileInfo/UserProfile";
import DashboardLayout from "../../../components/Shared/DashboardLayout";

const Profiles = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%] py-[30px] lg:py-[40px] xl:py-[50px]">
        <UserProfile/>
      </div>
    </DashboardLayout>
  );
};

export default Profiles;
