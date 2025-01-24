import Image from "next/image";
import tokenImage from "../../../public/assets/images/tokenImage.png";

const TrackTokens = () => {
    return (
        <div className="w-full">
            <div className="container-wrapper py-[100px] px-[60px]  mx-auto">
                <div className="px-[60px] py-10 flex justify-between items-center bg-tertiaryBackground rounded-2xl">
                    <div className="w-[478px] flex flex-col gap-5">
                        <h5 className="text-[45px] leading-[52px] text-primaryText font-extrabold text-nowrap">Track Your Tokens and
                            <br /> Manage Your Positions</h5>
                        <p className="text-secondaryText text-[14px] leading-5 tracking-[0.25px]">
                            Download the app to manage your projects, keep track of the progress and complete tasks without procrastinating. Stay on track and complete on time!</p>
                    </div>
                    <div>
                        <Image src={tokenImage} alt="" className="w-[370px] h-[251px]"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackTokens