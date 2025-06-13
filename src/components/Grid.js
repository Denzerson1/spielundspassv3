import React from "react";
import fahrzeuge from '../img/fahrzeuge.jpeg';
import ballebad from '../img/Ballebad.jpeg';

const playAreas = [
  {
    title: "Spielburg",
    image: require('../img/burg.jpeg'),
    description:
      "Klettere, rutsche und entdecke spannende Abenteuer in unserer fantasievollen Spielburg!",
  },
  {
    title: "Geburtstage mit Thema",
    image: require('../img/branded.jpeg'),
    description:
      "Feiere unvergessliche Geburtstage mit liebevoll gestalteten Mottos und viel Spaß für alle Gäste.",
  },
  {
    title: "Bällebad",
    image: require('../img/spiele/balle2.jpeg'),
    description:
      "Tauche ein ins bunte Bällebad – hier ist Lachen und Toben garantiert!",
  },
  {
    title: "Spielwand",
    image: require('../img/spielwand.jpeg'),
    description:
      "Entdecke spannende Spiele und fördere spielerisch deine Geschicklichkeit an unserer Spielwand.",
  },
  {
    title: "Rollenspielbereich",
    image: require('../img/spiele.jpeg'),
    description:
      "Hier können Kinder in verschiedene Rollen schlüpfen und ihrer Fantasie freien Lauf lassen.",
  },
  {
    title: "Rutsche",
    image: require('../img/rutsche.jpeg'),
    description:
      "Mit Schwung die Rutsche hinunter – Spaß und Action für alle kleinen Abenteurer.",
  },
  {
    title: "Wickelraum",
    image: require('../img/kinderwindel.jpeg'),
    description:
      "Unser moderner Wickelraum bietet Eltern eine saubere, komfortable Umgebung für die Kleinsten.",
  },
  {
    title: "Küche",
    image: require('../img/kuche.jpeg'),
    description:
      "Für Eltern: Unsere voll ausgestattete Küche erleichtert das Zubereiten von Snacks und Mahlzeiten.",
  },
  {
    title: "Toiletten",
    image: require('../img/setting/restroom.jpeg'),
    description:
      "Helle, gepflegte Sanitäranlagen sorgen für Wohlbefinden und Hygiene für die ganze Familie.",
  }
];

const PlayAreaGrid = () => {
  return (
    <div className="pt-12 w-full flex justify-center bg-gradient-to-b from-[#E0F7FA] to-[#EFF6FF]">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-4">SPIELEN. LACHEN. WOHLFÜHLEN!</h1>
        <p className="text-center text-md font-semibold text-gray-700 mb-10">
          Willkommen in einer Welt voller Fantasie und Geborgenheit! Bei uns erleben Kinder Abenteuer, Kreativität und Freude – während Eltern sich auf höchsten Komfort, Sicherheit und ein herzliches Ambiente verlassen können. Genießt gemeinsam besondere Momente, die in Erinnerung bleiben!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playAreas.map((area, index) => (
            <div key={index} className="border rounded-xl shadow-md overflow-hidden p-4 bg-white">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h2>
              <p className="text-gray-600 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayAreaGrid;