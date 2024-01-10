import React, { useState } from "react";
import InVoicesTable from "../../../components/Invoice/InvoicesTable";
import DashboardLayout from "../../../components/Shared/DashboardLayout";
import TopInvoice from "../../../components/Invoice/TopInvoice";

function InvoicesPage() {
    const [filter, setFilter] = useState("all");

    return (
        <DashboardLayout>
            <TopInvoice setFilter={setFilter} />
            <InVoicesTable filter={filter} />
        </DashboardLayout>
    );
}

export default InvoicesPage;
