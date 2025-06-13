const mongoose = require('mongoose');

const DiagnosisSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hasil: { type: String, required: true }, // contoh: 'Normal', 'Sedang', 'Berisiko Tinggi'
  catatan: { type: String, required: true }, // interpretasi dari ML
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Diagnosis', DiagnosisSchema);
