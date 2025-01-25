import Link from 'next/link';
import { company, navlinks, products, support } from '@/utils/footerLinks';

const NavigationList = () => {
    return (
        <>
            <div className="flex justify-start  gap-9 flex-wrap text-start  ">
                {navlinks.map((link, index) => (
                    <div className="md:min-w-[109px] md:max-w-[210px] w-[120px] sm:w-[203px]" key={index}>
                        <h5 className="font-medium  text-base sm:text-[22px]  text-primaryText  mb-2">
                            {link === company
                                ? "Company"
                                : link === products
                                    ? "Products" : link === support ? "Support" : "Policies"}

                        </h5>
                        <ul className="flex flex-col gap-2">
                            {link.map((item, index) => (
                                <li
                                    className="text-secondaryText font-normal sm:font-medium text-sm sm:text-base  "
                                    key={index}
                                >
                                    <Link target="_blank" rel="noopener noreferrer" href={item.link}>{item.item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NavigationList