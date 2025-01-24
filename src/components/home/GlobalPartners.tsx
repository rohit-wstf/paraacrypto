import sumsub from "../../../public/assets/logos/sumsub.svg"
import trmlogo from "../../../public/assets/logos/trmlogo.svg"
import liminal from "../../../public/assets/logos/liminal.png"
import tradingview from "../../../public/assets/logos/tradingView.svg"
import Image from "next/image";

const globalPartnersItems = [
    {
        image: sumsub,
        title: "Sumsub",
        content: "Simplifying user verification with advanced KYC and KYB solutions. Our partnership ensures seamless onboarding and compliance with global regulatory standards."
    },
    {
        image: trmlogo,
        title: "TRM Labs",
        content: "Delivering robust wallet screening and transaction monitoring for enhanced security. TRM Labs helps us ensure compliance and detect suspicious activity in real time."
    },
    {
        image: liminal,
        title: "Liminal",
        content: "Providing secure, efficient, and enterprise-grade wallet management services. Enabling safe custody and streamlined handling of digital assets."
    },
    {
        image: tradingview,
        title: "Trading View",
        content: "Empowering our exchange with highly customizable, real-time trading charts, TradingView provides users with advanced technical analysis tools, market trends, and intuitive visualizations to make informed trading decisions."
    }
]

const GlobalPartners = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper py-16 px-[60px] mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        Our Global Partners
                    </h2>
                    <h6 className="text-[16px] leading-6 tracking-[0.15px] text-center">Sumsub, TRM labs, and AWS are key partners in risk management, providing advanced solutions for KYT (Know Your Transaction) and KYC (Know Your Customer) checks. These companies help ensure a high level of security and regulatory compliance for our platform.</h6>
                </div>
                <div className="flex flex-wrap justify-between">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default GlobalPartners;

const Cards = () => {
    return (
        <>
            {
                globalPartnersItems.map((item, index) => {
                    return (
                        <div className="flex flex-col gap-4 bg-white w-[306px]" key={index}>
                            <div className="bg-secondaryBackground rounded-xl flex items-center justify-center h-[142px]">
                                <div>
                                    <Image src={item.image} alt="" className="h-[90px] w-[90px]"></Image>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[28px] leading-9 text-primaryText">
                                    {item.title}
                                </h4>
                                <h6 className="text-[14px] text-secondaryText leading-5 tracking-[0.25px]" >{item.content}</h6>
                            </div>
                        </div>)
                })
            }
        </>
    )
}

