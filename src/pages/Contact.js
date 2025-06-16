import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import logo from '../img/spielundspass_bg.png';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_7iwx57e',
      'template_rxfo5ql',
      formData,
      'wsM6-xa5o51TKoqM_'
    )
    .then(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => console.error('Failed to send email:', err));
  };

  return (
    <div className="bg-gradient-to-b from-[#A3DDFF] to-[#FFF8E1] min-h-screen flex flex-col pt-48 px-4 pb-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center flex-grow">
        {/* Left: Form */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#D19900] mb-6">Kontaktieren Sie uns</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ihre E-Mail"
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Ihre Nachricht"
              className="w-full p-3 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-[#FFA8CD] text-white py-2 px-6 rounded-xl font-semibold hover:bg-[#FF8BB0]"
            >
              Absenden
            </button>
            {success && <p className="text-green-600 pt-2">Nachricht erfolgreich gesendet!</p>}
          </form>
        </div>

        {/* Right: Info */}
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center md:text-left flex flex-col justify-center">
          <img src={logo} alt="Logo" className="mx-auto md:mx-0 w-40 mb-4" />
          <div className="h-[1px] w-3/4 mx-auto md:mx-0 bg-gray-300 my-6" />
          <p className="text-gray-800 font-medium mb-2">Email: office@spielundspass.co.at</p>
          <p className="text-gray-800 font-medium mb-2">Telefon: +43 (0) 676 4652228</p>
          <p className="text-gray-800 font-medium">Adresse: Dückegasse 7/2, 1220 Wien</p>
        </div>
      </div>
    </div>
  );
}
