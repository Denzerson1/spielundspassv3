import React, { useState } from "react";
import clsx from "clsx";

const roomImages = [
  require('../img/IMG_1156.jpeg'),
  require('../img/Ballebad.jpeg'),
  require('../img/burg.jpeg'),
  require('../img/fahrzeuge.jpeg'),
  require('../img/spielwand.jpeg'),
  require('../img/spiele.jpeg'),
  require('../img/rutsche.jpeg'),
  require('../img/kinderwindel.jpeg'),
  require('../img/kuche.jpeg'),
  require('../img/setting/restroom.jpeg'),
  
];

const decorationImages = [
  require('../img/design/custom.jpeg'),
  require('../img/design/custom2.jpeg'),
  require('../img/design/custom3.jpeg'),
  require('../img/design/custom4.jpeg'),
  require('../img/design/custom5.jpeg'),
  require('../img/design/custom6.jpeg'),
  require('../img/design/custom7.jpeg'),
];

export default function PhotosPage() {
  const [activeTab, setActiveTab] = useState("raum");

  const tabs = [
    { key: "raum", label: "Raum" },
    { key: "deko", label: "Dekorationen" },
  ];

  const images = activeTab === "raum" ? roomImages : decorationImages;

  return (
    <div className="pt-48 min-h-screen bg-gradient-to-b from-[#A3DDFF] via-[#EAF6FB] to-[#FFF8E1] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="pt-24 text-4xl sm:text-5xl font-extrabold text-orange-400 mb-8 text-center tracking-tight">
          Impressionen & Momente
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={clsx(
                "px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition",
                activeTab === tab.key
                  ? "bg-orange-400 text-white shadow"
                  : "bg-white text-orange-400 border border-orange-300 hover:bg-orange-100"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl shadow-xl bg-white hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`${activeTab} ${idx + 1}`}
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
