import React from 'react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: "Dr. Julius Alfi",
    specialty: "Kardiologi",
    image: "https://cakapinterview.com/wp-content/uploads/2025/01/Kementerian-Kesehatan-Republik-Indonesia.jpg",
  },
  {
    id: 2,
    name: "Dr. Sulistyo Budiman",
    specialty: "Spesialis Jantung",
    image: "https://cakapinterview.com/wp-content/uploads/2025/01/Kementerian-Kesehatan-Republik-Indonesia.jpg",
  },
  {
    id: 3,
    name: "Dr. Juliari Simatupang",
    specialty: "Pulmonologi",
    image: "https://cakapinterview.com/wp-content/uploads/2025/01/Kementerian-Kesehatan-Republik-Indonesia.jpg",
  },
  {
    id: 4,
    name: "Dr. Michael Gustiawan",
    specialty: "Nutrisi Kesehatan & Dietrik",
    image: "https://cakapinterview.com/wp-content/uploads/2025/01/Kementerian-Kesehatan-Republik-Indonesia.jpg",
  },
  {
    id: 5,
    name: "Dr. Adam Wong",
    specialty: "Spesialis Jantung",
    image: "https://cakapinterview.com/wp-content/uploads/2025/01/Kementerian-Kesehatan-Republik-Indonesia.jpg",
  },
  {
    id: 6,
    name: "Dr. Noor Atikah",
    specialty: "Pulmonologi",
    image: "https://cakapinterview.com/wp-content/uploads/2025/01/Kementerian-Kesehatan-Republik-Indonesia.jpg",
  },
];

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Pilih Dokter untuk Konsultasi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold mb-1">{doctor.name}</h2>
              <p className="text-gray-600 mb-4">{doctor.specialty}</p>
              <Link
                to={`/consult/${doctor.id}`}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
              >
                Konsultasi
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
