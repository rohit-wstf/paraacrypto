import Image from 'next/image';
import Link from 'next/link';
import instagram from "../../../public/footer/social-media-logos/Instagram.svg";
// import twitter from "../../../public/footer/social-media-logos/Twitter.svg";
import facebook from "../../../public/footer/social-media-logos/Facebook.svg";
import linkedin from "../../../public/footer/social-media-logos/LinkedIn.svg";

const socialIcons = [
    { name: "Instagram", link: "https://www.instagram.com/p/DEfVO4hhRcB/?utm_source=ig_web_copy_link", src: instagram },
    // { name: "Twitter", link: "https://x.com/paraacrypto/status/1876297731763056813", src: twitter },
    { name: "Facebook", link: "https://www.facebook.com/share/p/1VZ15dKBzR/", src: facebook },
    { name: "Linkedin", link: "https://www.linkedin.com/feed/update/urn:li:activity:7282061280218095616", src: linkedin },
];

const Socials = () => {
    return (
        <>
            <div className="flex flex-col gap-3 max-w-[316px] flex-1">
                <h4 className="font-medium text-start text-base sm:text-[22px] text-primaryText">
                    Follow Us
                </h4>
                <div className="flex gap-5">
                    {socialIcons.map((icon, index) => (
                        <Link href={icon.link} key={index} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <Image src={icon.src} width={30} height={30} alt={icon.name} className="h-6 w-6 sm:w-[30px] sm:h-[30px]" />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Socials;
