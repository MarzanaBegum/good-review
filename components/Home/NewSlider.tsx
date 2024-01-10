import classNames from "classnames";
import React, { useState } from "react";
import Slider from "react-slick";
import { fakeReview } from "../../utils/const";
import LeftArraow from "../CustomIcons/LeftArraow";
import RatingRead from "../RatingRead";
import Carousel, { ResponsiveType } from "react-multi-carousel";

function NewSlider() {
    const [slider, setSlider] = useState<any>();

    const [transform, setTransform] = useState(0);

    const handlePrev = () => {
        slider.previous();
    };

    const handleNext = () => {
        slider.next();
    };

    const responsive: ResponsiveType = {
        bigPc: {
            breakpoint: { min: 1680, max: 3000 },
            items: 4,
        },
        pc: {
            breakpoint: { min: 1440, max: 1679 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1439, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const [arrow, setArrow] = useState("left");

    return (
        <div className="">
            <div className="overflow-hidden ">
                <div className="text-center ">
                    <h3 className=" font-semibold text-[20px] leading-[25px] mb-[10px] lg:mb-[20px] w-[250px] sm:w-[100%] mx-auto sm:text-[24px] sm:leading-[33px] lg:text-[40px]  lg:leading-[48px] lg:w-[500px] 2xl:w-[100%] 2xl:text-[56px] 2xl:leading-[67px]  ">
                        What people say about our{" "}
                        <span className="text-primary">platform</span>
                    </h3>
                    <p className="font-normal text-[14px] leading-[20px] w-[280px] sm:w-[100%]  mx-auto text-[#031B07] sm:leading-[20.44px] lg:text-[16px] lg:leading-[23.36px]">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem
                    </p>
                </div>
                <div className="xl:pt-[80px] pt-[28px]"></div>
                <Carousel
                    ref={(el) => setSlider(el)}
                    ssr
                    responsive={responsive}
                    containerClass=" lg:pl-[150px] 2xl:pl-[200px]   lg:pb-5 lg:visible"
                    arrows={false}
                    additionalTransfrom={-transform}
                    afterChange={(
                        prevSlide,
                        { slidesToShow, totalItems, currentSlide }
                    ) => {
                        if (totalItems - slidesToShow === currentSlide) {
                            setArrow("right");
                        } else if (currentSlide == 0) {
                            setArrow("left");
                        } else {
                            setArrow("");
                        }
                    }}
                    beforeChange={(nextSlide, state) => {
                        if (state.deviceType === "desktop") {
                            if (nextSlide !== 0 && transform !== 180) {
                                setTransform(180);
                            }
                            if (nextSlide === 0 && transform === 180) {
                                setTransform(0);
                            }
                        }
                        if (
                            state.deviceType === "pc" ||
                            state.deviceType === "bigPc"
                        ) {
                            if (nextSlide !== 0 && transform !== 230) {
                                setTransform(230);
                            }
                            if (nextSlide === 0 && transform === 230) {
                                setTransform(0);
                            }
                        }
                    }}
                >
                    {fakeReview.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="lg:px-[15px] 2xl:px-[20px] py-8 "
                        >
                            <div
                                style={{
                                    boxShadow:
                                        "0px 4px 28px rgba(29, 37, 30, 0.1)",
                                }}
                                className="bg-white w-[100%] sm:rounded-[10px] xs:w-[343px] sm:w-[590px] lg:w-[100%] mx-auto relative"
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
                                            className="w-[72px] h-[72px] rounded-full object-cover"
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
                </Carousel>
            </div>
            <div className="flex justify-center gap-[30px] 2xl:gap-10">
                <button
                    className={classNames(
                        "w-[40px] h-[40px] 2xl:h-[64px] 2xl:w-[64px] group  transition-all duration-200 rounded-full border ",
                        arrow === "left"
                            ? "border-[#C1C4C0] bg-[#DBDCDA]"
                            : "border-primary hover:bg-primary"
                    )}
                    onClick={handlePrev}
                >
                    <div className="flex items-center justify-center">
                        <LeftArraow
                            width={11}
                            stroke={arrow === "left" ? "#929A92" : "#031B07"}
                            groupClassName={
                                arrow !== "left"
                                    ? "group-hover:stroke-white transition-all duration-200"
                                    : ""
                            }
                        />
                    </div>
                </button>
                <button
                    className={classNames(
                        "w-[40px] h-[40px] 2xl:h-[64px] 2xl:w-[64px] group transition-all duration-200 rounded-full border  rotate-180",
                        arrow === "right"
                            ? "border-[#C1C4C0] bg-[#DBDCDA]"
                            : "border-primary hover:bg-primary"
                    )}
                    onClick={handleNext}
                >
                    <div className="flex items-center justify-center">
                        <LeftArraow
                            width={11}
                            stroke={arrow === "right" ? "#929A92" : "#031B07"}
                            groupClassName={
                                arrow !== "right"
                                    ? "group-hover:stroke-white transition-all duration-200"
                                    : ""
                            }
                        />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default NewSlider;
