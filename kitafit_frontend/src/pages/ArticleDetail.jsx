import { useParams } from 'react-router-dom';

export default function ArticleDetail() {
  const { slug } = useParams();
  
  // Data artikel (idealnya dari API/database)
  const articles = [
    {
      id: 1,
      title: "Manfaat Berjalan Kaki Setiap Hari untuk Kesehatan Jantung yang Optimal",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400",
      date: "2 hari lalu",
      author: "Dr. Ahmad Fauzi",
      slug: "manfaat-berjalan-kaki",
      content: `
        **Beberapa manfaat tersebut antara lain:**

        **1. Meningkatkan sirkulasi darah**
            Berjalan kaki dapat meningkatkan denyut jantung dan jumlah oksigen yang masuk dalam darah, sehingga memperlancar sirkulasi darah dan mengurangi risiko penyumbatan pada pembuluh darah jantung.

        **2. Menurunkan tekanan darah**
            Aktivitas berjalan kaki secara rutin dapat membantu menurunkan tekanan darah dengan cara meningkatkan elastisitas pembuluh darah dan memperkuat otot jantung.

        **3. Mengurangi risiko penyakit jantung**
            Dengan berjalan kaki secara teratur, risiko terkena penyakit jantung dapat berkurang karena membantu mengontrol faktor risiko seperti tekanan darah tinggi dan kolesterol.

        **4. Membantu mengontrol berat badan**
            Berjalan kaki merupakan latihan kardio yang efektif untuk membakar kalori dan membantu menjaga berat badan ideal.

        **5. Meningkatkan stamina**
            Aktivitas berjalan kaki yang dilakukan secara konsisten dapat meningkatkan daya tahan tubuh dan stamina secara keseluruhan.

        Untuk mendapatkan manfaat optimal, disarankan untuk berjalan kaki minimal 30 menit setiap hari.
      `
    },
    {
      id: 2,  
      title: "Apakah Kafein Baik atau Buruk untuk Jantung? Simak Penjelasannya",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400", 
      date: "4 hari lalu",
      author: "Dr. Sarah Wijaya",
      slug: "kafein-untuk-jantung",
      content: `
        Kafein adalah stimulan yang sering ditemukan dalam kopi, teh, dan minuman energi. Bagaimana pengaruhnya terhadap kesehatan jantung?

        **Efek Positif Kafein:**

        1. Meningkatkan kewaspadaan mental
            Kafein merangsang sistem saraf pusat untuk meningkatkan fokus dan konsentrasi.

        2. Meningkatkan metabolisme
            Membantu meningkatkan pembakaran lemak dan energi dalam tubuh.

        3. Mengandung antioksidan
            Terutama dalam kopi dan teh, membantu melawan radikal bebas dalam tubuh.

        4. Membantu kinerja olahraga
            Meningkatkan stamina dan performa selama aktivitas fisik.

        **Efek yang Perlu Diperhatikan:**

        1. Meningkatkan detak jantung
            Dapat menyebabkan jantung berdetak lebih cepat untuk sementara waktu.

        2. Meningkatkan tekanan darah
            Efek stimulan dapat menaikkan tekanan darah jangka pendek.

        3. Gangguan tidur
            Konsumsi di waktu yang tidak tepat dapat mengganggu pola tidur.

        4. Kecemasan
            Beberapa orang mungkin lebih sensitif terhadap efek kafein.

        **Rekomendasi Konsumsi:**
        
        - Batasi konsumsi kafein hingga 400mg per hari (sekitar 4 cangkir kopi)
        - Hindari konsumsi kafein 6 jam sebelum tidur
        - Perhatikan respons tubuh Anda terhadap kafein
        - Konsultasikan dengan dokter jika memiliki kondisi jantung tertentu

        **Kesimpulan:**
        Kafein aman dikonsumsi dalam jumlah wajar untuk kebanyakan orang, namun tetap perlu memperhatikan batas dan waktu konsumsi yang tepat.
      `
    },
    {
      id: 3,
      title: "Perubahan Pola Makan yang Efektif untuk Menurunkan Kolesterol Jahat",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400",
      date: "1 minggu lalu",
      author: "Dr. Budi Santoso",
      slug: "pola-makan-kolesterol",
      content: `
        Kolesterol tinggi merupakan salah satu faktor risiko utama penyakit jantung. Berikut panduan pola makan untuk menurunkan kolesterol jahat:

        **Makanan yang Perlu Dikurangi:**

        1. Makanan tinggi lemak jenuh
            Termasuk daging merah berlemak dan produk susu tinggi lemak.

        2. Makanan olahan dan cepat saji
            Mengandung lemak trans yang berbahaya bagi kesehatan jantung.

        3. Daging berlemak
            Pilih daging tanpa lemak atau daging putih sebagai alternatif.

        4. Gorengan
            Hindari makanan yang digoreng dengan minyak berulang.

        5. Makanan manis dan minuman bersoda
            Kurangi asupan gula dan minuman berkarbonasi.

        **Makanan yang Perlu Ditingkatkan:**

        1. Sayuran segar
            Kaya akan serat dan nutrisi penting untuk kesehatan.

        2. Buah-buahan
            Sumber vitamin dan antioksidan alami.

        3. Biji-bijian utuh
            Mengandung serat yang membantu menurunkan kolesterol.

        4. Kacang-kacangan
            Sumber protein sehat dan lemak baik.

        5. Ikan berlemak sehat
            Salmon dan makerel kaya akan omega-3.

        **Tips Implementasi:**
        - Mulai dengan perubahan kecil dan bertahap
        - Baca label nutrisi sebelum membeli makanan
        - Masak sendiri lebih sering
        - Gunakan metode memasak yang lebih sehat
        - Porsi makan yang seimbang
        - Minum air putih yang cukup

        **Selain Pola Makan:**
        - Olahraga teratur
        - Jaga berat badan ideal
        - Hindari rokok
        - Kelola stres dengan baik

        Konsultasikan dengan dokter atau ahli gizi untuk panduan yang lebih personal sesuai kondisi kesehatan Anda.
      `
    },
    {
      id: 4,
      title: "7 Tanda Awal Penyakit Jantung yang Perlu Diwaspadai",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400",
      date: "1 hari lalu",
      author: "Dr. Siti Aminah", 
      slug: "tanda-awal-penyakit-jantung",
      content: `
        Penting untuk mengenali tanda-tanda awal penyakit jantung agar dapat segera mencari pertolongan medis.
        Berikut adalah 7 tanda awal yang perlu Anda waspadai:

        1.  **Nyeri Dada atau Ketidaknyamanan**:
            Sensasi tekanan, sesak, atau nyeri di dada.

        2.  **Sesak Napas**:
            Sulit bernapas, terutama saat beraktivitas atau saat berbaring.

        3.  **Nyeri yang Menjalar**:
            Nyeri yang menyebar ke lengan (biasanya kiri), leher, rahang, atau punggung.

        4.  **Pusing atau Sakit Kepala Ringan**:
            Merasa pusing atau seperti akan pingsan.

        5.  **Kelelahan yang Tidak Biasa**:
            Merasa sangat lelah tanpa alasan yang jelas, terutama pada wanita.

        6.  **Mual, Gangguan Pencernaan, atau Nyeri Perut**:
            Gejala yang terkadang disalahartikan sebagai masalah pencernaan biasa.

        7.  **Pembengkakan pada Kaki, Pergelangan Kaki, atau Tungkai**:
            Ini bisa menjadi tanda bahwa jantung tidak memompa darah secara efektif.

        Jika Anda mengalami salah satu atau beberapa gejala ini, segera konsultasikan dengan dokter.
      `
    },
    {
      id: 5,
      title: "Pentingnya Tidur Cukup untuk Kesehatan Kardiovaskular",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400",
      date: "3 hari lalu",
      author: "Dr. Gratia Yudika", 
      slug: "tidur-kesehatan-kardiovaskular",
      content: `
        Tidur yang cukup dan berkualitas sangat penting untuk menjaga kesehatan jantung Anda.
        Kurang tidur kronis dapat meningkatkan risiko berbagai masalah kesehatan, termasuk penyakit jantung.

        **Bagaimana Tidur Mempengaruhi Jantung?**

        1.  **Tekanan Darah**:
            Saat tidur, tekanan darah Anda menurun. Kurang tidur dapat membuat tekanan darah tetap tinggi lebih lama.

        2.  **Detak Jantung**:
            Tidur membantu mengatur detak jantung. Kurang tidur dapat menyebabkan detak jantung tidak teratur.

        3.  **Peradangan**:
            Kurang tidur dikaitkan dengan peningkatan peradangan dalam tubuh, yang merupakan faktor risiko penyakit jantung.

        4.  **Berat Badan**:
            Kurang tidur dapat memengaruhi hormon yang mengontrol nafsu makan, berpotensi menyebabkan penambahan berat badan.

        5.  **Gula Darah**:
            Tidur yang tidak memadai dapat memengaruhi cara tubuh memproses glukosa, meningkatkan risiko diabetes tipe 2.

        **Tips untuk Tidur Berkualitas:**

        -   Tetapkan jadwal tidur yang konsisten.
        -   Ciptakan lingkungan tidur yang gelap, tenang, dan sejuk.
        -   Hindari kafein dan alkohol sebelum tidur.
        -   Batasi paparan layar (ponsel, komputer) sebelum tidur.
        -   Lakukan relaksasi sebelum tidur.
        -   Olahraga teratur (tapi hindari olahraga berat menjelang tidur).

        Usahakan untuk mendapatkan 7-9 jam tidur per malam untuk kesehatan jantung yang optimal.
      `
    }
  ];

  const article = articles.find(article => article.slug === slug);

  if (!article) {
    return <div className="text-center py-8">Artikel tidak ditemukan</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{article.title}</h1>
        <p className="text-gray-500">
          Diposting {article.date} oleh <span className="text-red-500 font-semibold">{article.author}</span>
        </p>
        <div className="prose max-w-none">
          {article.content.split('\n').map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-gray-700 ${
                paragraph.startsWith('    ') 
                  ? 'mb-2' 
                  : paragraph.trim().startsWith('**') 
                    ? 'font-bold mb-3'
                    : 'mb-2'
              }`}
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}