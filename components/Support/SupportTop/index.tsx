/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import CreateTicketModal from "../../Modal/CreateTicketModal";

const SupportTop = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="w-[100%] mt-[30px] lg:mt-[50px] flex justify-between items-center">
                <h3 className="text-[#031B07] font-normal text-[14px] leading-[140%] lg:text-[16px] xl:text-[20px] xl:font-medium">
                    Ticket
                </h3>
                <div className="hidden lg:block">
                    {" "}
                    <button
                        onClick={() => setOpenModal(true)}
                        className="lg:w-[188px] lg:h-[53px] 3xl:h-[48px] text-[18px] font-medium border hover:bg-[#17B532] hover:text-[#FFFFFF] border-[#17B532] text-[#17B532] cursor-pointer rounded-[10px]"
                    >
                        Create ticket
                    </button>
                </div>
                <div className="lg:hidden">
                    <div
                        onClick={() => setOpenModal(true)}
                        className="w-[24px] h-[24px] flex items-center justify-center sm:w-[48px] sm:h-[48px] bg-[#17B532] rounded-[4px] cursor-pointer"
                    >
                        <img
                            src="/icons/plus-icon.svg"
                            alt="icon"
                            className="w-[7.75px] h-[7.75px] sm:w-[15.5px] sm:h-[15.5px]"
                        />
                    </div>
                </div>
            </div>
            <CreateTicketModal
                isOpen={openModal}
                onClose={() => setOpenModal(!openModal)}
            />
        </>
    );
};

export default SupportTop;
