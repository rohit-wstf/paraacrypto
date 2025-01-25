import Image from "next/image";
import creditCardImg from "../../../public/creditcard.png";
import inrDeposits from "../../../public/home/INR Deposits.svg";
import supportImg from "../../../public/home/24x7 Support.svg";
import fiuCompliance from "../../../public/home/FIU Compliance.svg";
import taxReport from "../../../public/home/Tax Report.svg";

const servicesList = [
    {
        image: fiuCompliance,
        title: "Transparency in FIU Compliance",
        description: "Ensuring full transparency in handling FIU-related Compliance, providing users with clear updates and resolutions to maintain trust and compliance."
    },
    {
        image: supportImg,
        title: "24 x 7 Support",
        description: "Round-the-clock support to assist you anytime, ensuring a seamless trading experience."
    },
    {
        image: taxReport,
        title: "Guaranteed Tax Report in 5 minutes",
        description: "Get your guaranteed tax report in just 5 minutes, ensuring quick and accurate documentation for your transactions."
    },
    {
        image: inrDeposits,
        title: "INR Deposits and Withdrawals",
        description: "Easily deposit and withdraw INR, ensuring smooth transactions in local currency for a hassle-free experience."
    }
]

const ServiceCards = () => {
    return (
        <section className="w-full">
            <div className='container-wrapper md:px-[60px] px-3 flex md:py-16 py-9 mx-auto'>
                <div className='flex flex-wrap md:gap-10 gap-6'>
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default ServiceCards;

const Cards = () => {
    return (
        <>

            {
                servicesList.map((item, index) => {
                    return (
                        <div className='md:w-[630px] w-full  flex flex-col gap-5' key={index}>
                            <div className="w-full">
                                <div className="md:h-[85px] md:w-[85px] h-[40px] w-[40px] flex items-center justify-center">
                                    <Image src={item.image} alt="" className="object-contain"></Image>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-[95%]">
                                <h4 className="md:text-[24px] text-[22px] leading-7 md:leading-9 tracking-[0.15px] weight500 md:weight700">
                                    {item.title}
                                </h4>
                                <div className="md:w-[555px] w-full">
                                    <h6 className="weight400 md:weight500 md:text-[16px] md:leading-6 md:tracking-[0.15px] text-[14px] leading-5 tracking-[0.25px] ">
                                        {item.description}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}