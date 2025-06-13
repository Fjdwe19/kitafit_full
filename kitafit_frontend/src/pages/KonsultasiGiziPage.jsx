import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function KonsultasiGiziPage() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    healthGoals: '',
    dietaryRestrictions: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Submit logic here
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-red-600 mb-4">Konsultasi Gizi Sekarang</h1>
      <p className="text-sm text-gray-600 mb-6">
        Isi informasi berikut agar ahli gizi kami dapat memberikan saran nutrisi terbaik untukmu.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Usia</label>
          <Input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Contoh: 25"
            type="number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tujuan Kesehatan</label>
          <Textarea
            name="healthGoals"
            value={form.healthGoals}
            onChange={handleChange}
            placeholder="Contoh: Menurunkan berat badan, meningkatkan energi, dsb."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pantangan / Alergi Makanan</label>
          <Textarea
            name="dietaryRestrictions"
            value={form.dietaryRestrictions}
            onChange={handleChange}
            placeholder="Contoh: Tidak bisa makan seafood, alergi kacang"
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="bg-red-600 text-white w-full">Kirim Konsultasi</Button>
        </div>
      </form>
    </div>
  );
}
