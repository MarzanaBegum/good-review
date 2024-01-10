import React, { useRef } from "react";
import { NewHeroSection } from "../components/Home/HeroSection";
import MoreReview from "../components/Home/MoreReview";
import PowerfulTool from "../components/Home/PowerfulTool";
import PricingCard from "../components/Home/PricingCard";
import YourReview from "../components/Home/YourReview";
import Layout from "../components/Layout";
import FreequentSection from "../components/Shared/Frequently";
import NewSlider from "../components/Home/NewSlider";

function HomePage() {
    return (
        <div>
            <Layout>
                {/* <HeroSection /> */}
                <NewHeroSection />
                <YourReview />
                <MoreReview />
                <PricingCard />
                <PowerfulTool />
                {/* <Review /> */}
                <NewSlider />
                <FreequentSection />
            </Layout>
        </div>
    );
}

export default HomePage;
