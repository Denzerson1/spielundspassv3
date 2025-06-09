import React from "react";

const images = [
  require('../img/Ballebad.jpeg'),
  require('../img/branded.jpeg'),
  require('../img/burg.jpeg'),
  require('../img/fahrzeuge.jpeg'),
  require('../img/spielwand.jpeg'),
  require('../img/spiele.jpeg'),
  require('../img/rutsche.jpeg'),
  require('../img/kinderwindel.jpeg'),
  require('../img/kuche.jpeg'),
  require('../img/setting/restroom.jpeg'),
  require('../img/Ballebad.jpeg'),
  require('../img/branded.jpeg'),
  require('../img/burg.jpeg'),
  require('../img/fahrzeuge.jpeg'),
  require('../img/spielwand.jpeg'),
  require('../img/spiele.jpeg'),
  require('../img/rutsche.jpeg'),
  require('../img/kinderwindel.jpeg'),
  require('../img/kuche.jpeg'),
  require('../img/setting/restroom.jpeg'),
  require('../img/Ballebad.jpeg'),
  require('../img/branded.jpeg'),
  require('../img/burg.jpeg'),
  require('../img/fahrzeuge.jpeg'),
  require('../img/spielwand.jpeg'),
  require('../img/spiele.jpeg'),
  require('../img/rutsche.jpeg'),
  require('../img/kinderwindel.jpeg'),
  require('../img/kuche.jpeg'),
  require('../img/setting/restroom.jpeg'),
];

export default function PhotosPage() {
  return (
    <div className="pt-48 min-h-screen bg-gradient-to-b from-[#A3DDFF] via-[#EAF6FB] to-[#FFF8E1] py-24 px-4">
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