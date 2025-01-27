"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import rightArrow from "../../../public/assets/icons/east.svg";
import buysell from "../../../public/home/buysell.png";
import swap from "../../../public/home/swap.png";
import transfer from "../../../public/home/p2p.png";

const platformLinks = [
    {
        name: "Buy / Sell",
        href: "#",
        image: buysell,
    },
    {
        name: "Trade",
        href: "#",
        image: swap,
    },
    {
        name: "P2P",
        href: "#",
        image: transfer,
    },
];

const PlatformCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full">
            <div className="container-wrapper md:px-[60px] px-3 md:py-16 py-9 mx-auto">
                <div className="flex justify-between flex-col md:flex-row items-center md:gap-0 gap-8">
                    <div className="flex flex-col md:w-[427px] w-full gap-12">
                        <h2 className="text-primaryText md:text-[45px] md:leading-[52px] text-[28px] leading-9 font-bold">
                            One platform,
                            <br />
                            endless possibilities
                        </h2>
                        <div className="flex flex-col gap-5 md:text-[22px] md:leading-7 text-[16px] leading-6 text-primaryText">
                            {platformLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="flex gap-2 items-center w-fit"
                                >
                                    <h5
                                        className={
                                            hoveredIndex === index ? "text-primaryText font-bold" : "text-tertiaryText"
                                        }
                                    >
                                        {link.name}
                                    </h5>
                                    <Image
                                        src={rightArrow}
                                        alt="Right Arrow"
                                        className={hoveredIndex === index ? "h-[24px] w-[24px]" : "hidden"}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:h-[352px] h-auto md:w-[572px] w-full flex items-center justify-center">
                        <Image
                            src={hoveredIndex !== null ? platformLinks[hoveredIndex].image : buysell}
                            alt="Platform Image"
                            className="h-full w-full object-contain transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformCard;
