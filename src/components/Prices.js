import React from "react";
import { Clock } from "lucide-react";

function PricingTable() {
  const commonDetails = [
    "* Kaffee, Tee & Kindersirup inklusive",
    "* 30min kostenlose Vorbereitungszeit",
  ];

  const pricingData = [
    {
      title: "Montag – Donnerstag",
      items: [{ time: "15:00 – 20:00", price: "€ 250" }],
    },
    {
      title: "Freitag",
      items: [{ time: "15:00 – 20:00", price: "€ 300" }],
    },
    {
      title: "Samstag/Sonntag & Feiertage",
      items: [
        { time: "10:00 – 14:00", price: "€ 350" },
        { time: "16:00 – 20:00", price: "€ 350" },
        { time: "10:00 – 20:00", price: "€ 600" },
      ],
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center py-14 px-4 md:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-10 text-center">
        PREISE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        {pricingData.map((block, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-cyan-300 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="text-sm font-semibold text-cyan-600 mb-1">
                0{index + 1}
              </div>
              <h2 className="text-xl sm:text-2xl text-orange-500 font-extrabold mb-4">
                {block.title}
              </h2>
              <hr className="mb-4 border-cyan-200" />
              {block.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between mb-3 text-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm sm:text-base">{item.time}</span>
                  </div>
                  <div className="font-medium text-sm sm:text-base">
                    {item.price}
                  </div>
                </div>
              ))}
              <hr className="my-4 border-cyan-200" />
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                {commonDetails.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          Bei uns ist jeder willkommen, unabhängig vom Alter!
        </p>
        <button className="mt-5 px-6 py-2 bg-gray-800 text-white text-sm sm:text-base rounded-full shadow-md hover:bg-gray-700 transition duration-200">
          Jetzt buchen!
        </button>
      </div>
    </div>
  );
}

export default PricingTable;
