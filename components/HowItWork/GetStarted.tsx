import React, { useRef, useState } from "react";
import { startedData } from "../../utils/const";

const GetStarted = () => {
    return (
        <div className="container py-[30px] sm:py-[40px] lg:py-[80px] 2xl:py-[140px]">
            <h3 className="font-semibold text-center text-[20px] leading-[25px] sm:text-[24px] sm:leading-[30px] lg:text-[40px] lg:leading-[49px] xl:text-[40px] xl:leading-[49px] 2xl:text-[48px] 2xl:leading-[57px]">
                Get Started With 3 Easy Steps
            </h3>

            <div className="relative ">
                <div className="flex flex-col sm:flex-row items-center  mt-[20px] sm:mt-[40px] 2xl:mt-[60px] gap-[20px] sm:gap-[30px] lg:gap-[60px] 2xl:gap-[160px] z-50">
                    {startedData.map((item: any) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-[60px] h-[60px] sm:w-[95px] sm:h-[95px] lg:w-[100px] lg:h-[100px] bg-[#E8FCEC] rounded-full flex justify-center items-center font-bold text-[24px] leading-[28px] sm:text-[40px] lg:text-[50px] xl:w-[120px] xl:h-[120px] 2xl:text-[64px]">
                                {item.id}
                            </div>
                            <h2 className="text-[16px] lg:text-[24px] lg:leading-[30px] font-medium sm:font-semibold leading-[21px]  mt-[16px] mb-[10px] text-[#252B42]">
                                {item.title}
                            </h2>
                            <p className="text-[#334535] font-normal text-[14px] 2xl:text-[16px] 2xl:leading-[23.36px] leading-[20.44px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <img
                    src="/icons/line-icon.svg"
                    alt=""
                    className="absolute 2xl:w-[820px] 2xl:top-[40px] 2xl:left-[190px] w-[400px] top-[30px] left-[90px] md:w-[500px] md:top-[30px] md:left-[100px] lg:w-[600px] lg:left-[140px] xl:w-[620px] xl:left-[210px] xl:top-[55px] 3xl:w-[830px] 3xl:top-[40px] 3xl:left-[210px]  4xl:top-[40px] 4xl:left-[240px] 4xl:w-[1000px] hidden sm:block -z-10"
                />
            </div>

            <VideoControls />
        </div>
    );
};

export default GetStarted;
GetStarted.defaultProps = {
    count: "01",
    title: "",
    description: ``,
    videoUrl: "hello",
    isExpand: true,
    border: true,
};

const VideoControls = () => {
    const [isPlay, setPlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlay(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setPlay(false);
        }
    };

    return (
        <div className="xs:w-[303px] sm:w-[532px] w-full md:w-[610px] lg:w-[864px]  xl:w-[970px]  2xl:w-[1220px] h-auto mx-auto  relative mt-[20px] sm:mt-[30px]   md:mt-[40px]   3xl:mt-[60px] rounded-[20px]">
            <video
                className="w-full h-full rounded-[20px]"
                ref={videoRef}
                controls
            >
                <source src="/assets/videos/test.mp4" type="video/mp4" />
            </video>
            {!isPlay && (
                <>
                    <div>
                        <img
                            src="/icons/vide-poster.svg"
                            className="absolute top-0 left-0 xs:w-[303px] sm:w-[532px] w-full md:w-[610px] lg:w-[864px]  xl:w-[970px]  2xl:w-[1220px] rounded-[20px] "
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="/icons/play-button.svg"
                            alt=""
                            onClick={handlePlay}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] 2xl:w-[160px] 2xl:h-[160px] cursor-pointer"
                        />
                    </div>
                </>
            )}
            {}
        </div>
    );
};
