import Image from "next/image";
import creditCard from "../../../public/creditcard.png";

const uspItems = [
    {
        title: "Low Trading Fees",
        content: "Transparent fee structures designed to maximise user profits."
    }, {
        title: "Membership Tiers",
        content: "Unlock advanced features, faster transactions, and in-depth analytics tools to elevate your trading experience."
    }
    , {
        title: "Educational Resources",
        content: "Learn and grow with tutorials, webinars, and market insights tailored for all skill levels."
    },
    {
        title: "Global Expansion Plans",
        content: "Access ParaaCrypto CEX worldwide with multilingual support and localized payment options."
    }
]

const USP = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper p-[60px] mx-auto flex flex-col gap-12">
                <h2 className="text-[45px] leading-[52px] text-primaryText">
                    Our Competitive Edge
                </h2>
                <div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default USP;

const Cards = () => {
    return (
        <>
            <div className="flex gap-[34px]">
                {
                    uspItems.map((item, index) => {
                        return (
                            <div className="min-w-[296px] max-w-[330px] flex flex-col gap-5" key={index}>
                                <div className="w-full">
                                    <div className="bg-[#F7F8F8] p-3 h-[85px] w-[85px]">
                                        <Image src={creditCard} alt="" className="h-[60px] w-[60px]"></Image>
                                    </div>
                                </div>
                                <h4 className="text-[28px] leading-9 text-nowrap">{item.title}</h4>
                                <h6 className="text-[16px] leading-6 tracking-[0.15px]">{item.content}</h6>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}