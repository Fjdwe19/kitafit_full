import React, { useState, useEffect, useRef } from 'react';

const ChatBotPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [sessionStarted, setSessionStarted] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMsg = { sender: 'bot', text: `⚠️ ${err.message}` };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  useEffect(() => {
    if (sessionStarted && messages.length === 0) {
      setMessages([
        { sender: 'bot', text: 'Halo! Silahkan ajukan pertanyaan terkait kitafit.' }
      ]);
    }
  }, [sessionStarted]);

  if (!sessionStarted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <h1 className="text-xl font-semibold text-center mb-4">
          Dapatkan jawaban instan Terkait Kitafit.
        </h1>
        <button
          onClick={() => setSessionStarted(true)}
          className="bg-red-700 text-white px-6 py-2 rounded-full shadow hover:bg-red-800"
        >
          Mulai Chat
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#f8f9fa]">
      <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
        <h2 className="text-lg font-semibold text-red-700">KitaFit ChatBot</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line break-words shadow 
              ${msg.sender === 'user'
                ? 'bg-red-700 text-white self-end ml-auto'
                : 'bg-gray-200 text-gray-800 self-start'
              }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ketik pesan di sini..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSendMessage}
            className="bg-red-700 text-white rounded-full p-2 hover:bg-red-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10.5l19-7.5-7.5 19-2.6-7.4L3 10.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
