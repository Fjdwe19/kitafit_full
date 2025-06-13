import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ConsultingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isChatStarted, setIsChatStarted] = useState(false);

  const doctors = [
    { id: 1, name: "Dr. Julius Alfi", specialty: "Kardiologi", experience: "9 tahun", satisfaction: "84%", price: "Rp45.000", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Dr.+Julius+Alfi", contact: "+62 812 3456 7890" },
    { id: 2, name: "Dr. Sulistyo Budiman", specialty: "Spesialis Jantung", experience: "21 tahun", satisfaction: "92%", price: "Rp85.000", image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Dr.+Sulistyo+Budiman", contact: "+62 812 9876 5432" },
    { id: 3, name: "Dr. Juliari Simatupang", specialty: "Pulmonologi", experience: "13 tahun", satisfaction: "88%", price: "Rp55.000", image: "https://via.placeholder.com/150/FFFF00/000000?text=Dr.+Juliari+Simatupang", contact: "+62 812 1122 3344" },
    { id: 4, name: "Dr. Michael Gustiawan", specialty: "Nutrisi Kesehatan & Dietrik", experience: "16 tahun", satisfaction: "96%", price: "Rp60.000", image: "https://via.placeholder.com/150/008000/FFFFFF?text=Dr.+Michael+Gustiawan", contact: "+62 812 5566 7788" },
    { id: 5, name: "Dr. Adam Wong", specialty: "Spesialis Jantung", experience: "29 tahun", satisfaction: "94%", price: "Rp90.000", image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Dr.+Adam+Wong", contact: "+62 812 9900 1122" },
    { id: 6, name: "Dr. Noor Atikah", specialty: "Pulmonologi", experience: "19 tahun", satisfaction: "87%", price: "Rp60.000", image: "https://via.placeholder.com/150/800080/FFFFFF?text=Dr.+Noor+Atikah", contact: "+62 812 3344 5566" },
    { id: 7, name: "Dr. Yenni Wongso", specialty: "Spesialis Jantung", experience: "9 tahun", satisfaction: "84%", price: "Rp60.000", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Dr.+Yenni+Wongso", contact: "+62 812 7788 9900" }
  ];

  useEffect(() => {
    const foundDoctor = doctors.find(doc => doc.id === parseInt(id));
    setDoctor(foundDoctor);
  }, [id]);

  if (!doctor) {
    return <div className="text-center py-8 text-red-600 font-semibold">Doctor not found.</div>;
  }

  function handleAddMessage() {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  }

  function handleEndChat() {
    setIsChatStarted(false);
    setMessages([]);
    setNewMessage('');
  }

  return (
    <div className="container mx-auto p-4">
      <button
        className="text-gray-600 hover:text-gray-800 mb-4 flex items-center"
        onClick={() => navigate(-1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali
      </button>

      <h1 className="text-2xl font-bold text-center mb-6">Detail Dokter</h1>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start mb-6">
        <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full object-cover mr-0 md:mr-6 mb-4 md:mb-0" />
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
          <p className="text-md text-gray-600 mb-2">{doctor.specialty}</p>
          <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm mb-2">
            <span className="mr-4">🗓️ {doctor.experience}</span>
            <span>👍 {doctor.satisfaction}</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">Kontak: {doctor.contact}</p>
          <p className="text-lg font-bold text-red-600">{doctor.price}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Konsultasi dengan {doctor.name}</h3>

        {!isChatStarted ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Klik tombol di bawah untuk memulai konsultasi via chat:</p>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
              onClick={() => setIsChatStarted(true)}
            >
              Mulai Konsultasi Chat
            </button>
          </div>
        ) : (
          <div>
            <div className="border rounded-md p-4 h-64 overflow-y-auto mb-4">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center">Mulai percakapan...</p>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                      {message.text}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="flex">
              <input
                type="text"
                className="flex-grow border rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Ketik pesan Anda..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddMessage();
                  }
                }}
              />
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
                onClick={handleAddMessage}
              >
                Kirim
              </button>
            </div>

            <div className="text-center mt-4">
              <button
                className="text-sm text-gray-600 hover:text-gray-800 underline"
                onClick={handleEndChat}
              >
                Akhiri Percakapan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
