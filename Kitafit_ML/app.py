# --- 1. Impor Library ---
import os
import numpy as np
import pandas as pd
import tensorflow as tf
import joblib
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

# --- 2. Inisialisasi Aplikasi Flask ---
app = Flask(__name__)
CORS(app)  # Mengaktifkan CORS untuk mengizinkan request dari browser

# --- 3. Muat Model dan Preprocessor (Hanya Sekali saat startup) ---
# Tentukan path yang benar ke folder artifacts
ARTIFACTS_DIR = 'artifacts'
MODEL_PATH = os.path.join(ARTIFACTS_DIR, 'heart_disease_prediction_model.h5')
PREPROCESSOR_PATH = os.path.join(ARTIFACTS_DIR, 'heart_disease_preprocessor.joblib')

model = None
preprocessor = None
model_loaded = False

# Coba muat model dan preprocessor
try:
    if os.path.exists(MODEL_PATH) and os.path.exists(PREPROCESSOR_PATH):
        # Memuat model Keras. compile=False karena kita hanya butuh untuk inferensi.
        model = tf.keras.models.load_model(MODEL_PATH, compile=False)
        preprocessor = joblib.load(PREPROCESSOR_PATH)
        print(">>> Model dan Preprocessor berhasil dimuat.")
        model_loaded = True
    else:
        print(f">>> Peringatan: File model atau preprocessor tidak ditemukan.")
        print(f"    - Cek path model: {os.path.abspath(MODEL_PATH)}")
        print(f"    - Cek path preprocessor: {os.path.abspath(PREPROCESSOR_PATH)}")
except Exception as e:
    print(f">>> Error saat memuat model atau preprocessor: {e}")

# --- 4. Definisikan Route untuk Halaman Utama ---
# Route ini akan menampilkan halaman web (index.html)
@app.route('/')
def home():
    # Flask akan otomatis mencari 'index.html' di dalam folder 'templates'
    return render_template('index.html')

# --- 5. Definisikan Endpoint Prediksi ---
# Route ini akan menangani data yang dikirim dari form
@app.route('/predict', methods=['POST'])
def predict():
    if not model_loaded:
        return jsonify({'error': 'Model atau preprocessor tidak siap untuk prediksi.'}), 500

    try:
        # Ambil data JSON dari request
        input_data = request.get_json()
        
        # Buat DataFrame dari data input
        input_df = pd.DataFrame([input_data])
        
        # Terapkan pra-pemrosesan
        input_processed = preprocessor.transform(input_df)
        
        # Lakukan prediksi
        prediction_proba = model.predict(input_processed)
        probability = prediction_proba[0][0]

        # Logika interpretasi tingkat risiko
        risk_level = ""
        interpretation_text = ""
        if probability < 0.3:
            risk_level = "Rendah"
            interpretation_text = "Berdasarkan data Anda, risiko penyakit jantung tergolong rendah. Pertahankan gaya hidup sehat Anda."
        elif probability < 0.7:
            risk_level = "Sedang"
            interpretation_text = "Ada indikasi risiko penyakit jantung sedang. Disarankan untuk menjaga pola hidup sehat dan mempertimbangkan untuk berkonsultasi lebih lanjut dengan dokter."
        else:
            risk_level = "Tinggi"
            interpretation_text = "Risiko penyakit jantung tergolong tinggi. Kami sangat menyarankan Anda untuk segera berkonsultasi dengan dokter untuk evaluasi dan penanganan."

        # Siapkan respons untuk dikirim kembali
        response = {
            'probability_penyakit_jantung': float(probability),
            'tingkat_risiko': risk_level,
            'interpretasi': interpretation_text
        }
        
        return jsonify(response)

    except ValueError as ve:
         # Error jika ada kolom yang hilang atau tidak cocok
         return jsonify({'error': f'Data input tidak valid atau tidak lengkap. Error: {str(ve)}'}), 400
    except Exception as e:
        # Tangani error umum lainnya
        return jsonify({'error': f'Terjadi error saat prediksi: {str(e)}'}), 500

# --- 6. Jalankan Aplikasi Flask ---
if __name__ == '__main__':
    # host='0.0.0.0' membuat server dapat diakses dari luar jaringan lokal
    app.run(host='0.0.0.0', port=5000, debug=True)