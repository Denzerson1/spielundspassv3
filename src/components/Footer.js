import { useState, useRef, useEffect } from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import logo from '../img/spielundspass_bg.png';

function Footer() {
  const [showPhones, setShowPhones] = useState(false);
  const phoneRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (phoneRef.current && !phoneRef.current.contains(e.target)) {
        setShowPhones(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="bg-[#FFF8E1] text-[#333] px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Logo & Slogan */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img
            src={logo}
            alt="Spiel und Spass Logo"
            className="w-40 mb-4"
          />
          <p className="text-sm text-[#444] max-w-xs">
            Mehr als nur ein Ort der Freude! Kinderträume werden wahr.
          </p>
          <p className="text-xs text-[#aaa] mt-2">Site by DK</p>

          {/* Social Icons + Phone */}
          <div className="relative flex space-x-4 mt-4 text-[#D19900] text-xl justify-center sm:justify-start" ref={phoneRef}>
            {/* Phone Icon */}
            <button
              onClick={() => setShowPhones(!showPhones)}
              className="relative focus:outline-none"
              aria-label="Telefonnummern anzeigen"
            >
              <FaPhoneAlt />
              {showPhones && (
                <div className="absolute top-8 left-0 bg-white border border-[#ccc] rounded shadow p-3 text-sm z-50 w-56 max-w-[90vw]">
                  <a href="tel:+436764652228" className="block text-[#333] hover:underline mb-2">
                    +43 676 4652228
                  </a>
                  <a href="tel:+4369911930909" className="block text-[#333] hover:underline">
                    +43 699 11930909
                  </a>
                </div>
              )}
            </button>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/kinderpartyraum_spielundspass?utm_source=ig_web_button_share_sheet&igsh=MnFvcm5tdHVlMzF3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@spielspass.kinder?_t=ZN-8x5soW5m8JC&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Rechtliches */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[#D19900] mb-3">Rechtliches</h3>
          <ul className="space-y-2 text-sm text-[#555]">
            <li><a href="/datenschutz">Datenschutz</a></li>
            <li><a href="/agb">AGB</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[#D19900] mb-3">Kontakt</h3>
          <p className="text-sm text-[#444] leading-6">
            Dückegasse 7/2 <br />
            1220 Wien<br />
            <a
              href="mailto:office@spielraumkingandqueen.at"
              className="text-[#00B0F0] underline"
            >
              office@spielundspass.co.at
            </a>
          </p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-[#999] mt-10 border-t border-[#eee] pt-4">
        © {new Date().getFullYear()} Spielraum Spiel und Spass – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

export default Footer;
