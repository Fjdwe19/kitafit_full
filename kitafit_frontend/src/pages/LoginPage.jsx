import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
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
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login gagal');
        return;
      }

      // Simpan token dan user ke localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/dashboard');
    } catch (err) {
      setError('Gagal menghubungi server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Login ke KitaFit</h2>
        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition">
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun? <Link to="/register" className="text-red-500 font-semibold hover:underline">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
}
