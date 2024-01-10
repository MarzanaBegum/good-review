import Link from "next/link";
import React from "react";
import DashboardLayout from "../../../../components/Shared/DashboardLayout";
import CreateTicketForm from "../../../../components/Support/CreateTicketForm";

function index() {
  return (
    <>
      <DashboardLayout>
        <div className="max-w-[1385px] mt-[20px] sm:mt-[50px] flex justify-between items-center">
          <h3 className="text-[#031B07] font-normal text-[16px] leading-[140%] lg:text-[24px] xl:text-[20px] xl:font-medium">
           Create ticket
          </h3>
          <Link href="/dashboard/support">
          <button className="w-[160px] h-[48px] xl:w-[204px] xl:h-[53px] text-[18px] font-medium border bg-[#17B532] text-[#FFFFFF] border-[#17B532] cursor-pointer rounded-[8px]">
            Check all ticket
          </button>
          </Link>
        </div>
        <div className="pt-[20px] sm:pt-[40px]"></div>
        <CreateTicketForm/>
        <div className="pb-[40px]"></div>
      </DashboardLayout>
    </>
  );
}

export default index;
