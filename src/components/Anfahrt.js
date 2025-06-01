function LocationMap() {
    return (
      <section className="pt-8 pb-16 bg-gradient-to-b from-[#FDF6EC] to-[#FFF8E1] px-6 pt-4">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-4 drop-shadow-sm">
          Hier finden Sie uns
        </h2>
  
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <iframe
            className="w-full h-96 border-t-4 border-b-4 border-[#FFE699]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.7312533670033!2d16.4282329!3d48.250300599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07b26b5c4bc7%3A0x539dddf1623c201c!2sSpiel%20%26%20Spass%20der%20Kinderpartyraum%20KG!5e0!3m2!1sde!2sat!4v1748520225726!5m2!1sde!2sat"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
  
          <p className="py-4 text-center text-lg text-gray-800 font-medium">
            Kinderpartyraum Spiel & Spaß,<br/> Dückegasse 7/2, 1220 Wien
          </p>
        </div>
      </section>
    );
  }
  
  export default LocationMap;