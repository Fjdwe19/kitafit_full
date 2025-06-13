const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const authRoutes = require('./routes/authRoutes');
const diagnosisRoutes = require('./routes/diagnosisRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');

app.use(cors()); 
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/diagnosis', diagnosisRoutes);
app.use('/api', chatbotRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error('DB error:', err));
