import React from "react";

const playAreas = [
  {
    title: "Spielburg",
    image: "/images/spielburg.jpg",
    description:
      "Entdecke Abenteuer pur in unserer fesselnden Spielburg! Kreative Rollenspiele, spannende Rutschen und unvergesslicher Spielspaß für alle kleinen Entdecker. Tauche ein in eine Welt voller Fantasie und Action!",
  },
  {
    title: "Malerecke",
    image: "/images/malerecke.jpg",
    description:
      "Lass deine künstlerische Seite erblühen in unserer zauberhaften Malerecke! Hier können kleine Künstler ihre Fantasie auf die Leinwand bringen und bunte Meisterwerke erschaffen. Entdecke die Freude am Malen und gestalte unvergessliche Kunstwerke!",
  },
  {
    title: "Kletterwand",
    image: "/images/kletterwand.jpg",
    description:
      "Erobere neue Höhen in unserer aufregenden Kletterwand! Hier können kleine Abenteurer ihre Geschicklichkeit und Kraft testen, während sie sich sicher an bunten Griffen nach oben bewegen.",
  },
  {
    title: "Lesebereich",
    image: "/images/lesebereich.jpg",
    description:
      "Tauche ein in spannende Geschichten in unserem gemütlichen Lesebereich! Perfekt zum Entspannen und Träumen."
  },
  {
    title: "Bauecke",
    image: "/images/bauecke.jpg",
    description:
      "Baue große Träume mit kleinen Händen! Unsere Bauecke bietet zahlreiche Bausteine für kreative Konstruktionen."
  },
  {
    title: "Musikzone",
    image: "/images/musikzone.jpg",
    description:
      "Entdecke deine Liebe zur Musik! Trommeln, Glockenspiele und viele weitere Instrumente laden zum Musizieren ein."
  },
  {
    title: "Rollenspielzone",
    image: "/images/rollenspielzone.jpg",
    description:
      "Verkleiden, Kochen, Arzt spielen und mehr! Hier dürfen Kinder in verschiedenste Rollen schlüpfen und ihrer Fantasie freien Lauf lassen."
  },
  {
    title: "Wasserstation",
    image: "/images/wasserstation.jpg",
    description:
      "Wasserspaß garantiert! Entdecke physikalische Prinzipien durch spielerisches Planschen und Experimentieren."
  },
  {
    title: "Ruheecke",
    image: "/images/ruheecke.jpg",
    description:
      "Zeit zum Entspannen! In der Ruheecke können Kinder sich zurückziehen, entspannen oder ein Nickerchen machen."
  }
];

const PlayAreaGrid = () => {
  return (
    <div className="w-full flex justify-center bg-[#f0f8ff] py-10">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-4">HEY! LET'S PLAY!</h1>
        <p className="text-center text-lg font-semibold text-gray-700 mb-10">
          Willkommen in unserem zauberhaften Kinderspielraum in Wien! Hier erwartet dich und deine kleinen Entdecker eine Welt voller Spaß, Abenteuer und kreativer Entfaltung!
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