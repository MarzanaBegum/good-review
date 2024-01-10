import React from "react";
import DashboardLayout from "../../../components/Shared/DashboardLayout";
import SupportTable from "../../../components/Support/SupportTable";
import SupportTop from "../../../components/Support/SupportTop";

function SupportPage() {
    return (
        <DashboardLayout>
            <SupportTop />
            <SupportTable />
        </DashboardLayout>
    );
}

export default SupportPage;
