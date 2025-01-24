import Navbar from "@/components/header/Navbar";
import Hero from "@/components/about/Hero";
import Description from "@/components/about/Description";
import Values from "@/components/about/Values";
import USP from "@/components/about/USP";
import Founders from "@/components/about/Founders";

const page = () => {
    return (
        <section className="w-full">
            <Navbar />
            <Hero />
            <Description />
            <Values />
            <USP />
            <Founders />
        </section>
    )
}

export default page;