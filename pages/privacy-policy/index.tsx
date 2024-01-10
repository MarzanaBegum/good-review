import React from "react";
import Layout from "../../components/Layout";
import { privacyPolicyData } from "../../utils/const";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="bg-[#FAFAFA]">
        <div className="container py-[30px] sm:pt-[50px] sm:pb-[100px] md:pt-[40px] md:pb-[90px] lg:pt-[80px] lg:pb-[120px] xl:pb-[100px] 3xl:pb-[51px] 4xl:pt-[100px] 4xl:pb-[123px]">
          <div className="w-[100%] sm:w-[560px] md:w-[608px] lg:w-[824px] xl:w-[940px] 2xl:w-[1100px] 3xl:w-[1060px] 4xl:w-[1193px]">
            <h1 className="text-[24px] mb-[30px] sm:text-[32px] sm:mb-[40px] md:text-[48px] xl:text-[56px] xl:mb-[60px] leading-[120%] text-[#031B07] font-bold">
              Privacy Policy
            </h1>
            <div>
              <ul className="flex flex-col gap-[20px] sm:gap-[50px] md:gap-[40px]">
                {privacyPolicyData.map((item: any) => (
                  <div key={item.id}>
                    <li className="text-[20px] sm:text-[24px] mb-[10px] leading-[120%] text-[#031706] font-semibold">
                      {item.title}
                    </li>
                    <p className="text-[14px] md:text-[16px] leading-[146%] font-normal text-[#3C403D]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
