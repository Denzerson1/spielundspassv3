import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../img/spielundspass.png";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll < lastScrollTop) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        "Home",
        "Über uns",
        "Party",
        "Preise",
        "Fotos",
        "Party-Blog",
        "Kontakt",
    ];

    return (
        <header
            className={`w-full z-50 transition-all duration-300 ${isSticky ? "sticky top-0 bg-[#f9ffff]/90 shadow" : ""
                }`}
        >
            <div className="flex flex-col items-center py-4 px-4 md:px-8">
                {/* Logo */}
                <a href="/">
                    <div className="w-[220px] h-auto mb-4">
                        <img
                            src={logo}
                            alt="Logo"
                            className="mx-auto max-h-[300px] object-contain"
                        />
                    </div>
                </a>

                {/* Hamburger + Nav Container */}
                <div className="w-full flex items-center justify-between md:justify-center relative">
                    {/* Hamburger Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Nav Links */}
                    <ul
                        className={`${isOpen ? "flex" : "hidden"
                            } md:flex flex-col md:flex-row items-center gap-6 text-gray-700 font-semibold text-sm sm:text-base text-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 shadow-md md:shadow-none z-40`}
                    >
                        {navItems.map((item, idx) => (
                            <li
                                key={idx}
                                className={`transition-colors hover:text-orange-500 ${item === "Preise" ? "text-orange-500" : ""
                                    }`}
                            >
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}

                        {/* BUCHUNG Button for Mobile Menu */}
                        <li className="md:hidden">
                            <button className="bg-white rounded-full px-6 py-2 text-sm font-bold text-[#2b3856] shadow-md hover:bg-gray-100 tracking-wide">
                                BUCHUNG
                            </button>
                        </li>
                    </ul>

                    {/* BUCHUNG Button for Desktop */}
                    <div className="hidden sm:block absolute right-4 sm:right-[8%]">
                        <button className="bg-white rounded-full px-5 sm:px-6 py-2 text-sm font-bold text-[#2b3856] shadow-md hover:bg-gray-100 tracking-wide">
                            BUCHUNG
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
