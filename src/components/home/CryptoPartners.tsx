import Carousel from "./Carousel";

const CryptoPartners = () => {
    return (
        <section className="w-full ">
            <div className="md:pt-16 md:pb-9 py-9 mx-auto flex flex-col gap-16">
                <div className="container-wrapper mx-auto md:px-[60px] px-3 flex flex-col gap-2 items-center justify-center">
                    <h2 className="md:text-[45px] text-[28px] md:leading-[52px] leading-9  text-primaryText text-center">
                        100+ Crypto Partners
                    </h2>
                    <h6 className="md:text-[16px] text-secondaryText text-center weight400 md:weight500 text-[14px]">Partnered with trusted organizations to provide a robust and seamless trading ecosystem.</h6>
                </div>
                <div className="h-[381px] w-full bg-[#E9FFF5]">
                    <Carousel />
                </div>
            </div>
        </section>
    )
}

export default CryptoPartners