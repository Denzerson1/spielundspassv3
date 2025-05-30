import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../img/spielundspass_bg.png";
import { PopupButton } from 'react-calendly';
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [activeSection, setActiveSection] = useState("");

    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll < lastScrollTop.current) {
                setIsSticky(true);
                setVisible(true);
            } else {
                setVisible(false);
            }
            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Only observe sections if we're on the homepage or a page with sections
        if (location.pathname === "/" || location.pathname === "/home") {
            const sectionIds = [
                "home",
                "über-uns",
                "party",
                "preise",
                "fotos",
                "party-blog",
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
            // On routed pages (e.g. /kontakt) no section observing needed
            setActiveSection(""); 
        }
    }, [location.pathname]);

    // Nav items: id here represents the path or the section id
    const navItems = [
        { label: "Home", id: "/" },
        { label: "Über uns", id: "über-uns" },
        { label: "Party", id: "party" },
        { label: "Preise", id: "/preise" },
        { label: "Fotos", id: "fotos" },
        { label: "Party-Blog", id: "party-blog" },
        { label: "Kontakt", id: "/kontakt" },
    ];

    // Determine which nav item is active
    // If the location.pathname matches a nav item id (full path), highlight it.
    // Otherwise, use activeSection from scroll.
    const getActiveClass = (itemId) => {
        if (itemId.startsWith("/")) {
            // For full route paths like "/kontakt"
            return location.pathname === itemId ? "text-[#FFC000]" : "";
        } else {
            // For section IDs like "party"
            return activeSection === itemId ? "text-[#FFC000]" : "";
        }
    };

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out 
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} 
                ${isSticky ? "bg-[#f9ffff]/90 shadow text-gray-700" : "bg-transparent text-white"} 
                backdrop-blur-sm`}
        >
            <div className="flex flex-col items-center py-2 px-4 md:px-8 pb-6">
                {/* Logo */}
                <a href="/">
                    <div className="w-[180px] h-auto mb-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="mx-auto max-h-[200px] object-contain"
                        />
                    </div>
                </a>

                {/* Hamburger + Nav */}
                <div className="w-full flex items-center justify-between md:justify-center relative">
                    {/* Hamburger */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Navigation Links */}
                    <ul
                        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-5
                            font-semibold text-sm sm:text-base text-center absolute md:static top-full left-0 w-full md:w-auto
                            ${isSticky ? "text-black" : "text-white"} bg-white md:bg-transparent py-4 md:py-0 shadow-md md:shadow-none z-40`}
                    >
                        {navItems.map((item, idx) => (
                            <li
                                key={idx}
                                className={`pt-2 hover:text-[#FFC000] transition-colors ${getActiveClass(item.id)}`}
                            >
                                {/* Use # for section links and full path for routes */}
                                <a
                                    href={item.id.startsWith("/") ? item.id : `#${item.id}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}

                        {/* BUCHUNG button (mobile) */}
                        <li className="md:hidden">
                            <PopupButton
                                url="https://calendly.com/spielundspass"
                                rootElement={document.getElementById('root')}
                                text="Jetzt buchen"
                                className="bg-white rounded-full px-6 py-2 text-sm font-bold text-[#2b3856] shadow-md hover:bg-gray-100 tracking-wide"
                            />
                        </li>
                    </ul>

                    {/* BUCHUNG button (desktop) */}
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
