import Carousel from "./Carousel";

const CryptoPartners = () => {
    return (
        <section className="w-full ">
            <div className="pt-16 pb-9  mx-auto flex flex-col gap-16">
                <div className="container-wrapper mx-auto px-[60px] flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        100+ Crypto Partners
                    </h2>
                    <h6 className="text-[16px] text-secondaryText">Partnered with trusted organizations to provide a robust and seamless trading ecosystem.</h6>
                </div>
                <div className="h-[381px] w-full bg-[#E9FFF5]">
                    <Carousel />
                </div>
            </div>
        </section>
    )
}

export default CryptoPartners