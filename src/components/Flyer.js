import flyer from '../img/flyer.jpg';
import { useState } from "react";
import { PopupButton } from 'react-calendly';
import { X } from "lucide-react";

export default function FlyerOverlay() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
            <div className="relative w-full max-w-md">
                {/* X-Button */}
                <button
                    onClick={() => setVisible(false)}
                    className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition z-10"
                    aria-label="Schließen"
                >
                    <X size={24} />
                </button>

                {/* Flyer-Bild */}
                <img
                    src={flyer}
                    alt="Sommerspecial"
                    className="w-full h-auto rounded-xl shadow-lg transition-opacity duration-1000"
                />

                {/* Button unten */}
                <div className="absolute bottom-4 w-full flex justify-center">
                    <PopupButton
                        url="https://calendly.com/spielundspass"
                        rootElement={document.getElementById('root')}
                        text="Jetzt buchen"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full shadow-md transition"
                    />
                </div>

            </div>
        </div>
    );
}
