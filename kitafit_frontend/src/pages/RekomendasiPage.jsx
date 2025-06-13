import React, { useState } from "react";

export default function RekomendasiPage() {
  const [activeTab, setActiveTab] = useState("aktivitas");

  const aktivitasList = [
    {
      title: "Jalan Kaki",
      durasi: "30 menit/hari",
      kalori: 200,
      img: "https://media.istockphoto.com/id/1144757222/id/foto/pria-berjalan-di-taman-luar-ruangan-orang-orang-melakukan-gaya-hidup-sehat.jpg?s=612x612&w=0&k=20&c=6cLytTl_GK4kKlkPhndgJTTOAw9S-5gK204j87cs0-g=",
    },
    {
      title: "Angkat Beban 5kg",
      durasi: "15 menit/hari",
      kalori: 100,
      img: "https://refit.co.id/wp-content/uploads/2020/01/54.-REFIT-TOFFEEDEV-Penyebab-Lengan-Sakit-Setelah-Angkat-Beban-Kenapa_-1-scaled.jpg",
    },
    {
      title: "Yoga Ringan",
      durasi: "20 menit/hari",
      kalori: 210,
      img: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1608543180/attached_image/mengenal-hatha-yoga-dasar-dari-segala-jenis-yoga.jpg",
    },
  ];

  const makananList = [
    {
      title: "Salad Sayuran",
      deskripsi: "Rendah kalori dan tinggi serat.",
      img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg",
    },
    {
      title: "Ikan Salmon",
      deskripsi: "Kaya omega-3 yang baik untuk jantung.",
      img: "https://www.ibudanbalita.com/uploads/posts/cNl9KQzjkP.jpg",
    },
    {
      title: "Buah-buahan Segar",
      deskripsi: "Mengandung antioksidan alami.",
      img: "https://1.bp.blogspot.com/-3xx0G8DyZ4o/XpCNaREDIeI/AAAAAAAAGzg/pjz_4YAFgZYUXqIKHV6YmRzfqvNI_aRBwCLcBGAsYHQ/s1600/buah5.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 pt-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold text-center text-red-600 mb-4">
        BPM rata-rata minggu ini
      </h1>

      <div className="bg-red-100 rounded-xl p-4 text-center mb-6">
        <p className="text-4xl font-bold text-red-700">
          91 <span className="text-sm">BPM</span>
        </p>
        <p className="text-green-600 font-semibold mt-2">Normal</p>
        <div className="mt-2 text-xs text-gray-500">
          📈 Grafik BPM mingguan
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setActiveTab("aktivitas")}
          className={`px-4 py-2 rounded-l-full font-medium text-sm ${
            activeTab === "aktivitas"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Rekomendasi Aktivitas
        </button>
        <button
          onClick={() => setActiveTab("makanan")}
          className={`px-4 py-2 rounded-r-full font-medium text-sm ${
            activeTab === "makanan"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Rekomendasi Makanan
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4 mb-6">
        {activeTab === "aktivitas"
          ? aktivitasList.map((act, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 flex space-x-4 items-center"
              >
                <img
                  src={act.img}
                  alt=""
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {act.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {act.durasi} • {act.kalori} kalori
                  </p>
                </div>
              </div>
            ))
          : makananList.map((food, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 flex space-x-4 items-center"
              >
                <img
                  src={food.img}
                  alt=""
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {food.title}
                  </h3>
                  <p className="text-xs text-gray-500">{food.deskripsi}</p>
                </div>
              </div>
            ))}
      </div>

      {/* Info Box */}
      <div className="text-sm text-gray-600 bg-gray-100 p-4 rounded-lg">
        {activeTab === "aktivitas" ? (
          <>
            Dengan melakukan kegiatan di atas diharapkan kamu dapat
            meningkatkan kesehatan jantung, memperkuat otot dan tulang, serta
            meredakan stres. Rutin beraktivitas juga menurunkan risiko tekanan
            darah tinggi dan diabetes.
          </>
        ) : (
          <>
            Rekomendasi makanan ini membantu menjaga kesehatan jantung, menurunkan
            kolesterol, dan memberikan energi yang cukup untuk aktivitas harian
            tanpa membebani sistem metabolisme tubuh.
          </>
        )}
      </div>
    </div>
  );
}
