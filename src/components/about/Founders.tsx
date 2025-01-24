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
            <div className="container-wrapper p-[60px] mx-auto flex flex-col gap-12">
                <div className="flex gap-3 flex-col">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        Our Competitive Edge
                    </h2>
                    <h5 className="text-[22px] leading-7 text-secondaryText">Meet the visionary behind Paraacrypto, whose passion for crypto sparked a revolution!</h5>
                </div>
                <div className="flex gap-4 h-[409px]">
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
                        <div className="flex-[0.5] linearCardBg flex" key={index}>
                            <div className="flex flex-col justify-end gap-3 py-7 px-5">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-[32px] leading-10 text-primaryText">{card.name}</h3>
                                    <Link href={card.socialLink}><Image src={linkedInIcon} alt="" className="h-[24x] w-[24px]"></Image></Link>
                                </div>
                                <h5 className="text-[22px] leading-7 text-secondaryText">
                                    {card.designation}
                                </h5>
                                <h6 className="text-[16px] leading-6 tracking-[0.15px]">
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