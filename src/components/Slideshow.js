import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

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
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover flex-shrink-0" loading="lazy" />
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
        <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">lalalaaaaalallalalalalalalalalllalalallalaal</p>
        
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-6 text-[#000]">
        <a href="https://www.facebook.com/austriantaj/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} className="hover:text-[#b89f30]" />
        </a>
        <a href="https://www.instagram.com/austriantaj1080/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:text-[#b89f30]" />
        </a>
      </div>
    </div>
  );
};

export default Slideshow;
