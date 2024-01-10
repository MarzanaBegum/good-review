/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import CrossIcon from "../CustomIcons/CrossIcon";
import CustomModal from "./CustomModal";
import DownloadIcon from "./../CustomIcons/DownloadIcon";
import OrderLeftData from "../OrderModalData/OrderLeftData";
import OrderRightData from "../OrderModalData/OrderRightData";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../api";
import { toast } from "react-toastify";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { motion } from "framer-motion";
import RatingRead from "../RatingRead";
import classNames from "classnames";

type OrderDetailsModalType = {
  isOpen: boolean;
  handleModal: () => void;
  data?: any;
  refetch?: any;
};
export type InputType = {
  gigPrice: number;
  gigUrl: string;
  rating: number;
  customReview: string;
};

export const schema = yup.object({
  gigPrice: yup.number().positive().integer().label("Enter gig price here"),
  rating: yup.number().positive().integer().label("Give rating"),
  gigUrl: yup.string().label("Enter your gig url"),
  customReview: yup.string().label("Enter custom review"),
});
function OrderDetailsModal({
  isOpen,
  handleModal,
  data,
  refetch,
}: OrderDetailsModalType) {
  const [loading, setLoading] = useState(false);
  const [ratingNum, setRatingNum] = useState(data?.rating);
  const [hoverCount, setHoverCount] = useState(data?.rating);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: InputType) => {
    if (loading) return;

    setLoading(true);
    try {
      const inputData =
        formData.customReview !== ""
          ? {
              ...formData,
              rating: ratingNum,
            }
          : {
              gigPrice: formData.gigPrice,
              rating: ratingNum,
              gigUrl: formData.gigUrl,
            };
      const response = await api.put(`/review/${data._id}`, inputData);
      setLoading(false);
      refetch();
      handleModal();
      toast.success("Order updated successfully");
    } catch (err: any) {
      const errMessage = err.response ? err.response.data.message : err.message;
      setLoading(false);
      refetch();
      reset();
      handleModal();
      toast.error(errMessage);
    }
  };
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={() => {
        handleModal();
        reset();
      }}
      className="w-[calc(100vw-40px)] sm:w-[550px] lg:w-[610px] 2xl:w-[700px] 3xl:w-[800px] bg-[#fff] rounded-[6px] relative modal-scroll"
    >
      <div className="p-[20px] sm:p-[40px]">
        <div
          onClick={() => {
            handleModal();
            reset();
          }}
          className="absolute top-[16px] right-[16px] sm:top-[30px] sm:right-[30px] w-[24px] h-[24px] rounded-full border border-[#676B68] flex justify-center items-center cursor-pointer"
        >
          <CrossIcon width={15} height={15} stroke="#676B68" />
        </div>
        <h2 className="font-semibold text-[25px] sm:text-[32px] leading-[43.84px] text-[#626F63] text-center">
          Order Details
        </h2>
        <div className="mt-[30px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row justify-between gap-[40px]">
              <div className="flex flex-col gap-[16px] w-[100%] sm:w-[50%]">
                <OrderLeftData leftData={data} />
                <div className="flex flex-col gap-[10px]">
                  <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px] ">
                    Gig Url
                  </h2>
                  <input
                    {...register("gigUrl")}
                    placeholder="Enter your gig url"
                    disabled={data.status !== "pending"}
                    defaultValue={data.gigUrl}
                    className="text-[#5286FE] bg-transparent placeholder:text-[#626F63] text-[16px] font-normal border-none outline-none w-[100%]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[16px] w-[100%] sm:w-[50%]">
                <OrderRightData rightData={data} inputData={register} />
                <div className="flex flex-col gap-[10px]">
                  <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px] ">
                    Ratting
                  </h2>
                  {data.status === "completed" ||
                  data.status === "in progress" ||
                  data.status === "cancelled" ? (
                    <RatingRead rating={data?.rating} height={24} width={24} />
                  ) : (
                    <div
                      className={
                        "flex items-center xl:gap-[9px] gap-1 [&>img]:w-[25px] [&>img]:h-[25px]"
                      }
                    >
                      {[...Array(5)].map((v, i) => (
                        <motion.img
                          height={24}
                          width={24}
                          key={i}
                          whileTap={{ scale: 1.5 }}
                          onMouseEnter={() => setHoverCount(i + 1)}
                          onMouseLeave={() => setHoverCount(0)}
                          src={
                            !hoverCount
                              ? i < ratingNum
                                ? "/icons/star.svg"
                                : "/icons/white-star.svg"
                              : hoverCount < i + 1
                              ? "/icons/white-star.svg"
                              : "/icons/star.svg"
                          }
                          onClick={() => setRatingNum(i + 1)}
                          alt=""
                          className="cursor-pointer"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={classNames(
                (data.customReview === undefined &&
                  data.status === "completed") ||
                  data.status === "in progress"
                  ? "hidden"
                  : "mt-[16px]"
              )}
            >
              <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px]">
                Custom review messaage
              </h2>
              <input
                {...register("customReview")}
                placeholder="Enter your custom review"
                disabled={data.status !== "pending"}
                defaultValue={data.customReview}
                className="text-[#334535] mt-[10px] bg-transparent font-normal text-[16px] leading-[22px] placeholder:text-[#626F63] border-none outline-none w-[100%]"
              />
            </div>
            {data.status === "completed" && data.videoReview !== undefined && (
              <div className="mt-[16px]">
                <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px]">
                  Video review
                </h2>
                <a
                  href={data.videoReview}
                  className="cursor-pointer flex items-center gap-[12px] mt-[10px] text-[16px] font-semibold leading-[19.36px] text-primary"
                >
                  <DownloadIcon stroke="#18BA33" width={16} height={16} />
                  Download
                </a>
              </div>
            )}
            {data.status === "in progress" && (
              <div className="mt-[16px]">
                <h2 className="text-[#031B07] font-semibold text-[16px] leading-[19.36px]">
                  Video review
                </h2>
                <p className="mt-[10px] text-[#626F63] font-semibold text-[16px] leading-[19.36px]">
                  Will be available when order is completed
                </p>
              </div>
            )}
            {data.status === "pending" && (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[172px] h-[40px] bg-primary hover:bg-[#14a02b] transition-all duration-300 rounded-[10px] text-[white] font-medium text-[14px] leading-[19px] mt-[30px] cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <LoadingAnimation color="white" />
                    </span>
                  ) : (
                    "Update order"
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </CustomModal>
  );
}

export default OrderDetailsModal;
