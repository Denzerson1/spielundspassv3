// components/ContactPage.jsx
export default function ContactPage() {
    return (
      <div className="bg-[#A3DDFF] min-h-screen py-12 px-4">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#D19900] mb-6">Kontaktieren Sie uns</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Ihr Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Ihre E-Mail"
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
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
          </form>
        </div>
      </div>
    );
  }
  