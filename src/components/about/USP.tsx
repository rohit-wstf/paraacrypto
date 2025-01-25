import Image from "next/image";
import lowTredingFees from "../../../public/about-page/Low Trading Fees.svg";
import memberShipTiers from "../../../public/about-page/Membership_Tiers.svg";
import educationalResources from "../../../public/about-page/Educational Resources.svg";
import globalExpansionPlans from "../../../public/about-page/Global Expansion.svg";

const uspItems = [
    {
        image: lowTredingFees,
        title: "Low Trading Fees",
        content: "Transparent fee structures designed to maximise user profits."
    }, {
        image: memberShipTiers,
        title: "Membership Tiers",
        content: "Unlock advanced features, faster transactions, and in-depth analytics tools to elevate your trading experience."
    },
    {
        image: educationalResources,
        title: "Educational Resources",
        content: "Learn and grow with tutorials, webinars, and market insights tailored for all skill levels."
    },
    {
        image: globalExpansionPlans,
        title: "Global Expansion Plans",
        content: "Access ParaaCrypto CEX worldwide with multilingual support and localized payment options."
    }
]

const USP = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper px-3 py-9 md:p-[60px] mx-auto flex flex-col gap-6 md:gap-12">
                <h2 className="text-[28px] sm:text-[45px] font-bold leading-[52px] text-primaryText">
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
            <div className="flex gap-5 md:gap-[34px] flex-wrap">
                {
                    uspItems.map((item, index) => {
                        return (
                            <div className="min-w-[296px] max-w-[330px] lg:flex-1 flex-none flex flex-col gap-5" key={index}>
                                <div className="w-full">
                                    <Image src={item.image} alt="" className="md:h-[85px] md:w-[85px] h-[40px] w-[40px]"></Image>
                                </div>

                                <div className="gap-2">
                                    <h4 className="text-[22px] md:text-[28px] font-medium sm:font-bold leading-9 text-nowrp">{item.title}</h4>
                                    <h6 className="text-sm md:text-[16px] font-normal leading-6 tracking-[0.15px]">{item.content}</h6>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}