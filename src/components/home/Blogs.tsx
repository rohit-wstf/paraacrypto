import Image from "next/image";
import Link from "next/link";
import rightArrow from "../../../public/assets/icons/east.svg";
import blog1Image from "../../../public/assets/blogImages/blog1.png";
import blog2Image from "../../../public/assets/blogImages/blog2.png";
import blog3Image from "../../../public/assets/blogImages/blog3.png";


const blogData = [
    {
        title: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet",
        description: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet",
        image: blog1Image,
        href: "#",
        createdAt: "Date • Time To Read"
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet",
        description: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet",
        image: blog2Image,
        href: "#",
        createdAt: "Date • Time To Read"
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet",
        description: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet",
        image: blog3Image,
        href: "#",
        createdAt: "Date • Time To Read"
    }
]

const Blogs = () => {

    return (
        <section className="w-full">
            <div className="container-wrapper py-16 px-[60px] mx-auto flex flex-col gap-16">
                <div className="flex items-center justify-between">
                    <h2 className="text-[45px] leading-[52px] text-primaryText">
                        Read our Blogs
                    </h2>
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <h6 className="text-[16px] leading-6 tracking-[0.15px]">
                                View all
                            </h6>
                            <Image src={rightArrow} alt="" className="h-[16px] w-[16px]"></Image>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-between gap-y-4">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default Blogs;

const Cards = () => {
    return (
        <>
            {
                blogData.map((blog, index) => {
                    return (
                        <div key={index} className="w-[427px] h-[412px] rounded-2xl pb-4 flex flex-col gap-4 overflow-hidden blog-card-shadow" >
                            <div className="h-[240px] ">
                                <Image src={blog.image} alt="" className="w-full h-full"></Image>
                            </div>
                            <div className="px-4 gap-2 flex flex-col">
                                <p className="text-[14px] leading-5 tracking-[0.25px] text-tertiaryText">
                                    {blog.createdAt}
                                </p>
                                <h5 className="text-primaryText text-[22px] leading-[28px]">
                                    {blog.title}
                                </h5>
                                <h6 className="text-secondaryText text-[16px] leading-6 tracking-[0.15px]">
                                    {blog.description}
                                </h6>
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}