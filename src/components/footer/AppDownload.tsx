import Image from "next/image";
import googlePlay from "../../../public/assets/images/PlayStore.png";
import appleStore from "../../../public/assets/images/AppStore.png";
import Link from "next/link";

const AppDownload = () => {
    return (
        <>
            <div className="mb-6 space-y-3 md:mb-0 w-full sm:w-auto">
                <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
                    Coming Soon
                </h4>
                <div className=" w-full flex gap-4">
                    <Link href="https://play.google.com/store/apps/details" className="w-[129px] md:w-[150px] h-[50px] cursor-pointer">
                        <Image src={googlePlay} alt="" className="w-full h-full"></Image>
                    </Link>
                    <Link href="https://apps.apple.com/in/app" className="w-[129px] md:w-[150px] h-[50px] cursor-pointer">
                        <Image src={appleStore} alt="" className="w-full h-full"></Image>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AppDownload