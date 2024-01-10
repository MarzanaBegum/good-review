import React from "react";

function RatingRead({
    className,
    rating,
    height,
    width,
}: {
    className?: string;
    rating: number;
    height?: number | string;
    width?: number | string;
}) {
    return (
        <div className={"flex items-center gap-[5px] " + className}>
            {rating &&
                [...Array(Math.floor(rating))].map((v, i) => (
                    <img
                        height={height}
                        width={width}
                        key={i}
                        src="/icons/star.svg"
                        alt="star"
                    />
                ))}

            {rating &&
                [...Array(5 - Math.floor(rating))].map((v, i) => (
                    <img
                        height={height}
                        width={width}
                        key={i}
                        src="/icons/white-star.svg"
                        alt="star"
                    />
                ))}
        </div>
    );
}

RatingRead.defaultProps = {
    rating: 4.5,
};

export default RatingRead;
