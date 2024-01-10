import React from "react";
import Profile from "../../../components/Profiles";
import UploadProfile from "../../../components/Profiles/UploadProfile";
import DashboardLayout from "../../../components/Shared/DashboardLayout";

const AccountSettings = () => {
    return (
        <>
            <DashboardLayout>
                <div className="xl:py-[50px] md:py-[40px] py-[30px] w-[100%]">
                    <UploadProfile />
                    <Profile />
                </div>
            </DashboardLayout>
        </>
    );
};

export default AccountSettings;