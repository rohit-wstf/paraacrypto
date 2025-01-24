import Image from "next/image";
import vision from "../../../public/assets/images/vision.png";
import mission from "../../../public/assets/images/mission.png";
const descriptionCards = [{
    image: mission,
    title: "Our Mission",
    content: "To empower individuals and communities worldwide by providing a secure, accessible, and innovative platform for cryptocurrency trading. ParaaCrypto CEX is committed to bridging the gap between traditional finance and digital assets, ensuring inclusivity for all users."
},
{
    image: vision,
    title: "Our Vision",
    content: "To lead the global transformation of cryptocurrency trading by integrating cutting-edge technology, fostering financial inclusion, and building a secure, user-driven ecosystem. We envision a world where digital assets are seamlessly woven into everyday life."
}, {
    image: vision,
    title: "Our Story",
    content: "Born out of the need for trust and accountability in India's crypto market, Paraa Crypto was founded by a team of financial experts and blockchain enthusiasts committed to providing a secure trading experience. We understand the concerns of Indian traders who&apos;ve faced losses and uncertainty in the past. Our FIU license and adherence to global best practices ensure that your funds and data remain safe. With a strong focus on community building and transparency, we are here to redefine crypto trading in India—placing trust and user empowerment at the core of everything we do."
}
]

const Description = () => {
    return (
        <section className="w-full">
            <div className='container-wrapper py-20 px-[60px] mx-auto flex flex-col gap-16'>
                <div className='flex flex-col gap-4 max-w-[1240px]'>
                    <h2 className='text-[45px] leading-[52px] text-primaryText'>At Paraa Crypto</h2>
                    <h5 className='text-[22px] leading-[28px] text-secondaryText'>
                        At Paraa Crypto, we are redefining crypto trading in India by offering a secure, transparent, and user-centric platform Compliant by the FIU. Our platform is built on the pillars of trust, compliance, and innovation, ensuring that Indian traders have a reliable space to trade digital assets without fear. With advanced features, seamless transactions, and 24x7 support, we aim to empower India&apos;s crypto community to confidently embrace the future of finance.
                    </h5>
                </div>

                <div>
                    <Cards />
                </div>

            </div>
        </section>
    )
}

export default Description;

const Cards = () => {
    return (
        <>
            <div className="flex flex-col gap-16">
                {
                    descriptionCards.map((card, index) => {
                        return (
                            <div className={index % 2 == 0 ? `h-[315px] flex gap-[132px]` : `h-[315px] flex gap-[132px] flex-row-reverse`} key={index}>
                                <div className='w-[478px] rounded-lg'>
                                    <Image src={card.image} alt="" className="h-full w-full object-contain"></Image>

                                </div>
                                <div className='w-[580px] flex flex-col gap-4 justify-center'>
                                    <h2 className="text-[45px] leading-[52px] text-primaryText">{card.title}</h2>
                                    <h5 className="text-[22px] leading-[28px] text-secondaryText">{card.content}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}