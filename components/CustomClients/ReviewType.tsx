import React, { useEffect, useState } from "react";
import useServiceData from "../../hooks/useServiceData";
import CrossIcon from "../CustomIcons/CrossIcon";
import PlusIcon from "../CustomIcons/PlusIcon";
import uniqueRandom from "unique-random";
import classNames from "classnames";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";

const ReviewType = ({
    serviceData,
    setServiceData,
    updateServiceData,
    setReviewIndex,
    selectedReview,
    setSelectedReview,
    filterActiveArray,
    filterCustomArray,
    filterSimpleArray
}: any) => {
    const allReviews = serviceData?.reviews;
    const [user, setUser] = useAtom(USER_STATE);
    const [reviews, setReviews] = useState([]);


    const random = uniqueRandom(1, 1000);
    const getRandomNumber = random();
    useEffect(() => {
        // const simpleClientData = allReviews.map((item:any) => item.packageType === "simpleClient")
        setReviews(serviceData.reviews);
    }, [reviews, serviceData]);


    const data = {
        userId: user && user._id,
        status: "pending",
        serviceType: serviceData && serviceData.serviceType,
        gigUrl: "",
        gigPrice: 0,
        rating: 0,
        // customReview: "",
        privateFeedback: false,
        includeVideoReview: false,
        // buyerCountry: "",
        // buyerType: "",
    };

    const handleSimpleClient = () => {
        // setServiceData([...serviceData, data]);
        updateServiceData("reviews", [
            ...serviceData.reviews,
            {
                ...data,
                packageType: "simple client",
                reviewCode: randomHndler(getRandomNumber),
            },
        ]);
    };
    const handleCustomeClient = () => {
        updateServiceData("reviews", [
            ...serviceData.reviews,
            {
                ...data,
                packageType: "custom client",
                reviewCode: randomHndler(getRandomNumber),
            },
        ]);
    };
    const handleActiveClient = () => {
        updateServiceData("reviews", [
            ...serviceData.reviews,
            {
                ...data,
                packageType: "active client",
                reviewCode: randomHndler(getRandomNumber),
            },
        ]);
    };
    const handleRemoveSimpleClient = (item: any) => {
        const removeReview =
            serviceData &&
            allReviews.filter((review: any) => review.reviewCode !== item);
        updateServiceData("reviews", removeReview);
    };
    const handleRemoveCustomClient = (item: any) => {
        const removeReview =
            serviceData &&
            allReviews.filter((review: any) => review.reviewCode !== item);
        updateServiceData("reviews", removeReview);
    };
    const handleRemoveActiveClient = (item: any) => {
        const removeReview =
            serviceData &&
            allReviews.filter((review: any) => review.reviewCode !== item);
        updateServiceData("reviews", removeReview);
    };

    const handlesimpleSelectedReview = (e: any) => {
        setSelectedReview(e);
        setReviewIndex(e);
    };
    const handleCustomReview = (e: any) => {
        setSelectedReview(e);
        setReviewIndex(e);
    };
    const handleActive = (e: any) => {
        setSelectedReview(e);
        setReviewIndex(e);
    };
    useEffect(() => {
        setReviewIndex(0)
        setSelectedReview(0)
    }, [allReviews?.length]);

    return (
        <>
            <div className="px-[20px] py-[22px]">
                {/* simple client */}

                {(filterSimpleArray && filterSimpleArray.length) > 0 && <div>
                    {addClient("Simple Client", handleSimpleClient)}
                    <>
                        <div className="flex mt-[22px] flex-col  gap-[10px]">
                            {reviews &&
                                reviews?.map(
                                    (item: any, index: number) =>
                                        item.packageType === "simple client" && (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    handlesimpleSelectedReview(
                                                        index
                                                    )
                                                }
                                                // onClick={() => handleSimpleClientUpdate(item.reviewCode, index)}
                                                className={classNames(
                                                    "cursor-pointer py-[10px] px-[10px]  rounded-[10px]  font-normal text-[16px] leading-[22px] flex justify-between items-center",
                                                    index === selectedReview
                                                        ? "bg-[#18BA33] text-white"
                                                        : "bg-[#E8FCEC] text-[#676B68]"
                                                )}
                                            >
                                                {`Review #${item.reviewCode}`}
                                                <div
                                                    onClick={() =>
                                                        handleRemoveSimpleClient(
                                                            item.reviewCode
                                                        )
                                                    }
                                                    className="cursor-pointer"
                                                >
                                                    <CrossIcon
                                                        width={16}
                                                        height={16}
                                                        stroke="#676879"
                                                    />
                                                </div>
                                            </div>
                                        )
                                )}
                        </div>
                    </>
                </div>}
                {/* simple client end */}
                {/* cunstom client start */}
                {filterCustomArray && filterCustomArray.length > 0 && <div className={classNames(filterSimpleArray && filterSimpleArray.length > 0 ? "mt-[30px]" : "")}>
                    {addClient("Custom Client", handleCustomeClient)}

                    <div className="flex flex-col mt-[22px] gap-[10px]">
                        {reviews &&
                            reviews?.map(
                                (item: any, index: number) =>
                                    item.packageType === "custom client" && (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                handleCustomReview(index)
                                            }
                                            className={classNames(
                                                "cursor-pointer py-[10px] px-[10px]  rounded-[10px]  font-normal text-[16px] leading-[22px] flex justify-between items-center",
                                                index === selectedReview
                                                    ? "bg-[#18BA33] text-white"
                                                    : "bg-[#E8FCEC] text-[#676B68]"
                                            )}
                                        >
                                            {`Review #${item.reviewCode}`}
                                            <div
                                                onClick={() =>
                                                    handleRemoveCustomClient(
                                                        item.reviewCode
                                                    )
                                                }
                                                className="cursor-pointer"
                                            >
                                                <CrossIcon
                                                    width={16}
                                                    height={16}
                                                    stroke="#676879"
                                                />
                                            </div>
                                        </div>
                                    )
                            )}
                    </div>
                </div>}
                {/* cunstom client end */}
                {filterActiveArray && filterActiveArray.length > 0 && <div className={classNames(filterSimpleArray && filterSimpleArray.length > 0 ? "mt-[30px]" : "")}>
                    {addClient("Active Client", handleActiveClient)}
                    <ul className="flex flex-col mt-[22px] gap-[10px]">
                        {reviews &&
                            reviews?.map(
                                (item: any, index: number) =>
                                    item.packageType === "active client" && (
                                        <div
                                            key={index}
                                            onClick={() => handleActive(index)}
                                            className={classNames(
                                                "cursor-pointer py-[10px] px-[10px]  rounded-[10px]  font-normal text-[16px] leading-[22px] flex justify-between items-center",
                                                index === selectedReview
                                                    ? "bg-[#18BA33] text-white"
                                                    : "bg-[#E8FCEC] text-[#676B68]"
                                            )}
                                        >
                                            {`Review #${item.reviewCode}`}
                                            <div
                                                onClick={() =>
                                                    handleRemoveActiveClient(
                                                        item.reviewCode
                                                    )
                                                }
                                                className="cursor-pointer"
                                            >
                                                <CrossIcon
                                                    width={16}
                                                    height={16}
                                                    stroke="#676879"
                                                />
                                            </div>
                                        </div>
                                    )
                            )}
                    </ul>
                </div>}
            </div>
        </>
    );
};

export default ReviewType;

const addClient = (clientType: string, handleAddClient: () => void) => {
    return (
        <div className="flex justify-between">
            <h2 className="font-semibold text-[16px] leading-[19.36px]">
                {clientType}
            </h2>
            <div
                onClick={handleAddClient}
                className="w-[22px] h-[22px] border border-primary rounded-[8px] flex items-center justify-center cursor-pointer"
            >
                <PlusIcon stroke="#18BA33" width={10} height={10} />
            </div>
        </div>
    );
};

function randomHndler(randomNumber: any) {
    const number = randomNumber && randomNumber.toString();
    if (number && number.length === 1) {
        return `000${number}`;
    } else if (number && number.length === 2) {
        return `00${number}`;
    } else if (number && number.length === 3) {
        return `0${number}`;
    } else {
        return number;
    }
}
