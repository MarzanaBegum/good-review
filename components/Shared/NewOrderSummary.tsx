import React, { useEffect, useMemo } from "react";
import pricingQuery from "../../api-query/usePricingQuery";

const tableHead = ["Package", "Quantity", "Price", "Item Total"];

type DataObjType = {
    [key: string]: (ReviewDataType & { price?: number })[];
};

const NewOrderSummary = ({ reviewData }: { reviewData?: ReviewDataType[] }) => {
    // ! first method

    const { data: pricingData } = pricingQuery();

    const newData = useMemo(() => {
        let dataArr = reviewData || [];
        let dataObj: DataObjType = {};
        for (let i = 0; i < dataArr.length; i++) {
            let data = dataArr[i];
            let type = data.packageType + data.serviceType;
            let priceItem = pricingData?.find(
                (v) =>
                    v.packageType == data.packageType &&
                    v.serviceType == data.serviceType
            );
            let changeData = { ...data, price: priceItem?.price || 0 };
            dataObj[type] = dataObj[type]
                ? dataObj[type].concat(changeData)
                : [changeData];
        }
        return dataObj;
    }, [reviewData, pricingData]);

    const sum = Object.values(newData)
        .map((item) => item[0].price! * item.length)
        .reduce((prev, curr) => prev + curr, 0);

    // ! second method

    const newData2 = useMemo(() => {
        let dataArr = reviewData || [];
        let dataObj: DataObjType = {};
        for (let i = 0; i < dataArr.length; i++) {
            let data = dataArr[i];
            let type = data.packageType + data.serviceType;
            dataObj[type] = dataObj[type] ? dataObj[type].concat(data) : [data];
        }
        return dataObj;
    }, [reviewData]);

    // const sum = Object.values(newData)
    //     .map((item) => item[0].orderId.amount)
    //     .reduce((prev, curr) => prev + curr, 0);

    return (
        <>
            <div className="px-[20px] py-[30px] bg-[#FFFFFF] rounded-[10px]">
                <h2 className="text-[16px] leading-[19px] text-[#031B07] font-semibold">
                    Order summary
                </h2>
                <div className="pt-[20px]"></div>
                <div className="text-[16px] leading-[146%] pb-[10px] text-[#031B07] font-semibold border-b border-b-[#E6E9EF] flex items-center justify-between gap-[6px]">
                    {tableHead.map((item: any, index: number) => (
                        <div
                            className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] first:text-left text-right text-[14px] sm:text-[16px]"
                            key={index}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="py-[36px] border-b border-b-[#E6E9EF]">
                    {Object.values(newData).map((item, index) => (
                        <div
                            key={index}
                            className="flex pb-[20px] text-left last:pb-0 items-center font-normal justify-between"
                        >
                            <h3 className="w-[100%] md:w-[200px] xl:w-[260px] text-[#626F63] 2xl:w-[448px] capitalize text-[14px]">
                                {item[0].packageType}
                            </h3>
                            <h3 className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] text-[#626F63] text-right">
                                {item.length}
                            </h3>
                            <h3 className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] font-semibold text-[#031B07] text-right">
                                ${item[0].price}
                            </h3>
                            <h3 className="w-[100%] md:w-[200px] xl:w-[260px] 2xl:w-[448px] font-semibold text-[#031B07] text-right">
                                ${` ${item[0].price! * item.length}`}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-[20px] pt-[14.5px] leading-[140%] text-[#031B07] font-medium">
                    <h3 className="text-[16px] leading-[19px] font-semibold">
                        Total
                    </h3>
                    <h3>{`$${sum}`}</h3>
                </div>
            </div>
        </>
    );
};

export interface UserId {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    verified: boolean;
    status: string;
    CompanyPurchase: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    userStore: string;
}

export interface OrderId {
    _id: string;
    userId: string;
    invoiceNo: number;
    status: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface ReviewDataType {
    _id: string;
    userId: UserId;
    orderId: OrderId;
    status: string;
    serviceType: string;
    packageType: string;
    gigUrl: string;
    gigPrice: number;
    rating: number;
    privateFeedback: boolean;
    includeVideoReview: boolean;
    reviewCode: string;
    __v: number;
    createdAt: Date;
    updatedAt: Date;
    buyerCountry: string;
    buyerType: string;
    customReview: string;
}

export default NewOrderSummary;
