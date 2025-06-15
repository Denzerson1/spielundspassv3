import React from "react";

const images = [
  require('../img/fotopage/branded.jpeg'),
  require('../img/fotopage/burg.jpeg'),
  require('../img/fotopage/Ballebad.jpeg'),
  require('../img/fotopage/fahrzeuge.jpeg'),
  require('../img/fotopage/rutsche.jpeg'),
  require('../img/fotopage/spielburg.jpeg'),
  require('../img/fotopage/spiel1.jpeg'),
  require('../img/fotopage/main2.jpeg'),
  require('../img/fotopage/tisch.jpeg'),
  require('../img/fotopage/thema.jpeg'),
  require('../img/fotopage/custom.jpeg'),
  require('../img/fotopage/custom2.jpeg'),
  require('../img/fotopage/custom3.jpeg'),
  require('../img/fotopage/custom4.jpeg'),
  require('../img/fotopage/custom5.jpeg'),
  require('../img/fotopage/IMG_1183.jpeg'),
  require('../img/fotopage/IMG_1189.jpeg'),
  require('../img/fotopage/IMG_3237.jpeg'),
  require('../img/fotopage/IMG_4405.jpeg'),
  require('../img/fotopage/IMG_8517.jpeg'),
];

export default function PhotosPage() {
  return (
    <div className="pt-64 min-h-screen bg-gradient-to-b from-[#A3DDFF] via-[#EAF6FB] to-[#FFF8E1] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-12 text-center tracking-tight">
          Impressionen & Momente
        </h1>
        {/* Layout: 3er Grid mit großen Bildern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl shadow-xl bg-white hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Impression ${idx + 1}`}
                className="w-full h-80 object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}