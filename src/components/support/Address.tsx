import Image from "next/image";
import contactUs from "../../../public/assets/images/contactUs.svg";

const Address = () => {
    return (
        <section className=" md:p-[60px] flex items-center flex-col sm:flex-row  gap-8 md:gap-[132px]">
            <div className="flex flex-1 flex-col gap-4 md:gap-8 w-full sm:w-2/5">
                <div className="flex flex-col gap-4 md:gap-5">
                    <h2 className="font-bold text-[28px] sm:text-[45px] text-primaryText">
                        Contact Us
                    </h2>
                    <p className="text-secondaryText font-normal text-sm md:text-base">
                        Before contacting us, please check the Frequently Asked
                        Questions.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="text-secondaryText font-medium text-base">
                        Corporate Office
                    </h5>
                    <p className="text-secondaryText font-normal text-sm">
                        Lorem Ipsum DolorSit Amet
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <h5 className="text-secondaryText font-medium text-base">
                        Here are contact emails for different parts of Paracrypto:
                    </h5>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-secondaryText font-medium text-base">
                                General Inquiries{" "}
                            </h5>
                            <p className="text-secondaryText font-normal text-sm">
                                info@paracypto.com{" "}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-secondaryText font-medium text-base">
                                Press Inquiries{" "}
                            </h5>
                            <p className="text-secondaryText font-normal text-sm">
                                press@paracypto.com{" "}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-secondaryText font-medium text-base">
                                Work With Us{" "}
                            </h5>
                            <p className="text-secondaryText font-normal text-sm">
                                careers@paracypto.com{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[45%] h-[369px] md:h-[420px] md:rounded-lg rounded-2xl flex items-center">
                <Image src={contactUs} alt="" className="h-auto w-auto"></Image>
            </div>
        </section>
    )
}

export default Address