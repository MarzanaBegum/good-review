/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import CustomModal from "./CustomModal";

type ContactSuccessModalType = {
  isOpen: boolean;
  handleModal: () => void;
};

function ContactSuccess({ isOpen, handleModal }: ContactSuccessModalType) {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={handleModal}
      className="w-[calc(100vw-40px)] sm:w-[550px] lg:w-[610px] 2xl:w-[700px] 3xl:w-[800px] bg-[#fff] rounded-[10px] relative modal-scroll"
    >
      <div className="p-[20px] sm:p-[40px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-[60px] h-[60px] p-[10px] border border-[#18BA33] rounded-full">
            <img
              src="/icons/check-mark.svg"
              alt="logo"
              className="w-[30px] h-[30px] "
            />
          </div>
          <h1 className="text-[24px] sm:text-[28px] text-center mt-[30px] leading-[125%] font-semibold text-[#031B07]">
            Your Message has been sended
          </h1>
          <h3 className="mt-[12px] text-[14px] sm:text-[16px] font-normal leading-[146%] text-[#666666]">
            Thanks for your valuable message
          </h3>
          <div className="mt-[30px] text-center">
            <Link href="/">
              <button className="w-[137px] h-[40px] sm:w-[155px] sm:h-[48px] sm:text-[16px] xl:w-[168px] xl:h-[56px] xl:text-[18px] font-medium text-[#FFFFFF] bg-[#18BA33] hover:bg-[#109e28] transition-all duration-500 rounded-[10px] cursor-pointer">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}

export default ContactSuccess;
