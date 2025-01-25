import Image from "next/image";
import Link from "next/link";
import ethereum from "../../../public/assets/logos/eth logo.png";
import bgVector from "../../../public/assets/images/bgVector.png"
import dropDownArrow from "../../../public/assets/icons/arrow_drop_down.svg";

const purchasableItems = [
    {
        logo: ethereum,
        name: "Etherium",
        price: "₹298,423.01",
        percentage: "-6.76%",
        purchaseLink: "https://paraacrypto.com/buy"
    },
    {
        logo: ethereum,
        name: "Etherium",
        price: "₹298,423.01",
        percentage: "-6.76%",
        purchaseLink: "https://paraacrypto.com/buy"
    },
    {
        logo: ethereum,
        name: "Etherium",
        price: "₹298,423.01",
        percentage: "-6.76%",
        purchaseLink: "https://paraacrypto.com/buy"
    }, {
        logo: ethereum,
        name: "Etherium",
        price: "₹298,423.01",
        percentage: "-6.76%",
        purchaseLink: "https://paraacrypto.com/buy"
    }, {
        logo: ethereum,
        name: "Etherium",
        price: "₹298,423.01",
        percentage: "-6.76%",
        purchaseLink: "https://paraacrypto.com/buy"
    },
    {
        logo: ethereum,
        name: "Etherium",
        price: "₹298,423.01",
        percentage: "-6.76%",
        purchaseLink: "https://paraacrypto.com/buy"
    }

]


const CryptoBuying = () => {
    return (
        <section className="w-full bg-primaryBackground">
            <div className="container-wrapper md:px-[60px] px-3 md:py-16 py-9 mx-auto relative z-10">
                <Image src={bgVector} alt="" className="absolute top-0 left-0 z-0"></Image>
                <div className="flex md:flex-row flex-col gap-8 justify-between z-10">
                    <div className="flex items-center">
                        <div className="w-[531px] flex flex-col gap-5">
                            <h2 className="text-primaryText md:text-[45px] md:leading-[52px] text-[28px] leading-9 weight700">
                                Buy Crypto with UPI,
                                Credit or Debit Card</h2>
                            <h6 className="text-secondaryText md:text-[16px] md:leading-6 md:tracking-[0.15px] text-[14px] leading-5 tracking-[0.25px] weight400 md:weight500">
                                We offer a variety of payment options to ensure a seamless transaction experience for our users. Payments can be made using Credit cards, Debit cards, UPI, or bank transfers (IMPS), providing flexibility and convenience. Our platform is designed to cater to the diverse needs of India&apos;s Crypto traders with secure and efficient payment processing.
                            </h6>
                        </div>

                    </div>
                    <div className="flex flex-wrap flex-row md:w-[650px] w-full gap-5 z-10">
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CryptoBuying;

const Cards = () => {
    return (
        <>
            {
                purchasableItems.map((item, index) => {
                    return (
                        <div className="md:w-[203px] flex-[0.5] p-4 flex flex-col gap-4 rounded-2xl bg-white" key={index}>
                            <div className="flex items-center gap-2">
                                <Image src={item.logo} alt="" className="h-[22.5px] w-[13.81px] md:mx-[9px] md:my-[4.75px] m-0"></Image>
                                <h5>{item.name}</h5>
                            </div>
                            <div>
                                <h5 className="md:text-[22px] text-[16px] md:leading-7 leading-6 tracking-[0.15px]">{item.price}</h5>
                                <div className="flex items-center md:ml-0 -ml-2">
                                    <Image src={dropDownArrow} alt=""></Image>
                                    <h6 className="text-[#DB4437] md:text-[22px] text-[16px] md:leading-7 leading-6 tracking-[0.15px]">-6.76%</h6>
                                </div>
                            </div>
                            <div>
                                <Link href={item.purchaseLink}>
                                    <button className="px-3 py-1 bg-primaryText rounded-full text-[11px] leading-4 tracking-[0.5px] text-white w-full md:w-auto">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}