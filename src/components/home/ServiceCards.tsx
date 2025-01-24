import Image from "next/image";
import creditCardImg from "../../../public/creditcard.png";

const servicesList = [
    {
        title: "Transparency in FIU Compliance",
        description: "Ensuring full transparency in handling FIU-related Compliance, providing users with clear updates and resolutions to maintain trust and compliance."
    },
    {
        title: "24 x 7 Support",
        description: "Round-the-clock support to assist you anytime, ensuring a seamless trading experience."
    },
    {
        title: "Guaranteed Tax Report in 5 minutes",
        description: "Get your guaranteed tax report in just 5 minutes, ensuring quick and accurate documentation for your transactions."
    },
    {
        title: "INR Deposits and Withdrawals",
        description: "Easily deposit and withdraw INR, ensuring smooth transactions in local currency for a hassle-free experience."
    }
]

const ServiceCards = () => {
    return (
        <section className="w-full">
            <div className='container-wrapper px-[60px] flex py-16 mx-auto'>
                <div className='flex flex-wrap gap-10'>
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
                        <div className='w-[630px]' key={index}>
                            <div className="w-full">
                                <div className="h-[85px] w-[85px]">
                                    <div className="h-[60px] w-[60px]">
                                        <Image src={creditCardImg} alt="" className="h-[45px] w-[60px]"></Image>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[28px] leading-[36px]">
                                    {item.title}
                                </h4>
                                <div className="w-[555px]">
                                    <h6 className="text-[16px] leading-[24px] tracking-[0.15px]">
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