import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../img/spielundspass_bg.png";
import { PopupButton } from 'react-calendly';
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";

// Slide images
const slides = [
  require('../img/brand/ball.jpeg'),
  require('../img/spiele/spielburgmain.jpeg'),
  require('../img/setting/full.jpeg'),
  require('../img/spiele/kids.jpeg'),
];

const NavbarWithSlideshow = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [index, setIndex] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  // Slideshow index auto-increment
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get navbar height on mount
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Active section tracking for home
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      const sectionIds = ["home", "ueber-uns", "party", "preise", "fotos", "kontakt"];
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
    { label: "Über uns", id: "/ueber-uns" },
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
    <>
      {/* Navbar */}
      <header
        ref={navbarRef}
        className={`w-full fixed top-0 left-0 z-10 bg-white text-gray-700 transition-all duration-500 ease-in-out`}

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

      {/* Slideshow under navbar */}
      <div
        className="relative w-full overflow-hidden bg-gray-900 font-mukta"
        style={{
          height: `calc(100vh - ${navbarHeight}px)`,
          marginTop: `${navbarHeight}px`,
        }}
      >
        {/* Slides */}
        <div
          className="absolute inset-0 flex transition-transform duration-1000"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>

        
        {/* Text */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light drop-shadow-lg">
            Der schönste Ort für unvergessliche Kindergeburtstage!
          </p>
        </div>

        {/* Social icons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-6 text-white">
          <a href="tel:+436764652228" className="hover:text-[#D19900]">
            <FaPhoneAlt size={24} />
          </a>
          <a
            href="https://www.instagram.com/kinderpartyraum_spielundspass"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D19900]"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@spielspass.kinder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D19900]"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarWithSlideshow;
