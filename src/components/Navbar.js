import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../img/spielundspass_bg.png";
import { PopupButton } from 'react-calendly';
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/home") {
            const sectionIds = [
                "home",
                "über-uns",
                "party",
                "preise",
                "fotos",
                "kontakt",
            ];

            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setActiveSection(entry.target.id);
                        }
                    });
                },
                {
                    rootMargin: "-50% 0px -50% 0px",
                    threshold: 0,
                }
            );

            sectionIds.forEach(id => {
                const section = document.getElementById(id);
                if (section) observer.observe(section);
            });

            return () => observer.disconnect();
        } else {
            setActiveSection("");
        }
    }, [location.pathname]);

    const navItems = [
        { label: "Home", id: "/" },
        { label: "Über uns", id: "/über-uns" },
        { label: "Preise", id: "/preise" },
        { label: "Fotos", id: "/fotos" },
        { label: "Kontakt", id: "/kontakt" },
    ];

    const getActiveClass = (itemId) => {
        const path = location.pathname;
        if (path === "/" || path === "/home") {
            const sectionId = itemId.startsWith("/") ? itemId.slice(1) : itemId;
            return activeSection === sectionId ? "text-[#FFC000]" : "";
        }
        return path === itemId ? "text-[#FFC000]" : "";
    };

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
                bg-white shadow text-gray-700`}
        >
            <div className="flex flex-col items-center py-2 px-4 md:px-8 pb-6">
                <a href="/">
                    <div className="w-[250px] h-auto mb-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="mx-auto max-h-[200px] object-contain"
                        />
                    </div>
                </a>

                <div className="w-full flex items-center justify-between md:justify-center relative">
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <ul
                        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-5
                            font-semibold text-sm sm:text-base text-center absolute md:static top-full left-0 w-full md:w-auto
                            text-black bg-white md:bg-white py-4 md:py-0 shadow-md md:shadow-none z-40`}
                    >
                        {navItems.map((item, idx) => (
                            <li
                                key={idx}
                                className={`pt-2 hover:text-[#FFC000] transition-colors ${getActiveClass(item.id)}`}
                            >
                                <a
                                    href={item.id.startsWith("/") ? item.id : `#${item.id}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="md:hidden">
                            <PopupButton
                                url="https://calendly.com/spielundspass"
                                rootElement={document.getElementById('root')}
                                text="Jetzt buchen"
                                className="bg-white rounded-full px-6 py-2 text-sm font-bold text-[#2b3856] shadow-md hover:bg-gray-100 tracking-wide"
                            />
                        </li>
                    </ul>

                    <div className="hidden sm:block absolute right-4 sm:right-[8%]">
                        <PopupButton
                            url="https://calendly.com/spielundspass"
                            rootElement={document.getElementById('root')}
                            text="Jetzt buchen"
                            className="bg-white rounded-full px-6 py-2 text-sm font-bold text-[#2b3856] shadow-md hover:bg-gray-100 tracking-wide"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
