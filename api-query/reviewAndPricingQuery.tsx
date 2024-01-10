import { useQuery } from "react-query";
import { api } from "../api";

const Review_Pricing = "review-pricing";

const reviewPricingQuery = (userId?: string) =>
  useQuery([Review_Pricing], {
    queryFn: async () => {
      const { data } = await api.get(`/order-package/${userId}`);
      return data;
    },
  });

export default reviewPricingQuery;
