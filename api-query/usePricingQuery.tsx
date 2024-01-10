import { useQuery } from "react-query";
import { api } from "../api";

const PRICING_KEY = "pricing-key";

const pricingQuery = (filterType?: string) =>
    useQuery<PriceDataType[]>([PRICING_KEY], {
        queryFn: async () => {
            const { data } = await api.get(`/pricing`);
            return data;
        },
        select(data) {
            if (!filterType) return data;
            return data.filter((v: any) => v.serviceType  === filterType);
        },
    });

export default pricingQuery;

export interface PriceDataType {
    serviceType: string;
    packageType: string;
    packageDescription: string;
    price: number;
    icon: string;
    features: string[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}