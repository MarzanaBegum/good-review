import React, { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import SelectField from "../Shared/SelectField";
import Rating from "../Rating";
import { buyerTypeOptionValue } from "../../utils/const";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";
import classNames from "classnames";
import { useRouter } from "next/router";
import PrivateFeedbackModal from "../Modal/PrivateFeedbackModal";
import useServiceData from "../../hooks/useServiceData";
import { countries } from "../../utils/country";
import pricingQuery from "../../api-query/usePricingQuery";
import CustomReviewSelect from "../CustomReviewSelect";
import uniqueRandom from "unique-random";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";
import { toast } from "react-toastify";



const ReviewDetails = ({ reviewIndex, setReviewIndex, setSelectedReview, filterSimpleArray, filterCustomArray, filterActiveArray }: any) => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const { serviceData, updateServiceData, setServiceData } = useServiceData();
    const gigUrlValue: any = (reviewIndex !== undefined && serviceData?.reviews[reviewIndex] !== undefined) && serviceData?.reviews[reviewIndex];
    const [checked, setChecked] = useState(false);
    const [checkFeedback, setCheckFeedback] = useState(false);
    const [buyerCountry, setBuyerCountry] = useState("");
    const [rating, setRating] = useState(0);
    const random = uniqueRandom(1, 1000);
    const getRandomNumber = random();
    const [user, setUser] = useAtom(USER_STATE);

    const hanldGigPrice = (e: any) => {
        if (reviewIndex !== undefined) {
            handleUpdateData(serviceData, { gigPrice: Number(e) }, updateServiceData, reviewIndex)
        }
    }
    const handleRating = (e: any) => {
        if (reviewIndex !== undefined) {
            handleUpdateData(serviceData, { rating: Number(e) }, updateServiceData, reviewIndex)
        }
    }
    const hanldGigUrl = (e: any) => {
        if (reviewIndex !== undefined) {
            handleUpdateData(serviceData, { gigUrl: e }, updateServiceData, reviewIndex)
        }
    }
    const handleCustomReview = (e: any) => {
        if (reviewIndex !== undefined) {
            handleUpdateData(serviceData, { customReview: e }, updateServiceData, reviewIndex)
        }
    }
    const handleBuyerCountry = (e: any) => {
        if (reviewIndex !== undefined) {
            setBuyerCountry(e)
            handleUpdateData(serviceData, { buyerCountry: e }, updateServiceData, reviewIndex)
        }
    }
    const handleBuyerType = (e: any) => {
        if (reviewIndex !== undefined) {
            handleUpdateData(serviceData, { buyerType: e }, updateServiceData, reviewIndex)
        }
    }
    const handleVideoReviewChecked = () => {
        if (reviewIndex !== undefined) {
            setChecked(!checked)
            if (gigUrlValue.includeVideoReview === true) {
                handleUpdateData(serviceData, { includeVideoReview: false }, updateServiceData, reviewIndex)
            } else {
                handleUpdateData(serviceData, { includeVideoReview: true }, updateServiceData, reviewIndex)
            }
        }
    }


    const initialValues = {
        gig_url: "",
        gig_price: "",
        country: "asd",
        buyer_type: "",
        bio: ""
    };
    const validationSchema = Yup.object().shape({
        gig_url: Yup.string().label("Gig url"),
        gig_price: Yup.number().label("Gig price"),
        country: Yup.string().label("Country"),
        buyer_type: Yup.string().label("Buyer type"),
        bio: Yup.string().label("bio")
    });

    const Orderdata = {
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

    const validation = serviceData?.reviews.every((item: any) => item.gigPrice && item.gigUrl)
    const { data, isLoading } = pricingQuery(serviceData.serviceType);


    useEffect(() => {
        setChecked(gigUrlValue.includeVideoReview)
        setCheckFeedback(gigUrlValue.privateFeedback)
        setBuyerCountry(gigUrlValue.buyerCountry);
        if (gigUrlValue.rating !== undefined) {
            setRating(gigUrlValue.rating)
        }
    }, [reviewIndex, buyerCountry, rating])

    const allReviews = serviceData && serviceData?.reviews;


    const simpleClientData = allReviews.filter((item: any) => item.packageType === "simple client");
    const customClientData = allReviews.filter((item: any) => item.packageType === "custom client");
    const activeClientData = allReviews.filter((item: any) => item.packageType === "active client");

    // const packagePrice = data && data.reduce((obj, cur) => ({...obj, [cur.packageType]: cur.price}), {});
    const simplePackagePrice = data && data.filter((item: any) => item.packageType === "simple client");
    const customPackagePrice = data && data.filter((item: any) => item.packageType === "custom client");
    const activePackagePrice = data && data.filter((item: any) => item.packageType === "active client");


    const simpleClientItemTotal: any = simplePackagePrice && simplePackagePrice?.length > 0 ? Number(simpleClientData?.length * simplePackagePrice[0].price) : 0;
    const customClientItemTotal: any = customPackagePrice && customPackagePrice?.length > 0 ? Number(customClientData?.length * customPackagePrice[0].price) : 0;
    const activeClientItemTotal: any = activePackagePrice && activePackagePrice?.length > 0 ? Number(activeClientData?.length * activePackagePrice[0].price) : 0;
    const total = Number(simpleClientItemTotal + customClientItemTotal + activeClientItemTotal);


    const customIndex = allReviews.findIndex((x: any) => x.packageType === "custom client");
    const activeIndex = allReviews.findIndex((x: any) => x.packageType === "active client");


    const handleUpdateClick = () => {
        if (filterActiveArray.length === 0 && filterCustomArray.length === 0) {
            return toast.error("Premium packages are not added yet, please try again later !")
        }
        if (customIndex !== -1) {
            setReviewIndex(customIndex)
            setSelectedReview(customIndex)
        } else if (activeIndex !== -1) {
            setReviewIndex(activeIndex)
            setSelectedReview(activeIndex)
        } else {
            updateServiceData("reviews", [
                ...serviceData.reviews,
                {
                    ...Orderdata,
                    packageType: filterActiveArray && filterActiveArray.length > 0 ? "active client" : "custom client",
                    reviewCode: randomHndler(getRandomNumber),
                },
            ]);
        }
    }

    return (
        <>
            <div className="px-[20px] py-[30px] relative">
                <div className={classNames(serviceData && serviceData?.reviews?.length === 0 ? "absolute top-0 left-0 z-10 w-full h-full bg-[gray] opacity-0" : "")}></div>
                <h2 className="text-[#626F63] font-medium text-[20px] leading-[28px] mb-[20px] capitalize">
                    {gigUrlValue.packageType ? gigUrlValue.packageType : "No Review selected"}
                    <span className="font-normal text-[14px] leading-[20.44px]">
                        {gigUrlValue.reviewCode && `(Review #${gigUrlValue.reviewCode})`}
                    </span>
                </h2>

                <Formik
                    initialValues={initialValues}
                    // All field will store here on value
                    onSubmit={(value) =>
                        router.push("/dashboard/services/checkout")

                    }
                    validationSchema={validationSchema}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            <div className="w-[100%] xl:w-[50%]">
                                <h3 className="text-[16px] label text-[#031B07] leading-[23.36px] font-normal mb-[8px]">
                                    Choose Rating
                                </h3>
                                <Rating
                                    defaultValue={rating}
                                    onChange={(v) => handleRating(v)}
                                    className="gap-1 [&>img]:xl:w-[40px] [&>img]:xl:h-[40px] [&>img]:w-[25px] [&>img]:h-[25px]"
                                />
                            </div>
                            <div className="flex flex-col xl:flex-row  gap-[30px] mt-[30px]">
                                <div className="w-[100%] xl:w-[50%]">
                                    <InputField
                                        value={gigUrlValue !== undefined && reviewIndex !== undefined && gigUrlValue.gigUrl}
                                        className="!w-[100%]"
                                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                                        placeholder="Enter Gig URL"
                                        name="gig_url"
                                        type="text"
                                        label="Gig Url"
                                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px]"
                                        onChange={(e: any) => hanldGigUrl(e.target.value)}
                                    />
                                </div>
                                <div className="w-[100%] xl:w-[50%]">
                                    <InputField
                                        value={gigUrlValue !== undefined && reviewIndex !== undefined && gigUrlValue.gigPrice}
                                        className="!w-[100%]"
                                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                                        placeholder="Enter Gig price"
                                        name="gig_price"
                                        type="number"
                                        label="Gig Price"
                                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px]"
                                        onChange={(e: any) => hanldGigPrice(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col 2xl:flex-row gap-[30px] mt-[30px]">
                                <div className="w-[100%] 2xl:w-[50%]">
                                    <CustomReviewSelect
                                        value={gigUrlValue.buyerCountry ? { label: gigUrlValue.buyerCountry !== undefined ? gigUrlValue.buyerCountry : "", value: gigUrlValue.buyerCountry } : "" as any}
                                        name="country"
                                        options={countries}
                                        label="Select a Buyer’s Country (Optional)"
                                        placeholder="Select country"
                                        onChange={(e: any) => handleBuyerCountry(e.value)}
                                        isUpdate={gigUrlValue && gigUrlValue.packageType === "simple client" ? true : false}
                                        isOptionDisabled={gigUrlValue && gigUrlValue.packageType === "simple client" ? true : false}
                                        handleClick={handleUpdateClick}
                                    />
                                </div>
                                <div className="w-[100%] 2xl:w-[50%]">
                                    <CustomReviewSelect
                                        value={gigUrlValue?.buyerType ? { label: gigUrlValue.buyerType.charAt(0).toUpperCase() + gigUrlValue.buyerType.slice(1), value: gigUrlValue.buyerTyp } : "" as any}
                                        name="buyer_type"
                                        options={buyerTypeOptionValue}
                                        label="Type of Buyer"
                                        placeholder="Select Review type"
                                        onChange={(e: any) => handleBuyerType(e.value)}
                                        isUpdate={gigUrlValue && gigUrlValue.packageType === "simple client" ? true : false}
                                        isOptionDisabled={gigUrlValue && gigUrlValue.packageType === "simple client" ? true : false}
                                        handleClick={handleUpdateClick}
                                    />
                                </div>
                            </div>

                            <div className="mt-[30px]">
                                <TextAreaField
                                    inputClass="!h-[155px]"
                                    name="bio"
                                    type="text"
                                    required
                                    value={(gigUrlValue !== undefined && reviewIndex !== undefined) && gigUrlValue.customReview ? gigUrlValue.customReview : ""}
                                    label="Custom public review (Optional)"
                                    onChange={(e: any) => handleCustomReview(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-[12px] items-center  cursor-pointer mt-[30px]">
                                <div
                                    onClick={() => { gigUrlValue.privateFeedback === false ? setOpenModal(true) : handleUpdateData(serviceData, { privateFeedback: false }, updateServiceData, reviewIndex) }}
                                    className={classNames(
                                        " w-[16px] h-[16px] rounded-[4px] text-white flex items-center justify-center",
                                        gigUrlValue.privateFeedback
                                            ? "bg-primary border border-primary"
                                            : "bg-[#CCCED6] border border-[#CCCED6]"
                                    )}
                                >
                                    <p
                                        className={classNames(
                                            gigUrlValue.privateFeedback ? "text-[14px]" : ""
                                        )}
                                    >
                                        ✔
                                    </p>
                                </div>
                                <p className="font-normal text-[14px] leading-[20.44px] text-[#031B07]">
                                    Private Feedback (Included)
                                </p>
                                <img
                                    src="/images/info.svg"
                                    alt="info"
                                    className="w-[13.33px] h-[13.33px]"
                                />
                            </div>
                            <div className="flex gap-[12px] items-center  cursor-pointer mt-[30px]">
                                <div
                                    onClick={handleVideoReviewChecked}
                                    className={classNames(
                                        " w-[16px] h-[16px] rounded-[4px]  flex items-center justify-center",
                                        checked
                                            ? "bg-primary border border-primary"
                                            : "bg-white border border-[#C1C4C0]"
                                    )}
                                >
                                    {checked && (
                                        <p
                                            className={classNames(
                                                checked
                                                    ? "text-white text-[14px]"
                                                    : ""
                                            )}
                                        >
                                            ✔
                                        </p>
                                    )}
                                </div>
                                <p className="font-normal text-[14px] leading-[20.44px] text-[#031B07]">
                                    include Video Review
                                </p>
                                <img
                                    src="/images/info.svg"
                                    alt="info"
                                    className="w-[13.33px] h-[13.33px]"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-[40px] sm:gap-[20px] mt-[20px] sm:mt-[30px] sm:items-center justify-between">
                                <h1 className="text-[16px] sm:text-[20px] font-medium leading-[146%] text-left text-[#334535]">
                                    Total:{" "}
                                    <span className="font-semibold text-black">
                                        ${total}
                                    </span>
                                </h1>
                                <button
                                    type="submit"
                                    disabled={serviceData?.reviews && serviceData?.reviews?.length === 0 || validation === false ? true : false}
                                    className={classNames((serviceData?.reviews && serviceData?.reviews?.length === 0) || validation === false ? "disabled:transform-none disabled:transition-none disabled:bg-[#CCCED6] disabled:cursor-not-allowed disabled:text-white w-[100%] sm:w-[301px] lg:w-[220px] xl:w-[301px] h-[53px] 4xl:h-[56px] rounded-[8px] text-[18px] font-semibold leading-[25px]" : " mx-1 transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110 w-[100%] sm:w-[301px] lg:w-[220px] xl:w-[301px] h-[53px] 4xl:h-[56px] rounded-[8px] bg-primary cursor-pointer text-white text-[18px] font-semibold leading-[25px]")}
                                >
                                    Next
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <PrivateFeedbackModal
                reviewIndex={reviewIndex}
                isOpen={openModal}
                handleModal={() => setOpenModal(!openModal)}
                setCheckFeedback={setCheckFeedback}
            />
        </>
    );
};

export default ReviewDetails;



const handleUpdateData = (data: any, updateValue: any, updateState: any, index: number) => {
    let newAllReview = [...data.reviews];
    const prevData = newAllReview[index];
    newAllReview[index] = { ...prevData, ...updateValue };
    updateState("reviews", newAllReview);
    console.log({ prevData });
}

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