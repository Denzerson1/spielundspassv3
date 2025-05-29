import { useEffect, useState } from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Susanna Z.",
      text: "Super Location! Ideal für Kinderpartys. Räumlichkeiten und Ausstattung einfach nur TOP!!!!! Organisation super!",
    },
    {
      name: "Mika A.",
      text: "Ich war an einem Nachmittag im Spiel & Spaß mit meinen Kids (5 & 7 Jahre alt) und die Mädels waren begeistert!",
    },
    {
      name: "Lena F.",
      text: "Total liebevolle Gestaltung, genug Platz und alles sehr sauber. Die Kinder wollten gar nicht mehr gehen!",
    },
    {
      name: "Tom R.",
      text: "Toller Service, unkomplizierte Buchung und richtig coole Ausstattung – wir kommen wieder!",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FDF6EC] to-[#E0F7FA] py-16 px-6 text-center font-sans">
      <h2 className="text-4xl font-bold text-[#D19900] mb-2">Was Eltern sagen</h2>
      <p className="text-md text-gray-600 mb-10">
      Weil glückliche Kinder das schönste Feedback sind.
  </p>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
            {reviews.slice(0, 2).map((review, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border-t-4 border-[#FFA8CD] text-left"
              >
                <p className="text-gray-700 italic text-lg leading-relaxed">“{review.text}”</p>
                <p className="mt-4 font-semibold text-[#00B0F0]">{review.name}</p>
              </div>
            ))}
          </div>

          {/* Slide 2 */}
          <div className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
            {reviews.slice(2, 4).map((review, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border-t-4 border-[#FFA8CD] text-left"
              >
                <p className="text-gray-700 italic text-lg leading-relaxed">“{review.text}”</p>
                <p className="mt-4 font-semibold text-[#00B0F0]">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center space-x-2">
        {[0, 1].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === dot ? "bg-[#D19900]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
