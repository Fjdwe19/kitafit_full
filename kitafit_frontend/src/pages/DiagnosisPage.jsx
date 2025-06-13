// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function DiagnosisPage() {
//   const [usia, setUsia] = useState('');
//   const [jenisKelamin, setJenisKelamin] = useState('');
//   const [berat, setBerat] = useState('');
//   const [tinggi, setTinggi] = useState('');
//   const [tekananDarah, setTekananDarah] = useState('');
//   const [kolesterol, setKolesterol] = useState('');
//   const [olahraga, setOlahraga] = useState('');
//   const [frekuensiOlahraga, setFrekuensiOlahraga] = useState('');
//   const [error, setError] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (result) {
//       const timeout = setTimeout(() => {
//         navigate('/dashboard');
//       }, 4000); // redirect setelah 4 detik
//       return () => clearTimeout(timeout);
//     }
//   }, [result, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !usia || !jenisKelamin || !berat || !tinggi || !tekananDarah || !kolesterol || !olahraga ||
//       (olahraga === 'Iya' && !frekuensiOlahraga)
//     ) {
//       setError('Semua kolom wajib diisi.');
//       return;
//     }

//     setError('');
//     setResult(null);
//     setLoading(true);

//     const data = {
//       age: parseInt(usia),
//       sex: jenisKelamin === 'Laki-laki' ? 1 : 0,
//       trestbps: parseInt(tekananDarah.split('/')[0]),
//       chol: parseFloat(kolesterol),
//       fbs: 0,
//       restecg: 1,
//       thalch: 150,
//       exang: olahraga === 'Iya' ? 0 : 1,
//       oldpeak: 1.0,
//       slope: 2,
//       ca: 0,
//       cp: 0,
//       thal: 2
//     };

//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://localhost:3000/api/diagnosis/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(data)
//       });

//       const resultData = await response.json();

//       if (!response.ok) {
//         throw new Error(resultData.msg || 'Terjadi kesalahan');
//       }

//       setResult(resultData);
//     } catch (err) {
//       setError(`Gagal mengirim data: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Form Diagnosis Kesehatan Jantung</h1>
//         {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 text-gray-700">Usia</label>
//             <input
//               type="number"
//               required
//               value={usia}
//               onChange={(e) => setUsia(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               placeholder="Masukkan usia"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Jenis Kelamin</label>
//             <select
//               required
//               value={jenisKelamin}
//               onChange={(e) => setJenisKelamin(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             >
//               <option value="">Pilih</option>
//               <option value="Laki-laki">Laki-laki</option>
//               <option value="Perempuan">Perempuan</option>
//             </select>
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Berat Badan (kg)</label>
//             <input
//               type="number"
//               required
//               value={berat}
//               onChange={(e) => setBerat(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               placeholder="Contoh: 70"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Tinggi Badan (cm)</label>
//             <input
//               type="number"
//               required
//               value={tinggi}
//               onChange={(e) => setTinggi(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               placeholder="Contoh: 170"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Tekanan Darah (mmHg)</label>
//             <input
//               type="text"
//               required
//               value={tekananDarah}
//               onChange={(e) => setTekananDarah(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               placeholder="Contoh: 120/80"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Kolesterol (mg/dL)</label>
//             <input
//               type="number"
//               required
//               value={kolesterol}
//               onChange={(e) => setKolesterol(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               placeholder="Contoh: 190"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Apakah Anda sering berolahraga?</label>
//             <select
//               required
//               value={olahraga}
//               onChange={(e) => {
//                 setOlahraga(e.target.value);
//                 if (e.target.value === 'Tidak') setFrekuensiOlahraga('');
//               }}
//               className="w-full border rounded px-3 py-2"
//             >
//               <option value="">Pilih jawaban</option>
//               <option value="Iya">Iya</option>
//               <option value="Tidak">Tidak</option>
//             </select>
//           </div>

//           {olahraga === 'Iya' && (
//             <div>
//               <label className="block mb-1 text-gray-700">Seberapa sering Anda berolahraga?</label>
//               <select
//                 required
//                 value={frekuensiOlahraga}
//                 onChange={(e) => setFrekuensiOlahraga(e.target.value)}
//                 className="w-full border rounded px-3 py-2"
//               >
//                 <option value="">Pilih frekuensi</option>
//                 <option value="1-3x/minggu">1–3 kali/minggu</option>
//                 <option value="4-5x/minggu">4–5 kali/minggu</option>
//                 <option value="Setiap hari">Setiap hari</option>
//               </select>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
//             disabled={loading}
//           >
//             {loading ? 'Memproses...' : 'Lanjutkan Diagnosis'}
//           </button>
//         </form>

