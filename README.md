# Kitafit - Website Prediksi Penyakit Jantung

Kitafit adalah sebuah platform kebugaran digital yang dirancang untuk membantu pengguna mencapai target kesehatan mereka. Proyek ini terdiri dari antarmuka pengguna (frontend), server (backend), dan model machine learning untuk fitur-fitur cerdas.

---

##  Struktur Proyek

Proyek ini dibagi menjadi tiga komponen utama yang masing-masing berada di dalam foldernya sendiri:

-   `📁 kitafit_frontend/`
    Bagian ini berisi semua kode untuk antarmuka pengguna (UI) yang dilihat dan diinteraksikan oleh pengguna.

-   `📁 kitafit_backend/`
    Berisi server, API, logika bisnis, dan manajemen database. Komponen ini yang akan menghubungkan frontend dengan data dan fungsionalitas inti.

-   `📁 Kitafit_ML/`
    Komponen untuk machine learning. Kemungkinan digunakan untuk memberikan rekomendasi latihan yang dipersonalisasi atau fitur cerdas lainnya.

---

## Teknologi yang Digunakan

Berikut adalah daftar teknologi utama yang digunakan dalam setiap komponen proyek:

-   **Backend:**
    -   Node.js
    -   Express.js

-   **Frontend:**
    -   React.js
    -   Vite.js

-   **Machine Learning:**
    -   Python
    -   (TensorFlow, Scikit-learn, Pandas)
    -   Flask

---

## Panduan Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

### **1. Prasyarat**

Pastikan Anda sudah menginstal perangkat lunak berikut:
-   [Node.js](https://nodejs.org/en/) (yang akan otomatis menginstal `npm`)
-   [Python](https://www.python.org/downloads/)
-   [Git](https://git-scm.com/downloads)

### **2. Instalasi**

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/Fjdwe19/kitafit_full.git](https://github.com/Fjdwe19/kitafit_full.git)
    cd kitafit_full
    ```

2.  **Setup Backend:**
    ```bash
    cd kitafit_backend
    npm install
    ```

3.  **Setup Frontend:**
    ```bash
    cd ../kitafit_frontend
    npm install
    ```
    
4.  **Setup Lingkungan Machine Learning:**
    ```bash
    cd ../Kitafit_ML
    # Buat virtual environment (direkomendasikan)
    python -m venv venv
    source venv/bin/activate  # atau `venv\Scripts\activate` di Windows
    
    # Install library yang dibutuhkan
    pip install -r requirements.txt 
    ```
    *(Catatan: Anda perlu membuat file `requirements.txt` terlebih dahulu di dalam folder ML)*

### **3. Menjalankan Aplikasi**

-   **Jalankan Server Backend:**
    Dari dalam folder `kitafit_backend`, jalankan:
    ```bash
    npm start
    ```
    Server akan berjalan di `http://localhost:PORT` (sesuaikan port di file `.env` Anda).

-   **Jalankan Aplikasi Frontend:**
    Dari dalam folder `kitafit_frontend`, jalankan:
    ```bash
    npm start
    ```
    Aplikasi akan terbuka di `http://localhost:3000` (atau port lain sesuai konfigurasi).

---

## Kontributor

Dibuat oleh **[Fjdwe19](https://github.com/Fjdwe19)**.
