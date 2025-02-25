"use client";
import { useState } from "react";
import upArrow from "../../../public/assets/icons/keyboard_arrow_up.svg";
import downArrow from "../../../public/assets/icons/keyboard_arrow_down.svg";
import Image from "next/image";

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

// const faqButtons = [
//     "General", "Account & Verification", "Deposits and Withdrawals", "Trading and Features", "Security", "Taxation and Compliance", "Support", "Miscellaneous"
// ];

const faqItems = [
    {
        title: "What is Paraa Crypto?",
        content:
            "ParaaCrypto CEX is a centralized cryptocurrency exchange offering secure and efficient trading solutions. It provides spot trading, P2P trading, and wallet management, backed by advanced security and compliance measures.Our exchange has a user-friendly interface, allowing you to navigate with ease, whether a beginner exploring cryptocurrencies or an experienced trader managing an extensive portfolio. Execute trades seamlessly with high liquidity and competitive fees to capitalize on market opportunities without delays.",
    },
    {
        title: "What does it mean to be an FIU-Compliant platform?",
        content:
            "Being FIU-Compliant means our platform maintain with government regulations, ensuring transparency, accountability, and secure operations for all users.",
    },
    {
        title: "Is Paraa Crypto legal in India?",
        content:
            "Yes, Paraa Crypto operates legally under India’s Financial regulations and holds an FIU license for safe and compliant crypto trading. ParaaCrypto CEX adheres to global AML and CFT regulations, and performs KYC checks to maintain transparency and trust.",
    },
];

const Faqs = () => {
    // const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    // const toggleSelection = (index: number) => {
    //     setSelectedIndexes((prevSelectedIndexes) => {
    //         if (prevSelectedIndexes.includes(index)) {
    //             return prevSelectedIndexes.filter((i) => i !== index);
    //         } else {
    //             return [...prevSelectedIndexes, index];
    //         }
    //     });
    // };

    return (
        <section className="w-full">
            <div className="container-wrapper mx-auto md:px-[60px] px-3 md:py-16 py-9 flex flex-col md:gap-16 gap-5 items-center">
                <div className="flex flex-col md:gap-9 gap-5">
                    <h2 className="text-primaryText md:text-[45px] md:leading-[52px] text-[28px] leading-9 weight700">
                        Have questions? We&apos;ve got answers!
                    </h2>
                    {/* Uncomment this section to enable FAQ buttons */}
                    {/* <div className="flex items-center justify-center flex-wrap w-[992px] gap-3">
                        {faqButtons.map((item, index) => {
                            const isSelected = selectedIndexes.includes(index);
                            return (
                                <button
                                    key={index}
                                    className={
                                        isSelected
                                            ? `py-2 px-6 bg-primaryText rounded-full text-white border`
                                            : `py-2 px-6 rounded-full text-primaryText border-primaryText border`
                                    }
                                    onClick={() => toggleSelection(index)}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>*/}
                </div>
                <div className="lg:w-[960px] w-full">
                    <Accordion items={faqItems} />
                </div>
            </div>

        </section>
    );
};

export default Faqs;

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full space-y-5">
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-300 p-4">
                    <div
                        className="w-full text-left py-4 text-lg font-medium flex justify-between items-center focus:outline-none"

                    >
                        <h4 className="md:text-[28px] flex-[1] text-[16px] md:leading-9 leading-7 weight500 md:weight500 text-primaryText">{item.title}</h4>
                        <span className="text-xl flex-[0.1]">
                            <Image src={openIndex === index ? upArrow : downArrow} alt="" onClick={() => toggleAccordion(index)} className="cursor-pointer"></Image>
                        </span>
                    </div>
                    {openIndex === index && (
                        <h6 className="mt-2 md:leading-6 leading-5 tracking-[0.15px] md:text-[16px] text-secondaryText weight400 md:weight500 text-[14px]">
                            {item.content}
                        </h6>
                    )}
                </div>
            ))}
        </div>
    );
};