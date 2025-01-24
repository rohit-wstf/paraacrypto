import React from "react";
import NavigationList from "./NavigationList";
import AppDownload from "./AppDownload";
import NewsLetter from "./NewsLetter";
import PaymentOptions from "./PaymentOptions";
import Socials from "./Socials";
import WebsiteRights from "./WebsiteRights";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <section className="container-wrapper bg-[#FFFFFF] flex flex-col gap-10 py-9 px-3  sm:py-16 sm:px-[60px] lg:px-20 mx-auto">
        <NavigationList />
        <hr className="my-6 border-[#E2E2E2]" />
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between ">
          <AppDownload />
          <NewsLetter />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row sm:items-center sm:justify-between ">
          <PaymentOptions />
          <Socials />
        </div>
        <WebsiteRights />
      </section>
    </footer>
  );
};

export default Footer;
