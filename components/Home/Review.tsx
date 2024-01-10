import React, { useState } from "react";
import Slider from "react-slick";
import { fakeReview } from "../../utils/const";
import Rating from "../Rating";
import RatingRead from "../RatingRead";
import LeftArraow from "./../CustomIcons/LeftArraow";
import classNames from "classnames";
import { Settings } from "react-slick";

const Review = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleChange = (e: any) => {
        setSlideIndex(e);
    };

    const [slider, setSlider] = useState<any>();

    const settings: Settings = {
        slidesToShow: 4,
        autoplaySpeed: 100,
        infinite: true,
        arrows: false,
        slidesToScroll: 1,

        dots: false,
        afterChange: (e: any) => handleChange(e),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: false,
                    centerPadding: "10px",
                    slidesToShow: 1,
                    autoplaySpeed: 100,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    centerPadding: "-20px",
                    slidesToShow: 2,
                    autoplaySpeed: 100,
                },
            },
            {
                breakpoint: 1919,
                settings: {
                    arrows: false,
                    centerPadding: "-40px",
                    slidesToShow: 3,
                    autoplaySpeed: 100,
                },
            },
        ],
    };

    console.log(slideIndex, fakeReview.length);

    const handlePrev = () => {
        slider?.slickPrev();
    };

    const handleNext = () => {
        slider?.slickNext();
    };
    // lg:ml-[80px] 2xl:ml-[120px] 3xl:ml-[240px] 4xl:ml-[240px]
    return (
        <div className="">
            <div className="overflow-hidden ">
                <div className="text-center ">
                    <h3 className=" font-semibold text-[20px] leading-[25px] mb-[10px] lg:mb-[20px] w-[250px] sm:w-[100%] mx-auto sm:text-[24px] sm:leading-[33px] lg:text-[40px]  lg:leading-[48px] lg:w-[500px] 2xl:w-[100%] 2xl:text-[56px] 2xl:leading-[67px]  ">
                        What people say about our{" "}
                        <span className="text-primary">platform</span>
                    </h3>
                    <p className="font-normal text-[14px] leading-[20px] w-[280px] sm:w-[100%] mx-auto text-[#031B07] sm:leading-[20.44px] lg:text-[16px] lg:leading-[23.36px]">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem
                    </p>
                </div>
                <Slider
                    swipeToSlide
                    ref={(slider) => setSlider(slider)}
                    draggable={true}
                    {...settings}
                    className={classNames("mt-[20px] mx-[70px]")}
                >
                    {fakeReview.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="lg:px-[15px] w-[200px] 2xl:px-[20px] py-8 "
                        >
                            <div
                                style={{
                                    boxShadow:
                                        "0px 4px 28px rgba(29, 37, 30, 0.1)",
                                }}
                                className="bg-white w-[100%] xs:w-[343px] sm:w-[590px] lg:w-[100%] mx-auto relative"
                            >
                                <img
                                    src="/icons/quote.svg"
                                    alt=""
                                    className="absolute top-[-22px] left-[20px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] sm:left-[30px] sm:top-[-25px]"
                                />
                                <div className="px-[30px] py-[30px] sm:py-[60px] 2xl:px-[40px]">
                                    <p className="text-[#626F63] font-normal text-[14px] leading-[20.44px] 2xl:text-[16px] 2xl:leading-[23.36px]">{`"${item.review}"`}</p>
                                    <div className="mt-[30px] sm:mt-[40px] flex gap-[20px] items-center">
                                        <img
                                            src={item.profile}
                                            alt=""
                                            className="w-[72px] h-[72px] rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <h2 className="font-medium  text-[16px] leading-[23.36px] text-[#031B07] sm:text-[20px] sm:leading-[27px] lg:text-[16px] lg:leading-[21px]">
                                                {item.name}
                                            </h2>
                                            <p className="py-[6px] font-light text-[#C1C4C0] text-[12px] leading-[17.52px]">
                                                {item.sellerType}
                                            </p>
                                            <RatingRead
                                                rating={4}
                                                width={15}
                                                height={15}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex justify-center gap-[30px]">
                <button
                    className={classNames(
                        "w-[40px] h-[40px] rounded-full border ",
                        "border-primary"
                    )}
                    onClick={handlePrev}
                >
                    <div className="flex items-center justify-center">
                        <LeftArraow width={11} stroke={"#031B07"} />
                    </div>
                </button>
                <button
                    className={classNames(
                        "w-[40px] h-[40px] rounded-full border  rotate-180",
                        "border-primary"
                    )}
                    onClick={handleNext}
                >
                    <div className="flex items-center justify-center">
                        <LeftArraow width={11} stroke={"#031B07"} />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Review;
