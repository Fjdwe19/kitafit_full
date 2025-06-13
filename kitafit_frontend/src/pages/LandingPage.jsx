import RelatedArticles from './RelatedArticles';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-100 to-red-200 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
            Pantau Kesehatan Jantung Anda dengan <span className="text-red-500">KitaFit</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Solusi pintar berbasis Machine Learning untuk deteksi risiko jantung, edukasi, dan gaya hidup sehat.
          </p>
          <Link
            to="/dashboard"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            Cek Kesehatan Anda 
          </Link>
        </div>
      </section>

      {/* Section Rekomendasi */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-red-100 p-3 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                alt="Heart Icon"
                className="w-8 h-8"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800">
                Lihat Rekomendasi Aktivitas & Makanan
              </p>
              <p className="text-xs text-gray-500">Berdasarkan Riwayat Kamu</p>
            </div>
          </div>
          <Link
            to="/rekomendasi"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-full text-sm font-medium"
          >
            Lebih Lanjut
          </Link>
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {[
            {
              title: "Analisis Risiko Jantung",
              icon: "https://cdn-icons-png.flaticon.com/512/3588/3588500.png",
              desc: "Prediksi kemungkinan risiko penyakit jantung berdasarkan data kesehatan pribadi Anda.",
              path: "/diagnosis"
            },
            {
              title: "Rekomendasi Gaya Hidup",
              icon: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
              desc: "Dapatkan saran makanan dan aktivitas yang menyehatkan jantung Anda.",
              path: "/education"
            },
            {
              title: "Chatbot Kesehatan",
              icon: "https://cdn-icons-png.flaticon.com/512/4712/4712055.png",
              desc: "Ajukan pertanyaan seputar kesehatan jantung kapan saja melalui chatbot pintar.",
              path: "/chatbot"
            },
            {
              title: "HeartConsult",
              icon: "https://cdn-icons-png.flaticon.com/512/10274/10274219.png",
              desc: "Temukan dan konsultasi dengan dokter spesialis jantung.",
              path: "/heartconsult"
            },
            {
              title: "LifeMap",
              icon: "https://cdn-icons-png.flaticon.com/512/2098/2098555.png",
              desc: "Temukan rumah sakit atau klinik jantung terdekat.",
              path: "/maps"
            }
          ].map((f, i) => (
            <Link
              to={f.path}
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border hover:shadow-xl transition duration-300 block">
              <img src={f.icon} alt="" className="w-20 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-red-600 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Artikel Terkait */}
      <RelatedArticles />

      {/* CTA Penutup */}
      <section className="bg-gradient-to-tr from-red-500 to-red-700 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Mulai Hidup Sehat Hari Ini</h2>
        <p className="mb-6 text-sm md:text-base">
          Gunakan KitaFit untuk mengawasi kesehatan jantung Anda secara cerdas dan terjangkau.
        </p>
        <a
          href="/register"
          className="bg-white text-red-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          Daftar Sekarang
        </a>
      </section>
      <a
        href="/chatbot"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white text-2xl p-4 rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
        aria-label="Chat dengan Bot"
      >
        💬
      </a>
    </div>
  );
}