import { useQuery, useQueryClient } from "react-query";
import { api } from "../api";
import { useAtom } from "jotai";
import { USER_STATE } from "../state";

const SUPPORT_QUERY_KEY = ["get-support-query"];

function useSupportQuery() {
    const [user] = useAtom(USER_STATE);
    return useQuery<SupportData[]>(SUPPORT_QUERY_KEY, {
        queryFn: async () => {
            const { data } = await api.get("/ticket/user/" + user?._id);
            return data;
        },
        enabled: !!user?._id,
        refetchOnWindowFocus: false,
        retry: false,
    });
}

export const useSupportRefetch = () => {
    const queryClient = useQueryClient();
    return async () => {
        await queryClient.refetchQueries(SUPPORT_QUERY_KEY);
    };
};

export interface Chat {
    type: string;
    text: string;
}

export interface SupportData {
    _id: string;
    userId: string;
    subject: string;
    relatedOrder: string;
    status: string;
    ticketNo: number;
    chats: Chat[];
    files: string[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export default useSupportQuery;
