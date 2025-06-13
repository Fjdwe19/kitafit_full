import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [diagnosisData, setDiagnosisData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/diagnosis/me', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const result = await response.json();
        if (response.ok) {
          setDiagnosisData(result.data);
        } else {
          console.error(result.message || 'Gagal memuat data');
        }
      } catch (err) {
        console.error('Gagal fetch diagnosis:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiagnosis();
  }, []);

  const totalPemeriksaan = diagnosisData.length;
  const diagnosisTerakhir = diagnosisData[0];
  const hasilTerakhir = diagnosisTerakhir?.result?.split(' - ')[0] || '-';

  const rekomendasiMakanan = [
    'Ikan Berlemak (Salmon, Sarden)',
    'Oatmeal & Gandum Utuh',
    'Buah Beri (Blueberry, Stroberi)',
    'Kacang-kacangan (Almond, Kenari)',
    'Sayuran Hijau (Bayam, Kale)',
    'Minyak Zaitun Extra Virgin',
    'Alpukat Segar',
  ];

  const showRekomendasi = hasilTerakhir !== 'Normal' && hasilTerakhir !== '-';

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Anda</h1>

        {isLoading ? (
          <p className="text-center text-gray-500">Memuat data...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h2 className="text-sm font-semibold text-gray-500 mb-2">Status Kesehatan</h2>
                <p className={`text-2xl font-bold ${
                  hasilTerakhir === 'Normal' ? 'text-green-600'
                  : hasilTerakhir === 'Sedang' ? 'text-yellow-600'
                  : 'text-red-600'
                }`}>
                  {hasilTerakhir}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h2 className="text-sm font-semibold text-gray-500 mb-2">Tanggal Diagnosis Terakhir</h2>
                <p className="text-2xl font-bold text-blue-600">
                  {diagnosisTerakhir ? new Date(diagnosisTerakhir.createdAt).toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  }) : '-'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h2 className="text-sm font-semibold text-gray-500 mb-2">Total Pemeriksaan</h2>
                <p className="text-2xl font-bold text-red-600">{totalPemeriksaan} Kali</p>
              </div>
            </div>

            {showRekomendasi && (
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition mb-10">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Rekomendasi Makanan Sehat</h2>
                <p className="text-gray-600 mb-6">
                  Hasil diagnosis Anda menunjukkan risiko jantung <strong>{hasilTerakhir}</strong>. Berikut makanan yang disarankan untuk menurunkan risiko:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {rekomendasiMakanan.map((item, index) => (
                    <div
                      key={index}
                      className="bg-red-50 border border-red-200 p-4 rounded-lg text-center hover:bg-red-100 transition"
                    >
                      <p className="text-red-700 font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition mb-10">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Riwayat Diagnosis Terbaru</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left">
                      <th className="py-3 px-4 font-semibold">Tanggal</th>
                      <th className="py-3 px-4 font-semibold">Hasil</th>
                      <th className="py-3 px-4 font-semibold">Catatan</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {diagnosisData.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-3 px-4">
                          {new Date(item.createdAt).toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </td>
                        <td className={`py-3 px-4 font-semibold ${
                          item.result?.includes('Normal') ? 'text-green-600'
                          : item.result?.includes('Sedang') ? 'text-yellow-600'
                          : 'text-red-600'
                        }`}>
                          {item.result?.split(' - ')[0] || '-'}
                        </td>
                        <td className="py-3 px-4">{item.note || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/diagnosis"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow font-semibold transition"
              >
                Cek Kesehatan
              </a>
            </div>
          </>
        )}
      </div>
      <a
        href="/chatbot"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white text-2xl p-4 rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
        aria-label="Chat dengan Bot"
      >
        💬
      </a><a
        href="/chatbot"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white text-2xl p-4 rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
        aria-label="Chat dengan Bot"
      >
        💬
      </a>
    </div>
  );
}
