import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149060.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

function SetViewOnClick({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 15);
    }
  }, [coords, map]);
  return null;
}

export default function LifeMapPage() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);
  const hospitals = [
  {
    id: 1,
    name: "RSUD dr. Soebandi Jember",
    position: [-8.159411, 113.720280]
  },
  {
    id: 2,
    name: "RS Bina Sehat Jember",
    position: [-8.170727, 113.702913]
  },
  {
    id: 3,
    name: "RS Kaliwates Jember",
    position: [-8.169850, 113.714543]
  },
  {
    id: 4,
    name: "Klinik Utama Rawat Inap Permata Bunda",
    position: [-8.165478, 113.718776]
  },
  {
    id: 5,
    name: "Klinik Pratama Duta Medika Jember",
    position: [-8.161129, 113.719860]
  },
  {
    id: 6,
    name: "RSU Citra Husada Jember",
    position: [-8.174982, 113.712345]
  },
];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        () => {
          setUserLocation([-6.2088, 106.8456]); // fallback (Jakarta)
        }
      );
    } else {
      setUserLocation([-6.2088, 106.8456]);
    }
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => navigate(-1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <h1 className="text-lg font-semibold text-red-700">LifeMap</h1>
        </div>
        <div className="w-6 h-6 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.17.97..." />
          </svg>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 shadow-lg">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            className="flex-grow outline-none text-gray-700"
            placeholder="Cari klinik terdekat disini..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        {/* Map */}
        <div style={{ height: "350px", width: "100%" }}>
          {userLocation ? (
            <MapContainer center={userLocation} zoom={15} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={userLocation} icon={userIcon}>
                <Popup>Lokasi Anda</Popup>
              </Marker>
              {filteredHospitals.map(hospital => (
                <Marker key={hospital.id} position={hospital.position}>
                  <Popup>{hospital.name}</Popup>
                </Marker>
              ))}
              <SetViewOnClick coords={userLocation} />
            </MapContainer>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-600 text-2xl font-bold">Mengambil lokasi...</div>
          )}
        </div>

        {/* Klinik List */}
        <div className="bg-white p-4 shadow-md mt-4 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Rumah Sakit/Klinik Terdekat</h2>
          <div className="space-y-4">
            {filteredHospitals.length > 0 ? (
              filteredHospitals.map(hospital => (
                <div key={hospital.id} className="flex items-center border-b border-gray-200 pb-3">
                  <span className="text-red-600 text-xl mr-3">{hospital.icon}</span>
                  <span className="text-gray-700 font-medium">{hospital.name}</span>
                </div>
              ))
            ) : (
              <div className="text-gray-500 italic">Tidak ditemukan klinik dengan nama tersebut.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
