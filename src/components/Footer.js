// components/Footer.jsx
import {
  FaPhoneAlt,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import logo from '../img/spielundspass_bg.png';

function Footer() {
  return (
    <footer className="bg-[#FFF8E1] text-[#333] px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & Slogan */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img
            src={logo}
            alt="King and Queen Logo"
            className="w-40 mb-4"
          />
          <p className="text-sm text-[#444] max-w-xs">
            Mehr als nur ein Ort der Freude! Kinderträume werden wahr.
          </p>
          <div className="flex space-x-4 mt-4 text-[#D19900] text-xl justify-center sm:justify-start">
            <a href="tel:+436764652228"><FaPhoneAlt /></a>
            <a
              href="https://www.instagram.com/kinderpartyraum_spielundspass?utm_source=ig_web_button_share_sheet&igsh=MnFvcm5tdHVlMzF3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@spielspass.kinder?_t=ZN-8x5soW5m8JC&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-[#D19900] mb-3">Schnellzugriff</h3>
          <ul className="space-y-2 text-sm text-[#555]">
            <li><a href="#">Home</a></li>
            <li><a href="#">Über uns</a></li>
            <li><a href="#">Party</a></li>
            <li><a href="#">Fotos</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>

        {/* Impressum */}
        <div>
          <h3 className="font-semibold text-[#D19900] mb-3">Rechtliches</h3>
          <ul className="space-y-2 text-sm text-[#555]">
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Datenschutz</a></li>
            <li><a href="#">AGB</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-semibold text-[#D19900] mb-3">Kontakt</h3>
          <p className="text-sm text-[#444] leading-6">
            Dückegasse 7/2 <br />
            1220 Wien<br />
            +43 (0) 676 4652228<br />
            <a href="mailto:office@spielraumkingandqueen.at" className="text-[#00B0F0] underline">
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
