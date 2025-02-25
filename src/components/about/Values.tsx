import Image from "next/image";
import securityFirst from "../../../public/about-page/Security_First.svg";
import transparency from "../../../public/about-page/Transparency.svg";
import inclusivity from "../../../public/about-page/Inclusive.svg";
import empowerment from "../../../public/about-page/Empowerment.svg";

const valueItems = [
    {
        image: securityFirst,
        title: "Security First",
        content: "User funds and data are always protected."
    },
    {
        image: transparency,
        title: "Transparency",
        content: "Clear policies and real-time updates ensure no hidden surprises."
    },
    {
        image: inclusivity,
        title: "Inclusivity",
        content: "Accessible to users from all corners of India, with support in regional languages."
    },
    {
        image: empowerment,
        title: "Empowerment",
        content: "Educating and enabling users to make informed financial decisions."
    }
]

const Values = () => {
    return (
        <section className="w-full ">
            <div className="container-wrapper px-3 py-9 md:p-[60px]  mx-auto flex flex-col gap-6 md:gap-5">
                <h2 className="text-[28px] sm:text-[45px] font-bold leading-[52px] text-primaryText">
                    Our Values
                </h2>
                <div className="flex-wrap">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default Values;

const Cards = () => {
    return (
        <>
            <div className="flex justify-center md:justify-start gap-5 md:gap-4  flex-wrap">

                {
                    valueItems.map((item, index) => {
                        return (
                            <div className="linearCardBg w-full lg:flex-[0.33]  md:w-[343px] h-[412px] p-5 md:py-7 md:px-5 rounded-lg flex gap-2 flex-col justify-end" key={index}>
                                <div className="flex items-center justify-center mb-2">
                                    <Image src={item.image} alt="" className="h-[200px] w-[200px]"></Image>
                                </div>
                                <div className=" h-1/3 md:h-2/5">
                                    <h3 className="text-[22px] sm:text-[32px] font-medium leading-[40px] text-primaryText mb-2">{item.title}</h3>
                                    <h5 className="text-sm sm:text-[22px] leading-[28px] text-secondaryText">{item.content}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}