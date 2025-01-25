import Image from "next/image";
import linkedInIcon from "../../../public/footer/social-media-logos/LinkedIn.svg";
import Link from "next/link";


const foundersDetails = [
    {
        socialLink: "https://linkedin.com",
        name: "Name",
        designation: "Designation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere."
    },
    {
        socialLink: "https://linkedin.com",
        name: "Name",
        designation: "Designation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere."
    }

]


const Founders = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper px-3 py-9 md:p-[60px] mx-auto flex flex-col gap-6 md:gap-12">
                <div className="flex gap-3 flex-col">
                    <h2 className="text-[28px] sm:text-[45px] font-bold leading-[52px] text-primaryText">
                    Our Founders
                    </h2>
                    <h5 className="text-sm sm:text-[22px] font-normal md:leading-7 text-secondaryText">Meet the visionary behind Paraacrypto, whose passion for crypto sparked a revolution!</h5>
                </div>
                <div className="flex flex-col md:flex-row gap-4  md:h-[409px]">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default Founders;

const Cards = () => {
    return (
        <>
            {
                foundersDetails.map((card, index) => {
                    return (
                        <div className="  flex items-end linearCardBg rounded-lg h-[340px]  md:h-full   gap-3 px-3 py-6 md:py-7 md:px-5" key={index}>
                            <div className="flex flex-col  justify-end h-[128px] gap-2 ">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-[22px] sm:text-[32px] font-medium sm:leading-10 text-primaryText">{card.name}</h3>
                                    <Link href={card.socialLink}><Image src={linkedInIcon} alt="" className="h-[24x] w-[24px]"></Image></Link>
                                </div>
                                <h5 className=" text-base sm:text-[22px] font-medium sm:leading-7 text-secondaryText">
                                    {card.designation}
                                </h5>
                                <h6 className="text-sm sm:text-[16px] font-normal sm:leading-6 tracking-[0.15px]">
                                    {card.description}
                                </h6>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}