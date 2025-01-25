import Image from "next/image";
import UPI from "../../../public/footer/payment-systems/Upi.svg";


const PaymentOptions = () => {
    return (
        <>
            <div className=" flex flex-col gap-3">
                <h4 className="font-medium text-base sm:text-[22px]  text-primaryText">
                    We accept following payment systems
                </h4>
                <div className="flex gap-3 md:gap-4 ">
                    <div className="rounded-[4px] p-1 sm:p-[6px]">
                        <Image src={UPI} alt="UPI" className=" w-[52px] sm:w-[76px] h-[50px] sm:h-[34px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentOptions