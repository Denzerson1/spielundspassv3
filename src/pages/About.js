import teamImg from '../img/setting/full.jpeg';
import raumImg from '../img/branded.jpeg';
import { PopupButton } from 'react-calendly';

export default function AboutPage() {
  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-[#A3DDFF] to-[#FFF8E1] px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl pt-36 font-bold text-[#2b3856] mb-20 text-center tracking-tight">
          Über uns
        </h1>

        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <div>
            <img
              src={teamImg}
              alt="Unser Team"
              className="w-full h-[420px] object-cover shadow-md"
            />
          </div>
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
            <p>
              Wir sind <strong>Spiel & Spaß</strong> – ein leidenschaftliches Team mit Herz, Erfahrung und Kreativität.
              Unser Ziel: Kindern und Familien einen sicheren, inspirierenden Ort für Spiel, Freude und besondere Momente zu bieten.
            </p>
            <p>
              Mit viel Engagement gestalten wir jede Feier individuell und sorgen für einen reibungslosen Ablauf.
              Vertrauen, Qualität und ein freundlicher Umgang stehen bei uns an erster Stelle.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 text-gray-800 text-lg leading-relaxed">
            <p>
              Unser moderner Spielraum in Wien ist liebevoll gestaltet, vielseitig ausgestattet und bietet Platz für
              Abenteuer, Kreativität und Entspannung. Sicherheit und Wohlbefinden für Kinder und Eltern stehen bei uns
              immer im Mittelpunkt.
            </p>
            <p>
              Wir freuen uns darauf, Ihre Wünsche umzusetzen und gemeinsam unvergessliche Erlebnisse zu schaffen.
              Sprechen Sie uns gerne an – wir sind für Sie da!
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={raumImg}
              alt="Unser Spielraum"
              className="w-full h-[420px] object-cover shadow-md"
            />
          </div>
        </section>
        <PopupButton
          url="https://calendly.com/spielundspass"
          rootElement={document.getElementById('root')}
          text="Jetzt buchen"
          className="mt-5 px-6 py-4 bg-gray-800 text-white text-sm sm:text-base rounded-full shadow-md hover:bg-gray-700 transition duration-200"
        />
      </div>
    </div>
  );
}