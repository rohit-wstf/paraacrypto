// import Image from "next/image";
// import universityCrest from "../../../public/university crest.png";

const Hero = () => {
    const heroItems = [
        {
            title: "$25M+",
            content: "Assets under management"
        },
        {
            title: "3M+",
            content: "Invested Users"
        },
        {
            title: "96%+",
            content: "Customer Satisfaction Score"
        }
    ]
    return (
        <section className="w-full linearBg">
            <div className="container-wrapper p-[60px] mx-auto flex flex-col gap-16">
                <div className="flex gap-2 flex-col">
                    <h5 className="text-[22px] leading-[28px] text-primaryText text-center">About Us</h5>
                    <h2 className="text-[45px] leading-[52px] text-primaryText text-center">
                        Trade with Confidence, Trade with Paraacrypto
                    </h2>
                </div>
                {/* <div className="w-full flex items-center justify-center h-[352px] bg-white rounded-2xl p-[60px]">
                    <Image src={universityCrest} alt="" className="h-[90px] w-[90px]"></Image>
                </div> */}
                <div className="flex justify-center gap-16">
                    {
                        heroItems.map((item, index) => {
                            return (
                                <div className="flex flex-col items-center" key={index}>
                                    <h2 className="text-[45px] leading-[52px] text-primaryText">{item.title}</h2>
                                    <h5 className="text-[22px] leading-7 text-secondaryText">
                                        {item.content}
                                    </h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero