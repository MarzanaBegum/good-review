import { useQuery, useQueryClient } from "react-query";
import { api } from "../api";
import { useAtom } from "jotai";
import { USER_STATE } from "../state";

const NOTIFICATION_KEY = ["notification-query-key"];

function useNotifications() {
    const [user] = useAtom(USER_STATE);
    return useQuery<NotificationType[]>(NOTIFICATION_KEY, {
        queryFn: async () => {
            const { data } = await api.get("/notify/user/" + user?._id);
            return data;
        },
        enabled: !!user?._id,
    });
}

export const useNotifyRefetch = () => {
    const queryClient = useQueryClient();
    return async () => {
        await queryClient.refetchQueries(NOTIFICATION_KEY);
    };
};

export interface NotificationType {
    _id: string;
    userId: string;
    title: string;
    status: string;
    isSeen: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default useNotifications;
