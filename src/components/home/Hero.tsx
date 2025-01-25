

const Hero = () => {
    return (
        <section className="w-full">
            <div className="container-wrapper mx-auto md:px-[60px] px-3 flex items-center py-9" >
                <div className="w-[597px] h-full md:mb-[64px] mb-0 flex flex-col gap-8 justify-between items-center md:items-start">
                    <div className="flex gap-4 flex-col md:items-start items-center">
                        <h1 className="text-primaryText md:text-start text-center md:text-[57px] text-[45px] md:leading-[64px] -tracking-[0.25px]">
                            Empowering Your Crypto Journey with Paraacrypto
                        </h1>
                        <div>
                            <button className="text-primaryText px-5 py-1 bg-white rounded-full weight500 md:text-[16px] md:leading-6 md:tracking-[0.15px] text-[14px] leading-5 tracking-[0.25px]">
                                First In CEX platform
                            </button>
                        </div>
                        <h6 className="weight400 md:weight500 md:text-[16px] md:leading-6 md:tracking-[0.15px] text-[14px] leading-5 tracking-[0.25px] md:text-start  text-center">With the credibility of an FIU license, our platform combines security and simplicity to meet the needs of both beginners and professional traders in India.</h6>
                    </div>
                    <div>
                        <button className="py-2 px-5 bg-primaryText text-white rounded-full weight500 text-[16px] leading-6 tracking-[0.15px]">
                            Start Trading
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero