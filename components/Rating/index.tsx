import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Rating({
    className,
    onChange,
    height,
    width,
    defaultValue,
}: {
    className?: string;
    onChange?: (rating: number) => any;
    height?: number | string;
    width?: number | string;
    defaultValue?: any;
}) {
    const [hoverCount, setHoverCount] = useState(defaultValue);
    const [value, setValue] = useState(0);

    useEffect(() => {
        onChange && onChange(value);
    }, [value]);

    useEffect(() => {
        setHoverCount(defaultValue)
        setValue(defaultValue);
        console.log(value, "value inside useEffect")
    },[defaultValue])

    return (
        <div
            className={"flex items-center gap-[26px] xl:gap-[9px] " + className}
        >
            {[...Array(5)].map((v, i) => (
                <motion.img
                    height={height}
                    width={width}
                    key={i}
                    whileTap={{ scale: 1.5 }}
                    onMouseEnter={() => setHoverCount(i + 1)}
                    onMouseLeave={() => setHoverCount(0)}
                    src={
                        !hoverCount
                            ? i < value
                                ? "/icons/star.svg"
                                : "/icons/white-star.svg"
                            : hoverCount < i + 1
                            ? "/icons/white-star.svg"
                            : "/icons/star.svg"
                    }
                    onClick={() => setValue(i + 1)}
                    alt=""
                    className="cursor-pointer"
                />
            ))}
        </div>
    );
}

export default Rating;
