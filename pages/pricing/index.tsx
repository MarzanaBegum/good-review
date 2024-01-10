import React from "react";
import PricingCard from "../../components/Home/PricingCard";
import Layout from "../../components/Layout";
import PlansCompare from "../../components/PlansCompare/PlansCompare";
import FreequentSection from "../../components/Shared/Frequently";
import TrustedClient from "../../components/Shared/TrustedClient";

const PricingPage = () => {
  return (
    <Layout>
      <>
        <PricingCard />
        <div className="pt-[20px] sm:pt-[40px] 2xl:pt-[0px]"></div>
        <div className="bg-[#FAFAFA] 2xl:bg-[#FFFFFF]">
          <div className="container sm:pt-[80px] sm:pb-[40px] md:py-[80px] 2xl:py-[0px]">
            <PlansCompare />
          </div>
        </div>
        <TrustedClient />
        <FreequentSection />
      </>
    </Layout>
  );
};

export default PricingPage;
