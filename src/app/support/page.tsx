import ContactForm from "@/components/support/ContactForm";
import Navbar from "@/components/header/Navbar";
import Address from "@/components/support/Address";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="container-wrapper mx-auto px-3 py-9 flex flex-col gap-12 ">
          <Address />
          <section className="flex flex-col lg:flex-row gap-6 md:gap-10 md:p-[60px]">
            <div className="flex flex-col flex-1 gap-4">
              <h2 className="font-bold text-[28px] sm:text-[45px] text-primaryText">
                Write To Us.{" "}
              </h2>
              <p className="text-secondaryText font-normal  md:font-medium text-sm md:text-base">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                tristique felis non odio accumsan laoreet.
              </p>
            </div>
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
