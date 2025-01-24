import Image from "next/image";
import Link from "next/link";
import etheriumLogo from "../../../public/assets/logos/eth logo.png";
import rightArrow from "../../../public/assets/icons/east.svg";

const cryptoList = [
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },
    {
        logo: etheriumLogo,
        name: "Etherium",
        symbol: "ETH",
        price: "2,987289473"
    },

]

const TopCrypto = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper py-16 px-[60px] mx-auto flex flex-col gap-16">
                <div className="flex items-center justify-between">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        Top Crypto Today
                    </h2>
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <h6 className="text-[16px] leading-6 tracking-[0.15px]">
                                View all Assets
                            </h6>
                            <Image src={rightArrow} alt="" className="h-[16px] w-[16px]"></Image>
                        </div>
                    </Link>
                </div>
                <div className="h-[87px] hidden-scroll px-2">
                    <div className="flex gap-9">
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCrypto;

const Cards = () => {
    return (
        <>
            {
                cryptoList.map((item, index) => {
                    return (
                        <div className="px-3 py-4 flex gap-16 top-crypto-card-shadow w-fit rounded-xl" key={index}>
                            <div className="flex gap-2 items-center">
                                <Image src={item.logo} alt="" className="h-[22.5px] w-[13.81px] mx-[9px] my-[4.75px]"></Image>
                                <div>
                                    <h6 className="text-[16px] leading-6 tracking-[0.15px] text-primaryText">{item.name}</h6>
                                    <p className="text-secondaryText text-[14px] leading-5 tracking-[0.25px]">{item.symbol}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <p className="text-secondaryText text-[14px] leading-5 tracking-[0.25px]">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}