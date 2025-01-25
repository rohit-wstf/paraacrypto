"use client";
import React, { useState } from 'react';
import Link from "next/link";
import logo from "../../../public/favicon.svg"
import Image from 'next/image';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("clicked  " + isMenuOpen);
    };

    const navItems = [
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "Trade",
            path: "#"
        },
        // {
        //     name: "Learn",
        //     path: "#"
        // },
        {
            name: "Swap",
            path: "#"
        }, {
            name: "Support",
            path: "/support"
        }
    ]


    return (
        <section className="w-full">
            <div className="container-wrapper mx-auto h-[80px] p-3 md:py-5 md:px-[60px] flex justify-between items-center ">
                <div className='flex items-center gap-2'>
                    <button
                        className="lg:hidden flex text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    <Link href="/" className='flex gap-2 items-center'>
                        <Image src={logo} alt="" className="h-6 w-6"></Image>
                        <h3 className="weight700 font-medium text-primaryText text-[22px] ">Paraa Crypto</h3>
                    </Link>
                </div>
                <div>
                    <div className="gap-8 hidden lg:flex">
                        {
                            navItems.map((item, index) => {
                                return (
                                    <Link key={index} href={item.path}><h6 key={index} className="px-5 py-2 text-tertiaryText text-center rounded-[4px] ">{item.name}</h6></Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <button className="py-[6px] md:py-2 px-4 md:px-5 bg-primaryText rounded-full text-white">
                        <h6 className="weight500 text-xs">Sign In</h6>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-secondaryBackground text-white space-y-4 px-4 py-3">
                    <div className="gap-8 flex flex-col lg:hidden">
                        {
                            navItems.map((item, index) => {
                                return (
                                    <Link key={index} href={item.path}><h6 key={index} className="px-5 py-2 text-tertiaryText text-center ">{item.name}</h6></Link>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </section>
    )
}

export default Navbar;

