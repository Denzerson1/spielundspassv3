import { PartyPopper, Users, Star, Smile, MapPin, Instagram, Mail } from "lucide-react";
import { PopupButton } from 'react-calendly';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FFF8E1]">
      <div className="pt-56 max-w-5xl mx-auto p-6 space-y-10">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-pink-600">Über Spiel & Spaß</h1>
          <p className="text-lg text-gray-700">
            Der Ort, an dem Kindergeburtstage zu unvergesslichen Erlebnissen voller Freude, Spiel und Lachen werden.
          </p>
        </section>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/party-room.jpg" alt="Partyraum" className="rounded-2xl shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-pink-500">Unsere Geschichte</h2>
            <p className="text-gray-700">
              Spiel & Spaß wurde von engagierten Eltern gegründet, die sich einen stressfreien und magischen Ort für Kinderfeiern wünschten. Aus dieser Vision entstand ein beliebter Partyraum im Herzen Berlins, der jährlich hunderten Familien ein Lächeln ins Gesicht zaubert.
            </p>
          </div>
        </section>

        {/* Values & Vision */}
        <section className="bg-pink-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Unsere Werte & Vision</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Freude und Kreativität in jedem Detail</li>
            <li>Ein sicherer, herzlicher Raum für Kinder</li>
            <li>Individuelle und unvergessliche Erlebnisse</li>
            <li>Gemeinschaftsorientiert und inklusiv</li>
          </ul>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Unser Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Lena", role: "Party-Koordinatorin", icon: Smile },
              { name: "Tom", role: "Spiele-Experte", icon: Star },
              { name: "Maya", role: "Deko-Spezialistin", icon: PartyPopper },
            ].map(({ name, role, icon: Icon }) => (
              <div key={name} className="bg-white p-4 rounded-xl shadow-md text-center">
                <Icon className="mx-auto mb-2 text-pink-400" size={32} />
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-pink-100 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">Das sagen Eltern</h2>
          <blockquote className="italic text-gray-800 border-l-4 border-pink-400 pl-4">
            „Spiel & Spaß hat den 6. Geburtstag meiner Tochter zu einem zauberhaften Erlebnis gemacht. Alles war liebevoll organisiert!“ – Sarah W.
          </blockquote>
        </section>

        {/* Social Proof & CTA */}
        <section className="text-center space-y-4">
          
          {/* BUCHUNG button (desktop) */}
          <PopupButton
            url="https://calendly.com/spielundspass"
            rootElement={document.getElementById('root')}
            text="Jetzt buchen"
            className="bg-white rounded-full px-6 py-2 text-sm font-bold text-[#2b3856] shadow-md hover:bg-gray-100 tracking-wide"
          />
          <p className="text-gray-700">Folge uns auf Social Media oder kontaktiere uns direkt für deine individuelle Feier.</p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">
              <Instagram size={28} />
            </a>
            <a href="mailto:info@spielundspass.de" className="text-pink-500 hover:text-pink-700">
              <Mail size={28} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}