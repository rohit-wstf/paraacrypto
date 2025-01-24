

const Hero = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper mx-auto px-[60px] flex items-center">
                <div className="w-[597px] mb-[64px] flex flex-col gap-8 justify-between">
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-[57px] weight900 text-primaryText leading-[64px] tracking-[-0.25px]">
                            Empowering Your Crypto Journey with Paraacrypto
                        </h1>
                        <div>
                            <button className="text-primaryText px-5 py-1 bg-white rounded-full weight500 text-[16px] leading-6 tracking-[0.15px]">
                                First In CEX platform
                            </button>
                        </div>
                        <h6 className="weight500">With the credibility of an FIU license, our platform combines security and simplicity to meet the needs of both beginners and professional traders in India.</h6>
                    </div>
                    <div>
                        <button className="py-2 px-5 bg-primaryText text-white rounded-full weight500 text-[16px] leading-6 tracking-[0.15px]">
                            Start Trading
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {/* <Image src={heroGif} alt="" className="h-auto w-auto"></Image> */}
                </div>
            </div>
        </section>
    )
}

export default Hero