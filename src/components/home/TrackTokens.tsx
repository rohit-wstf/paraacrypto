import Image from "next/image";
import tokenImage from "../../../public/assets/images/tokenImage.png";

const TrackTokens = () => {
    return (
        <div className="w-full">
            <div className="container-wrapper md:py-[100px] py-9 md:px-[60px] px-3  mx-auto">
                <div className="md:px-[60px] px-3 md:py-10 py-9 flex md:flex-row flex-col justify-between items-center bg-tertiaryBackground rounded-2xl md:gap-0 gap-5">
                    <div className="md:w-[478px] w-full flex flex-col gap-5">
                        <h5 className="text-primaryText md:text-[45px] md:leading-[52px] text-[28px] leading-9 weight700  text-nowrap">Track Your Tokens and
                            <br /> Manage Your Positions</h5>
                        <p className="text-secondaryText text-[14px] leading-5 tracking-[0.25px]">
                            Download the app to manage your projects, keep track of the progress and complete tasks without procrastinating. Stay on track and complete on time!</p>
                    </div>
                    <div>
                        <Image src={tokenImage} alt="" className="w-[370px] h-[251px] object-contain"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackTokens