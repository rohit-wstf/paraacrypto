"use client";
import { motion } from "framer-motion";
import React from "react";
import Image, { StaticImageData } from "next/image";
import ethereum from "../../../public/assets/icons/eth.png";
import partisia from "../../../public/assets/icons/partisia.png";
import polkadot from "../../../public/assets/icons/polkadot.png";
import base from "../../../public/assets/icons/base.png";
import hive from "../../../public/assets/icons/hive.png";
import ic from "../../../public/assets/icons/ic.png";
import stellar from "../../../public/assets/icons/stellar.png";
import optimism from "../../../public/assets/icons/optimism.png";
import polygon from "../../../public/assets/icons/partisia.png";
import tezos from "../../../public/assets/icons/tezos.png";
import arbitrum from "../../../public/assets/icons/arbitrum.png";
import avalanche from "../../../public/assets/icons/avalanche.png";

interface CarouselProps {
    images: StaticImageData[];
    speed: number;
    direction: "left" | "right";
}

const images: StaticImageData[] = [
    ethereum, partisia, polkadot, base, hive, ic, stellar, optimism, polygon, tezos, arbitrum, avalanche
];

const carouselData = Array(14)
    .fill(null)
    .map((_, index) => ({
        speed: 25 + Math.random() * 10,
        direction: index % 2 === 0 ? ("left" as const) : ("right" as const),
        offset: index * 16,
    }));

const Carousel = () => {
    return (
        <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 -rotate-[60deg] scale-150 -left-[90%]">
                {carouselData.map((carousel, index) => (
                    <div
                        key={index}
                        className="hover:pause relative group"
                        style={{
                            transform: `translateY(${carousel.offset}px)`,
                        }}
                    >
                        <InfiniteCarousel
                            images={images}
                            speed={carousel.speed}
                            direction={carousel.direction}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel;

const InfiniteCarousel: React.FC<CarouselProps> = ({
    images,
    speed,
    direction,
}) => {
    return (
        <div className="relative flex overflow-hidden group">
            <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={{
                    x: direction === "left" ? ["-16.666%", "-50%"] : ["-50%", "-16.666%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...images, ...images, ...images, ...images, ...images].map((image, index) => (
                    <div
                        key={index}
                        className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] overflow-hidden flex-shrink-0 rounded-lg "
                    >
                        <Image
                            src={image}
                            alt={`Carousel image ${index}`}
                            fill
                            sizes="(max-width: 768px) 100px, 200px"
                            className="object-cover rotate-[90deg]"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};