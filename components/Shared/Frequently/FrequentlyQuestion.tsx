/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import { QuestionsDataType } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { QuestionsDataType } from "../../../utils/const";

const FrequentlyQuestion = ({ data }: { data: QuestionsDataType }) => {
    const [isExpand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!isExpand);
    };
    return (
        <div>
            <div
                className={`cursor-pointer py-[20px] sm:py-[22px] 2xl:py-[20px]`}
                onClick={handleExpand}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between"
                >
                    <div className="sm:text-[16px] 2xl:text-[24px] leading-[125%] font-semibold text-[#031B07]">
                        {data.question}
                    </div>
                    <img
                        src="/icons/Checkbox.svg"
                        alt=""
                        className={`${
                            isExpand ? "rotate-180" : "rotate-0"
                        } w-[24px] h-[24px] transition-all duration-200`}
                    />
                </motion.div>
                <AnimatePresence initial={false}>
                    {isExpand && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "fit-content" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }} // TODO: Duration changeable
                            className="overflow-hidden"
                        >
                            <div className="pt-[8px]"></div>
                            <div className="text-[#848F85] text-[14px] font-normal xl:font-medium mr-[20px] md:mr-[50px] lg:mr-[26px] xl:text-[15px] 2xl:text-lg xl:leading-[24px] leading-[20px]">
                                {data.answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FrequentlyQuestion;
