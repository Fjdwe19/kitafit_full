import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function RelatedArticles() {
  const navigate = useNavigate();
  
  const articles = [
    {
      id: 1,
      title: "Manfaat Berjalan Kaki Setiap Hari untuk Kesehatan Jantung yang Optimal",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400",
      date: "2 hari lalu",
      slug: "manfaat-berjalan-kaki"
    },
    {
      id: 2,  
      title: "Apakah Kafein Baik atau Buruk untuk Jantung? Simak Penjelasannya",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400", 
      date: "4 hari lalu",
      slug: "kafein-untuk-jantung"
    },
    {
      id: 3,
      title: "Perubahan Pola Makan yang Efektif untuk Menurunkan Kolesterol Jahat",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400",
      date: "1 minggu lalu",
      slug: "pola-makan-kolesterol"
    },
    {
      id: 4,
      title: "7 Tanda Awal Penyakit Jantung yang Perlu Diwaspadai",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400", // Medical/health-related image
      date: "1 hari lalu",
      slug: "tanda-awal-penyakit-jantung"
    },
    {
      id: 5,
      title: "Pentingnya Tidur Cukup untuk Kesehatan Kardiovaskular",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400", // Sleep/bedroom image
      date: "3 hari lalu",
      slug: "tidur-kesehatan-kardiovaskular"
    }
  ];

  const handleArticleClick = (slug) => {
    navigate(`/article/${slug}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Artikel Terkait</h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="pb-12 px-2"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id} className="pb-4 h-full">
            <div 
              onClick={() => handleArticleClick(article.slug)}
              className="cursor-pointer group bg-white rounded-lg shadow-md hover:shadow-xl 
              transition-all duration-300 border border-gray-100 h-full flex flex-col mx-1"
            >
              <div className="relative pt-[60%] rounded-t-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
                <button 
                  className="mt-4 text-red-600 hover:text-red-700 text-left inline-flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArticleClick(article.slug);
                  }}
                >
                  Baca selengkapnya &raquo;
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}