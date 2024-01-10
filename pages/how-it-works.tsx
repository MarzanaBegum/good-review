import React from "react";
import Benefit from "../components/HowItWork/Benefit";
import GetStarted from "../components/HowItWork/GetStarted";
import Hero from "../components/HowItWork/Hero";
import Layout from "../components/Layout";
import FreequentSection from "../components/Shared/Frequently";
import TrustedClient from "../components/Shared/TrustedClient";

const HowItWork = () => {
    return (
        <Layout>
            <Hero />
            <TrustedClient bg="bg-[#E8FCEC]" />
            <GetStarted />
            <Benefit />
            <FreequentSection />
        </Layout>
    );
};

export default HowItWork;
