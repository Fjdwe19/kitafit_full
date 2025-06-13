from flask import Flask, request, jsonify, render_template
import numpy as np
import re
import joblib
from tensorflow.keras.models import load_model
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import random
import nltk

# Inisialisasi Aplikasi Flask
app = Flask(__name__)

# --- Muat Artefak Model dan Preprocessing ---
# Lakukan ini sekali saat aplikasi dimulai untuk efisiensi
try:
    # Memastikan resource NLTK tersedia
    nltk.download('punkt', quiet=True)
    nltk.download('stopwords', quiet=True)

    model = load_model('models/kitafit_chatbot_model.h5')
    tfidf_vectorizer = joblib.load('models/tfidf_vectorizer.pkl')
    label_encoder = joblib.load('models/label_encoder.pkl')
    
    # Inisialisasi Sastrawi Stemmer dan Stopwords
    factory = StemmerFactory()
    stemmer = factory.create_stemmer()
    indonesian_stop_words = set(stopwords.words('indonesian'))
    
    print("✅ Model dan semua artefak berhasil dimuat.")
except Exception as e:
    print(f"❌ Error saat memuat model atau artefak: {e}")
    model = None

# Salin dictionary intent_responses dari notebook Anda
intent_responses = {
    "kitafit": [
        "KitaFit adalah platform kesehatan berbasis Machine Learning yang dirancang untuk membantu Anda mendeteksi risiko penyakit jantung sejak dini.",
        "Kami adalah KitaFit, sebuah aplikasi inovatif yang memanfaatkan kecerdasan buatan untuk menganalisis dan memberikan wawasan kesehatan jantung Anda.",
        "Fokus utama KitaFit adalah pada pencegahan dan deteksi dini risiko penyakit jantung melalui pendekatan teknologi AI yang personal."
    ],
    "daftar": [
        "Anda bisa mendaftar dengan mudah melalui email atau nomor telepon. Cukup ikuti panduan pendaftaran di aplikasi.",
        "Proses pendaftaran KitaFit sangat sederhana. Anda hanya perlu menyiapkan email atau nomor telepon aktif untuk verifikasi."
    ],
    "fitur": [
        "Fitur utama kami meliputi deteksi risiko penyakit jantung, konsultasi online dengan ahli (HeartConsult), dan rekomendasi gaya hidup personal.",
        "Di KitaFit, Anda bisa menikmati fitur seperti analisis risiko berbasis AI, sesi konsultasi virtual, serta beragam artikel kesehatan di LifeNews."
    ],
    "biaya": [
        "KitaFit menyediakan fitur dasar secara gratis. Untuk fitur lebih lanjut, kami menawarkan paket premium berbayar.",
        "Kami menawarkan model 'freemium'. Anda bisa menikmati layanan dasar secara gratis dan bisa upgrade ke premium kapan saja."
    ],
    "riwayat": [
        "Anda bisa melihat riwayat kesehatan dan semua hasil deteksi Anda di bagian 'Riwayat Kesehatan' di dalam aplikasi.",
        "Semua data kesehatan Anda tersimpan aman dan dapat diakses kapan saja melalui menu 'Riwayat'."
    ],
    "hasil": [
        "Hasil deteksi risiko disajikan dalam bentuk skor yang mudah dipahami, disertai penjelasan detail tentang kondisi Anda.",
        "Setelah proses deteksi selesai, Anda akan mendapatkan skor risiko, interpretasi, serta rekomendasi langkah selanjutnya."
    ],
    "reset_password": [
        "Untuk mengatur ulang password, silakan klik tombol 'Lupa Password' di halaman login, lalu ikuti instruksi yang dikirimkan ke email Anda.",
        "Jika Anda lupa kata sandi, gunakan fitur 'Lupa Password'. Kami akan mengirimkan tautan untuk reset ke email atau nomor telepon terdaftar Anda."
    ],
    "konsultasi": [
        "Anda dapat menggunakan fitur HeartConsult kami untuk melakukan konsultasi online dengan para ahli kesehatan.",
        "Fitur konsultasi di KitaFit memungkinkan Anda terhubung langsung dengan dokter atau ahli gizi melalui chat atau video call."
    ],
    "privasi": [
        "Keamanan data Anda adalah prioritas utama kami. Semua informasi pribadi di KitaFit dilindungi dengan enkripsi end-to-end.",
        "Kami berkomitmen penuh untuk menjaga kerahasiaan data pengguna. Informasi Anda tidak akan pernah dibagikan tanpa izin Anda."
    ],
    "artikel": [
        "Anda bisa menemukan berbagai artikel dan berita terbaru seputar gaya hidup sehat di bagian 'LifeNews' dalam aplikasi.",
        "Silakan cek fitur 'LifeNews' untuk mendapatkan tips kesehatan, informasi nutrisi, dan panduan gaya hidup dari para ahli."
    ],
    "unknown": [
        "Maaf, saya tidak mengerti pertanyaan Anda. Bisakah Anda mengulanginya dengan cara yang berbeda?",
        "Hmm, sepertinya pertanyaan itu di luar topik yang saya ketahui. Mungkin Anda bisa bertanya tentang fitur atau biaya?"
    ]
}


# Salin fungsi preprocess_text dari notebook Anda
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s]', '', text)
    words = word_tokenize(text)
    processed_words = [stemmer.stem(word) for word in words if word not in indonesian_stop_words and word.isalnum()]
    return ' '.join(processed_words)

# --- ROUTE / ENDPOINT ---

@app.route('/')
def home():
    """Route untuk menampilkan halaman UI testing."""
    return render_template('index.html')

@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    """API Endpoint utama untuk chatbot."""
    if model is None:
        return jsonify({"error": "Model tidak tersedia"}), 500

    try:
        # Menerima data JSON dari request
        data = request.get_json()
        message = data.get("message", "")

        if not message:
            return jsonify({"error": "Pesan tidak boleh kosong"}), 400

        # Preprocessing pesan pengguna
        processed_input = preprocess_text(message)
        
        # Transformasi dan prediksi
        input_vector = tfidf_vectorizer.transform([processed_input]).toarray()
        predictions = model.predict(input_vector)
        
        confidence = np.max(predictions)
        predicted_intent_index = np.argmax(predictions)
        
        # Logika untuk menentukan intent
        confidence_threshold = 0.4
        if confidence < confidence_threshold:
            predicted_intent_label = "unknown"
        else:
            predicted_intent_label = label_encoder.inverse_transform([predicted_intent_index])[0]
        
        # Memilih respons
        response = random.choice(intent_responses.get(predicted_intent_label, intent_responses["unknown"]))
        
        # Mengirimkan kembali respons dalam format JSON
        return jsonify({"user_message": message, "bot_response": response, "intent": predicted_intent_label, "confidence": float(confidence)})

    except Exception as e:
        print(f"❌ Error pada endpoint /chatbot: {e}")
        return jsonify({"error": "Terjadi kesalahan internal"}), 500

# Menjalankan aplikasi
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
