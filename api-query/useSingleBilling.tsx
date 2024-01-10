import { useQuery } from "react-query";
import { api } from "../api";

const useSingleBilling = (id: string) => {
    return useQuery<SingleBilling>(["get-single-billing", id], {
        queryFn: async () => {
            const { data } = await api.get("/billing/" + id);
            return data;
        },
        enabled: !!id,
    });
};

export default useSingleBilling;

export interface UserId {
    _id: string;
    firstName: string;
    lastName: string;
    country?: string;
    email: string;
}

export interface SingleBilling {
    _id: string;
    userId: UserId;
    invoiceNo: number;
    status: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