//         {result && (
//           <div className="mt-8 bg-green-100 border border-green-400 text-green-800 p-4 rounded">
//             <h2 className="text-lg font-bold mb-2">Hasil Diagnosis</h2>
//             <p><strong>Risiko:</strong> {result.tingkat_risiko}</p>
//             <p><strong>Interpretasi:</strong> {result.interpretasi}</p>
//             <p><strong>Probabilitas:</strong> {(result.probability_penyakit_jantung * 100).toFixed(2)}%</p>
//             <p className="mt-2 text-sm text-gray-500 italic">Anda akan diarahkan ke dashboard dalam beberapa detik...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DiagnosisPage() {
  const [usia, setUsia] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [tekananDarah, setTekananDarah] = useState('');
  const [kolesterol, setKolesterol] = useState('');
  const [gulaDarah, setGulaDarah] = useState('');
  const [elektrokardiogram, setElektrokardiogram] = useState('');
  const [detakJantung, setDetakJantung] = useState('');
  const [angina, setAngina] = useState('');
  const [depresi, setDepresi] = useState('');
  const [kemiringanST, setKemiringanST] = useState('');
  const [jumlahVessel, setJumlahVessel] = useState('');
  const [hasilThalium, setHasilThalium] = useState('');
  const [tipeNyeriDada, setTipeNyeriDada] = useState('');

  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (result) {
      const timeout = setTimeout(() => {
        navigate('/dashboard');
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [result, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !usia || !jenisKelamin || !tekananDarah || !kolesterol || !gulaDarah || !elektrokardiogram ||
      !detakJantung || !angina || !depresi || !kemiringanST || !jumlahVessel || !hasilThalium || !tipeNyeriDada
    ) {
      setError('Semua kolom wajib diisi.');
      return;
    }

    setError('');
    setResult(null);
    setLoading(true);

    const data = {
      age: parseInt(usia),
      sex: jenisKelamin === 'Laki-laki' ? 1 : 0,
      trestbps: parseInt(tekananDarah),
      chol: parseInt(kolesterol),
      fbs: parseInt(gulaDarah),
      restecg: parseInt(elektrokardiogram),
      thalch: parseInt(detakJantung),
      exang: parseInt(angina),
      oldpeak: parseFloat(depresi),
      slope: parseInt(kemiringanST),
      ca: parseInt(jumlahVessel),
      thal: parseInt(hasilThalium),
      cp: parseInt(tipeNyeriDada),
      dataset: "manual"
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/diagnosis/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      const resultData = await response.json();
      if (!response.ok) throw new Error(resultData.msg || 'Terjadi kesalahan');

      setResult(resultData);
    } catch (err) {
      setError(`Gagal mengirim data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Form Diagnosis Kesehatan Jantung</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Usia" type="number" value={usia} setValue={setUsia} />
          <Select label="Jenis Kelamin" value={jenisKelamin} setValue={setJenisKelamin} options={['Laki-laki', 'Perempuan']} />
          <Input label="Tekanan Darah (mmHg)" type="number" value={tekananDarah} setValue={setTekananDarah} />
          <Input label="Kolesterol (mg/dL)" type="number" value={kolesterol} setValue={setKolesterol} />
          <Select label="Gula Darah > 120 mg/dL" value={gulaDarah} setValue={setGulaDarah} options={[{ label: 'Ya', value: 1 }, { label: 'Tidak', value: 0 }]} />
          <Select label="Hasil Elektrokardiogram" value={elektrokardiogram} setValue={setElektrokardiogram} options={[{ label: 'Normal', value: 0 }, { label: 'Memiliki kelainan gelombang ST-T', value: 1 }, { label: 'Menunjukkan hipertrofi ventrikel kiri', value: 2 }]} />
          <Input label="Detak Jantung Maksimum" type="number" value={detakJantung} setValue={setDetakJantung} />
          <Select label="Nyeri Dada Saat Latihan Fisik" value={angina} setValue={setAngina} options={[{ label: 'Ya', value: 1 }, { label: 'Tidak', value: 0 }]} />
          <Input label="Depresi ST (oldpeak)" type="number" step="0.1" value={depresi} setValue={setDepresi} />
          <Select label="Kemiringan ST" value={kemiringanST} setValue={setKemiringanST} options={[{ label: 'Naik', value: 0 }, { label: 'Datar', value: 1 }, { label: 'Turun', value: 2 }]} />
          <Select label="Jumlah Pembuluh Terdeteksi (ca)" value={jumlahVessel} setValue={setJumlahVessel} options={[0, 1, 2, 3]} />
          <Select label="Hasil Tes Thalium" value={hasilThalium} setValue={setHasilThalium} options={[{ label: 'Normal (2)', value: 2 }, { label: 'Cacat tetap (3)', value: 3 }, { label: 'Cacat reversibel (1)', value: 1 }]} />
          <Select label="Tipe Nyeri Dada" value={tipeNyeriDada} setValue={setTipeNyeriDada} options={[{ label: 'Angina khas', value: 0 }, { label: 'Angina atipikal', value: 1 }, { label: 'Non-anginal', value: 2 }, { label: 'Tanpa gejala', value: 3 }]} />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
            disabled={loading}
          >
            {loading ? 'Memproses...' : 'Lanjutkan Diagnosis'}
          </button>
        </form>

        {result && (
          <div className="mt-8 bg-green-100 border border-green-400 text-green-800 p-4 rounded">
            <h2 className="text-lg font-bold mb-2">Hasil Diagnosis</h2>
            <p><strong>Risiko:</strong> {result.tingkat_risiko}</p>
            <p><strong>Interpretasi:</strong> {result.interpretasi}</p>
            <p><strong>Probabilitas:</strong> {(result.probability_penyakit_jantung * 100).toFixed(2)}%</p>
            <p className="mt-2 text-sm text-gray-500 italic">Anda akan diarahkan ke dashboard dalam beberapa detik...</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Input({ label, type = "text", value, setValue, step }) {
  return (
    <div>
      <label className="block mb-1 text-gray-700">{label}</label>
      <input
        type={type}
        step={step}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border rounded px-3 py-2"
        required
      />
    </div>
  );
}

function Select({ label, value, setValue, options }) {
  return (
    <div>
      <label className="block mb-1 text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border rounded px-3 py-2"
        required
      >
        <option value="">Pilih</option>
        {options.map((opt, idx) =>
          typeof opt === 'object'
            ? <option key={idx} value={opt.value}>{opt.label}</option>
            : <option key={idx} value={opt}>{opt}</option>
        )}
      </select>
    </div>
  );
}
