// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../config';

// export default function RegisterPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       setError('Semua field harus diisi.');
//       return;
//     }
//     if (!email.includes('@')) {
//       setError('Format email tidak valid.');
//       return;
//     }
//     if (password.length < 6) {
//       setError('Password minimal 6 karakter.');
//       return;
//     }

//     try {
//       const response = await fetch(`${API_URL}/register`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || 'Registrasi gagal');
//         return;
//       }

//       alert('Registrasi berhasil! Silakan login.');
//       navigate('/login');
//     } catch (err) {
//       setError('Gagal menghubungi server');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Daftar Akun Baru</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//           <div>
//             <label className="block mb-1 text-gray-600">Nama Lengkap</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//               placeholder="Masukkan nama Anda"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-gray-600">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//               placeholder="Masukkan email Anda"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-gray-600">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
//               placeholder="Masukkan password"
//             />
//           </div>
//           <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition">
//             Daftar
//           </button>
//         </form>
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Sudah punya akun? <Link to="/login" className="text-red-500 font-semibold hover:underline">Login di sini</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Semua field harus diisi.');
      return;
    }
    if (!email.includes('@')) {
      setError('Format email tidak valid.');
      return;
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registrasi gagal');
        return;
      }

      alert('Registrasi berhasil! Silakan login.');
      navigate('/login');
    } catch (err) {
      setError('Gagal menghubungi server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Daftar Akun Baru</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <div>
            <label className="block mb-1 text-gray-600">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Masukkan password"
            />
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition">
            Daftar
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Sudah punya akun? <Link to="/login" className="text-red-500 font-semibold hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}
