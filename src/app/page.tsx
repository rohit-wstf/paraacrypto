import Navbar from "@/components/header/Navbar";
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import CryptoBuying from "@/components/home/CryptoBuying";
import PlatformCard from "@/components/home/PlatformCard";
import CryptoPartners from "@/components/home/CryptoPartners";
import GlobalPartners from "@/components/home/GlobalPartners";
import TopCrypto from "@/components/home/TopCrypto";
// import Blogs from "@/components/home/Blogs";
import Faqs from "@/components/home/Faqs";
import TrackTokens from "@/components/home/TrackTokens";

const page = () => {
  return (
    <>
      <div className="items-center justify-center">
        <div className="linearBg md:h-[648px] h-auto flex flex-col md:justify-between justify-normal">
          <Navbar />
          <Hero />
        </div>
        <ServiceCards />
        <CryptoBuying />
        <PlatformCard />
        <CryptoPartners />
        <GlobalPartners />
        <TopCrypto />
        {/* <Blogs /> */}
        <Faqs />
        <TrackTokens />
      </div>
    </>
  )
}

export default page;


