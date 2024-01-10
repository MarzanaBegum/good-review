import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { USER_STATE } from "../state";
import { api } from "../api";

const BILLING_HISTORY = "billing-history-key";

const useBillingHistory = (filter?: string) => {
    const [user] = useAtom(USER_STATE);
    return useQuery<BillingHistory[]>([BILLING_HISTORY], {
        queryFn: async () => {
            const { data } = await api.get("/billing/user/" + user?._id);
            return data;
        },
        enabled: !!user?._id,
        select: (data) => {
            if (!filter || filter === "all") return data;

            const newData = data.filter((v) => v.status === filter);
            return newData;
        },
        retry: false,
    });
};

export interface BillingHistory {
    _id: string;
    userId: string;
    invoiceNo: number;
    status: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default useBillingHistory;
