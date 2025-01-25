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
            <div className="container-wrapper md:py-16 md:px-[60px] py-9 px-3 mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h2 className="md:text-[45px] text-[28px] md:leading-[52px] leading-9  text-primaryText text-center md:text-start">
                        Our Global Partners
                    </h2>
                    <h6 className="md:leading-6 leading-5 tracking-[0.15px] md:text-[16px] text-secondaryText text-center weight400 md:weight500 text-[14px]">Sumsub, TRM labs, and AWS are key partners in risk management, providing advanced solutions for KYT (Know Your Transaction) and KYC (Know Your Customer) checks. These companies help ensure a high level of security and regulatory compliance for our platform.</h6>
                </div>
                <div className="flex flex-wrap gap-5 justify-between">
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
                        <div className="flex flex-col gap-4 bg-white md:w-[306px] w-full" key={index}>
                            <div className="bg-secondaryBackground rounded-xl flex items-center justify-center h-[142px]">
                                <div>
                                    <Image src={item.image} alt="" className="h-[90px] w-[90px]"></Image>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="md:text-[28px] text-[22px] md:leading-9 leading-7 weight500 md:weight500 text-primaryText ">
                                    {item.title}
                                </h4>
                                <h6 className="md:leading-6 leading-5 tracking-[0.15px] md:text-[16px] text-secondaryText weight400 md:weight500 text-[14px]" >{item.content}</h6>
                            </div>
                        </div>)
                })
            }
        </>
    )
}

