import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";

const slides = [
  require('../img/brand/ball.jpeg'),
  require('../img/spiele/spielburgmain.jpeg'),
  require('../img/setting/full.jpeg'),
  require('../img/spiele/kids.jpeg'),
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 font-mukta">

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

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black to-transparent z-10" />

      {/* Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light drop-shadow-lg">
          Der schönste Ort für unvergessliche Kindergeburtstage!
        </p>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-6 text-white">
        <a href="tel:+436764652228" className="hover:text-[#D19900]">
          <FaPhoneAlt size={24} />
        </a>
        <a
          href="https://www.instagram.com/kinderpartyraum_spielundspass?utm_source=ig_web_button_share_sheet&igsh=MnFvcm5tdHVlMzF3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#D19900]"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@spielspass.kinder?_t=ZN-8x5soW5m8JC&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#D19900]"
        >
          <FaTiktok size={24} />
        </a>
      </div>

    </div>
  );
};

export default Slideshow;
