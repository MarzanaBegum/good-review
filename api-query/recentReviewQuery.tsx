import { UseQueryOptions } from "react-query";
import { api } from "../api";

const recentReviewQuery: (
  userId?: any,
  status?: string
) => UseQueryOptions<any, any, any, any> = (userId, status) => ({
  queryFn: async () => {
    const { data } = await api.get(`/review/recent/${userId}`);
    return data;
  },
  onSuccess: (data) => {
    // console.log(data);
  },
  select(data) {
    if (status === "all") return data;

    return data.filter((v: any) => v.status === status);
  },
  onError(err) {
    // console.log(err);
  },
});

export default recentReviewQuery;
