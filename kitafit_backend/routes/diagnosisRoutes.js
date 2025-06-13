const express = require('express');
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const Diagnosis = require('../models/Diagnosis');

// Middleware autentikasi
const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ msg: 'Token tidak ditemukan di header Authorization' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token tidak valid', error: err.message });
  }
};

// POST /api/diagnosis/predict
router.post('/predict', authMiddleware, async (req, res) => {
  try {
    const inputData = req.body;

    const flaskResponse = await axios.post(
      'http://localhost:5000/predict',
      inputData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    const { probability_penyakit_jantung, tingkat_risiko, interpretasi } = flaskResponse.data;

    const newDiagnosis = new Diagnosis({
      user: req.user.id,
      hasil: tingkat_risiko,
      catatan: interpretasi
    });

    await newDiagnosis.save();

    res.json({
      saved: true,
      probability_penyakit_jantung,
      tingkat_risiko,
      interpretasi
    });
  } catch (err) {
    console.error('Gagal prediksi:', err.response?.data || err.message);
    res.status(500).json({
      msg: 'Gagal memproses prediksi',
      error: err.response?.data || err.message
    });
  }
});

// GET /api/diagnosis/me
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const diagnoses = await Diagnosis.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    const mapped = diagnoses.map(d => ({
      _id: d._id,
      result: `${d.hasil} - ${d.catatan}`,
      note: d.catatan,
      createdAt: d.createdAt
    }));

    res.json({ data: mapped });
  } catch (err) {
    res.status(500).json({
      msg: 'Gagal mengambil data diagnosis',
      error: err.message
    });
  }
});

module.exports = router;
