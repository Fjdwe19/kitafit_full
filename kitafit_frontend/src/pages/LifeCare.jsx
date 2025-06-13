import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LifeCare() {
  return (
    <div className="p-4 bg-white min-h-screen space-y-6">
      {/* Header Lokasi dan Banner */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="text-sm text-red-600 bg-red-100 rounded-full px-4 py-1 font-medium">
            Jl. Besar Ijen, Oro-oro Dowo
          </div>
          <Button variant="ghost" size="icon" className="text-red-600">
            &#8942;
          </Button>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/images/food-banner.jpg"
            alt="Banner Makanan"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-4">
            <h2 className="text-white font-bold text-sm">
              Lihat Rekomendasi Makanan Berdasarkan Tingkat BPM Kamu!
            </h2>
            <Button size="sm" className="mt-2 bg-red-600 text-white text-xs w-fit px-3 py-1 rounded">
              Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Input
          placeholder="Cari makanan disini..."
          className="pl-4 pr-4 py-2 border border-red-500 rounded-full"
        />
      </div>

      {/* Partner Penyedia */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Partner Penyedia Makanan Sehat</h3>
        <div className="flex space-x-4 overflow-auto">
          <Card className="p-4 flex items-center justify-center h-20 w-40">
            <img src="/partners/yellowfit.png" alt="Yellow Fit Kitchen" className="h-full object-contain" />
          </Card>
          <Card className="p-4 flex items-center justify-center h-20 w-40">
            <img src="/partners/healthygo.png" alt="Healthy Go" className="h-full object-contain" />
          </Card>
        </div>
      </div>

      {/* Rekomendasi Makanan */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Ayo Order Sekarang!</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="p-3 space-y-2">
            <img src="/foods/salmon.jpg" alt="Salad Salmon" className="w-full h-28 object-cover rounded" />
            <h4 className="text-sm font-semibold">Salad Salmon</h4>
            <p className="text-xs text-gray-500">Sayur, Salmon, Alpukat</p>
          </Card>
          <Card className="p-3 space-y-2">
            <img src="/foods/chicken-bowl.jpg" alt="Grain Bowl Ayam" className="w-full h-28 object-cover rounded" />
            <h4 className="text-sm font-semibold">Grain Bowl Ayam</h4>
            <p className="text-xs text-gray-500">Nasi Merah, Ayam, Sayuran</p>
          </Card>
          <Card className="p-3 space-y-2">
            <img src="/foods/gado-gado.jpg" alt="Gado-Gado" className="w-full h-28 object-cover rounded" />
            <h4 className="text-sm font-semibold">Gado-Gado</h4>
            <p className="text-xs text-gray-500">Sayuran Rebus, Telur, Tempe</p>
          </Card>
        </div>
      </div>

      {/* Bingung Mau Makan Apa */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-1">Bingung Mau Makan Apa?</h3>
        <p className="text-sm text-gray-500">Cari makanan berdasarkan jam makannya!</p>
      </div>

      {/* Tambahan: Menu Populer Hari Ini */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Menu Populer Hari Ini</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="p-3 space-y-2">
            <img src="/foods/fruit-bowl.jpg" alt="Fruit Bowl" className="w-full h-28 object-cover rounded" />
            <h4 className="text-sm font-semibold">Fruit Bowl</h4>
            <p className="text-xs text-gray-500">Buah segar campuran, granola, yoghurt</p>
          </Card>
          <Card className="p-3 space-y-2">
            <img src="/foods/vegan-wrap.jpg" alt="Vegan Wrap" className="w-full h-28 object-cover rounded" />
            <h4 className="text-sm font-semibold">Vegan Wrap</h4>
            <p className="text-xs text-gray-500">Tortilla gandum, hummus, sayuran segar</p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold text-red-600">Ingin yang lebih personal?</h3>
        <p className="text-sm text-gray-500 mt-1">Dapatkan rekomendasi makanan yang disesuaikan dengan kebutuhan nutrisi dan riwayat kesehatanmu.</p>
        <Button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full">Konsultasi Gizi Sekarang</Button>
      </div>
    </div>
  );
}
