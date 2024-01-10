/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useState } from "react";
import CustomModal from "./CustomModal";
import classNames from "classnames";
import useServiceData from "../../hooks/useServiceData";

type PrivateFeedbackModalType = {
  isOpen: boolean;
  handleModal: () => void;
  setCheckFeedback?: any;
  data?: any;
  reviewIndex?: any;
};

function PrivateFeedbackModal({
  isOpen,
  handleModal,
  setCheckFeedback,
  data,
  reviewIndex
}: PrivateFeedbackModalType) {
  const [loading, setLoading] = useState(false);
  const { serviceData, updateServiceData, setServiceData } = useServiceData();
  console.log("reviewIndex:", reviewIndex, "serviceData:", serviceData)
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={handleModal}
      className="w-[calc(100vw-40px)] sm:w-[550px] lg:w-[610px] 2xl:w-[700px] 3xl:w-[800px] bg-[#fff] rounded-[6px] relative"
    >
      <div className="p-[20px] sm:p-[40px]">
        <img
          src="/icons/client3.svg"
          alt=""
          className="w-[80px] h-[80px] mx-auto"
        />
        <h2 className="text-center mt-[24px] text-[20px] w-[300px] 2xl:w-[400px] mx-auto lg:text-[24px] leading-[125%] text-[#031B07] font-semibold">
          Are you sure you want to add Private feedback service ?
        </h2>
        <div className="flex flex-col items-center mt-[24px] gap-[24px]">
          <button
            onClick={() => {
              setCheckFeedback(true);
              handleModal();
              handleUpdateData(serviceData, { privateFeedback: true }, updateServiceData, reviewIndex)
            }}
            className="w-[100%] sm:w-[290px] 2xl:w-[304px] h-[48px] text-[18px] font-medium text-white bg-[#18BA33] rounded-[10px]"
          >
            Upgrade to active client
          </button>
          <button
            onClick={() => {
              setCheckFeedback(false);
              handleModal();
            }}
            className="w-[100%] sm:w-[290px] 2xl:w-[304px] h-[48px] text-[18px] font-medium text-[#334535] bg-[#DBDCDA] rounded-[10px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </CustomModal>
  );
}

export default PrivateFeedbackModal;


const handleUpdateData = (data: any, updateValue: any, updateState: any, index: number) => {
  let newAllReview = [...data.reviews];
  const prevData = newAllReview[index];
  newAllReview[index] = { ...prevData, ...updateValue };
  updateState("reviews", newAllReview);
  console.log({ prevData });
}