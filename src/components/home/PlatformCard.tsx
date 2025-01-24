"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import unversityCrest from "../../../public/university crest.png";
import rightArrow from "../../../public/assets/icons/east.svg";


const platformLinks = [
    {
        name: "Buy / Sell",
        href: "#"
    },
    {
        name: "Trade",
        href: "#"
    },
    {
        name: "P2P",
        href: "#"
    }
]

const PlatformCard = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full">
            <div className="container-wrapper px-[60px] py-16 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col w-[427px] gap-12 ">
                        <h2 className="text-primaryText text-[45px] leading-[52px]">
                            One platform,
                            <br />
                            endless possibilities
                        </h2>
                        <div className="flex flex-col gap-5 text-[22px] leading-[28px] text-primaryText">
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
                                            hoveredIndex === index ? "text-primaryText" : "text-tertiaryText"
                                        }
                                    >
                                        {link.name}
                                    </h5>
                                    <Image
                                        src={rightArrow}
                                        alt=""
                                        className={hoveredIndex === index ? "h-[24px] w-[24px]" : "hidden"}
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>
                    <div className="h-[352px] w-[572px] p-[60px] rounded-2xl border-[1px]  border-black flex items-center justify-center">
                        <div className="flex items-center justify-center">
                            <Image src={unversityCrest} alt="" className="h-[90px] w-[90px]"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlatformCard