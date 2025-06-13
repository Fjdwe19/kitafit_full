# KitaFit: Model Prediksi Penyakit Jantung

Proyek _capstone_ ini bertujuan untuk membangun model _machine learning_ yang mampu membantu pengguna mengenali risiko penyakit jantung secara mandiri dan akurat. Model ini merupakan komponen inti dari platform digital berbasis website bernama **KitaFit**.

---

### Fitur Utama Proyek

- **HeartTrack:** Algoritma _machine learning_ yang dibangun menggunakan TensorFlow/Keras untuk memprediksi kondisi jantung berdasarkan data klinis seperti usia, tekanan darah, kolesterol, dan riwayat kesehatan.

---

### Dataset

Proyek ini menggunakan dataset **Heart Disease UCI** yang populer dan bersumber dari [Kaggle](https://www.kaggle.com/datasets/redwankarimsony/heart-disease-data). Dataset ini merupakan kompilasi data dari beberapa institusi medis dan berisi 14 atribut utama. Berikut adalah penjelasan detail untuk setiap atribut:

| Atribut         | Deskripsi                                             | Tipe & Nilai                                                                              |
| :-------------- | :---------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| **1. age**      | Usia pasien                                           | Numerik (dalam tahun)                                                                     |
| **2. sex**      | Jenis kelamin pasien                                  | Kategorikal (1 = Pria; 0 = Wanita)                                                        |
| **3. cp**       | Tipe nyeri dada (_chest pain type_)                   | Kategorikal (1: typical angina; 2: atypical angina; 3: non-anginal pain; 4: asymptomatic) |
| **4. trestbps** | Tekanan darah saat istirahat                          | Numerik (dalam mm Hg)                                                                     |
| **5. chol**     | Kadar kolesterol serum                                | Numerik (dalam mg/dl)                                                                     |
| **6. fbs**      | Gula darah puasa > 120 mg/dl                          | Kategorikal (1 = Benar; 0 = Salah)                                                        |
| **7. restecg**  | Hasil EKG saat istirahat                              | Kategorikal (0: normal; 1: ST-T abnormality; 2: left ventricular hypertrophy)             |
| **8. thalach**  | Detak jantung maksimum yang dicapai                   | Numerik                                                                                   |
| **9. exang**    | Angina akibat olahraga                                | Kategorikal (1 = Ya; 0 = Tidak)                                                           |
| **10. oldpeak** | Depresi ST akibat olahraga relatif terhadap istirahat | Numerik                                                                                   |
| **11. slope**   | Kemiringan segmen ST saat puncak olahraga             | Kategorikal (1: upsloping; 2: flat; 3: downsloping)                                       |
| **12. ca**      | Jumlah pembuluh darah mayor (0-3) yang terwarnai      | Kategorikal/Numerik                                                                       |
| **13. thal**    | Status thalassemia                                    | Kategorikal (3 = normal; 6 = heart_disease_modeled defect; 7 = reversable defect)         |
| **14. num**     | **Variabel Target**: Diagnosis penyakit jantung       | Kategorikal (0 = tidak ada penyakit; 1, 2, 3, 4 = berbagai tingkat penyakit)              |

**Penjelasan lebih lanjut untuk setiap atribut:**

- **age**: Menunjukkan usia pasien dalam tahun.
- **sex**: Menunjukkan jenis kelamin pasien; pria diberi nilai 1, sedangkan wanita diberi nilai 0.
- **cp (Chest Pain Type)**: Menyatakan jenis nyeri dada yang dialami, yang dapat membantu memprediksi kemungkinan penyakit jantung.
- **trestbps**: Tekanan darah saat pasien berada dalam keadaan istirahat.
- **chol**: Menunjukkan kadar kolesterol darah yang tinggi dapat meningkatkan risiko penyakit jantung.
- **fbs (Fasting Blood Sugar)**: Menunjukkan apakah pasien memiliki kadar gula darah puasa yang tinggi.
- **restecg (Resting Electrocardiographic Results)**: Hasil pemeriksaan EKG saat pasien dalam kondisi istirahat, menunjukkan adanya kelainan atau tidak.
- **thalach**: Detak jantung maksimal yang dicapai pasien selama aktivitas fisik.
- **exang (Exercise Induced Angina)**: Menunjukkan apakah pasien mengalami nyeri dada saat berolahraga.
- **oldpeak**: Merupakan penurunan segmen ST pada EKG setelah olahraga yang dapat menunjukkan adanya masalah pada jantung.
- **slope**: Menyatakan bentuk perubahan segmen ST saat puncak olahraga.
- **ca (Number of Major Vessels Colored)**: Jumlah pembuluh darah utama yang mengalami perubahan warna pada pemeriksaan EKG.
- **thal**: Menunjukkan status thalassemia atau gangguan darah yang bisa mempengaruhi risiko penyakit jantung.
- **num**: Target variabel yang menunjukkan apakah seseorang mengalami penyakit jantung atau tidak.

---

### Struktur Proyek

Berikut adalah struktur direktori dari proyek ini:

KitaFit/
├── Dataset/
│ └── heart_disease_uci.csv
├── Notebook/
│ └── heart_disease_model.ipynb
├── heart_disease_prediction_model.h5
├── heart_disease_preprocessor.joblib
└── requirements.txt

- **Dataset/**: Berisi file dataset mentah.
- **Notebook/**: Berisi file Jupyter Notebook untuk analisis dan pelatihan model.
- **Artefak Model**: File `.h5` (model terlatih) dan `.joblib` (preprocessor terlatih) adalah hasil akhir dari notebook.
- **requirements.txt**: Daftar pustaka Python yang dibutuhkan.

---

### Teknologi yang Digunakan

- **Bahasa**: Python 3.10
- **Pustaka Utama**:
  - **Analisis Data**: Pandas, NumPy
  - **Visualisasi Data**: Matplotlib, Seaborn
  - **Machine Learning**: Scikit-learn, TensorFlow (Keras)
- **Lingkungan**: Jupyter Notebook (dijalankan melalui VS Code atau Google Colab)

---

### Instalasi dan Setup Lingkungan

Untuk menjalankan notebook ini di lingkungan lokal, disarankan untuk membuat _environment_ terpisah menggunakan Conda untuk menghindari konflik dependensi.

1.  **Clone Repositori (jika ada)**

    ```bash
    git clone https://github.com/DianPandus/KitaFit.git
    cd Notebook
    ```

2.  **Buat Environment Conda Baru**

    ```bash
    conda create --name kitafit_env python=3.10
    ```

3.  **Aktifkan Environment**

    ```bash
    conda activate kitafit_env
    ```

4.  **Install Semua Pustaka yang Dibutuhkan**
    Pastikan file `requirements.txt` ada di direktori Anda, lalu jalankan:

    ```bash
    pip install -r requirements.txt
    ```

5.  **Atasi Konflik Dependensi (jika terjadi)**
    Jika Anda mengalami error terkait `typing-extensions` saat instalasi, jalankan perintah ini untuk memaksa instalasi versi yang kompatibel:
    ```bash
    pip install typing-extensions==4.5.0 --force-reinstall
    ```

---

### Cara Menjalankan Notebook

1.  Pastikan environment `kitafit_env` sudah aktif.
2.  Buka proyek ini di VS Code atau jalankan Jupyter Notebook dari terminal.
3.  Buka file `Notebook/heart_disease_model_model.ipynb`.
4.  Di VS Code, pastikan Anda memilih kernel yang benar (pojok kanan atas) yaitu `kitafit_env`.
5.  Jalankan sel-sel notebook secara berurutan untuk melihat keseluruhan proses, mulai dari Analisis Data Eksploratif (EDA), pra-pemrosesan, pelatihan model, hingga evaluasi performa.

---

### Hasil Model

Model Jaringan Saraf Tiruan (ANN) yang telah dilatih dievaluasi menggunakan data uji (_test set_) yang belum pernah dilihat sebelumnya. Hasil evaluasi utama adalah sebagai berikut:

- **Akurasi Keseluruhan**: **~84%**
- **Performa pada Kelas "Sakit Jantung" (Kelas 1)**:
  - **Precision**: 0.82 (Dari semua yang diprediksi sakit, 82% benar-benar sakit).
  - **Recall**: 0.91 (Dari semua pasien yang sebenarnya sakit, model berhasil mengidentifikasi 91% di antaranya).

Hasil ini menunjukkan bahwa model memiliki kemampuan yang baik dalam "menemukan" pasien yang berisiko, yang ditandai dengan nilai _Recall_ yang tinggi.

---

_Dokumentasi ini dibuat untuk proyek Capstone KitaFit._
