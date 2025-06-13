// routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Chat = require('../models/Chat');

// Middleware autentikasi
const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) return res.status(401).json({ msg: 'Token tidak ditemukan' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token tidak valid', error: err.message });
  }
};

// Fungsi respon chatbot sederhana (ganti dengan model AI jika ada)
function getChatbotResponse(message) {
  const msg = message.toLowerCase();
  if (msg.includes('halo') || msg.includes('hai')) return 'Hai juga! Ada yang bisa saya bantu tentang kesehatan jantung?';
  if (msg.includes('jantung')) return 'Penyakit jantung bisa dicegah dengan pola hidup sehat. Yuk, jaga kesehatan!';
  if (msg.includes('olahraga')) return 'Olahraga teratur sangat baik untuk jantung! Lakukan minimal 30 menit sehari.';
  return 'Maaf, saya belum mengerti maksud Anda. Bisa dijelaskan lebih lanjut?';
}

// Endpoint chatbot
router.post('/chatbot', authMiddleware, async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ msg: 'Pesan tidak boleh kosong' });
  }

  const response = getChatbotResponse(message);

  // Simpan percakapan ke DB
  const chat = new Chat({
    userId: req.user.id,
    message,
    response
  });

  await chat.save();

  res.json({ reply: response });
});

module.exports = router;
