import React, { useState } from 'react';
import { 
  ShoppingCart, 
  MessageCircle, 
  Check, 
  Search, 
  Clock, 
  MapPin, 
  Truck,
  Heart,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface SimulatorProps {
  type: 'coffee-shop' | 'cargo-track' | 'fashion-store' | 'clinic-booking';
}

export const InteractiveSimulators: React.FC<SimulatorProps> = ({ type }) => {
  // 1. Coffee Shop State
  const [coffeeQty, setCoffeeQty] = useState(2);
  const [coffeeGrind, setCoffeeGrind] = useState('Biji Utuh');
  const [coffeeNotice, setCoffeeNotice] = useState<string | null>(null);

  // 2. Cargo Tracker State
  const [resiInput, setResiInput] = useState('EXP-JKT-9921');
  const [activeResi, setActiveResi] = useState('EXP-JKT-9921');

  // 3. Fashion Store State
  const [selectedSize, setSelectedSize] = useState('L');
  const [fashionNotice, setFashionNotice] = useState<string | null>(null);

  // 4. Clinic Booking State
  const [selectedSlot, setSelectedSlot] = useState('10:00 WIB');
  const [clinicNotice, setClinicNotice] = useState<string | null>(null);

  // COFFEE SHOP SIMULATOR
  if (type === 'coffee-shop') {
    const unitPrice = 75000;
    const total = unitPrice * coffeeQty;

    const handleSendWA = () => {
      setCoffeeNotice(`Format Pesanan WhatsApp Otomatis: "Halo Admin Arum Manis, saya mau pesan 1x Kopi Gayo (${coffeeGrind}) Qty ${coffeeQty}x. Total Rp ${total.toLocaleString('id-ID')}. Mohon info no. rekening ya!"`);
      setTimeout(() => setCoffeeNotice(null), 7000);
    };

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm">
        {/* Header Toko */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-indigo-900">Arum Manis Coffee Shop</div>
            <div className="text-xs text-slate-500">Katalog Pemesanan Praktis</div>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Toko Buka
          </span>
        </div>

        {/* Produk Card */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Arabika Gayo Wine Process</h4>
              <p className="text-xs text-slate-500">200 gram · Aroma buah manis segar</p>
              <div className="text-sm font-bold text-indigo-950 mt-1">
                Rp {unitPrice.toLocaleString('id-ID')}
              </div>
            </div>

            {/* Stepper */}
            <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => setCoffeeQty(Math.max(1, coffeeQty - 1))}
                className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold"
              >
                -
              </button>
              <span className="px-3 py-1 font-semibold text-slate-800 text-xs">
                {coffeeQty}
              </span>
              <button
                onClick={() => setCoffeeQty(coffeeQty + 1)}
                className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Varian */}
          <div>
            <span className="text-xs font-medium text-slate-600 block mb-1.5">Pilih Bentuk:</span>
            <div className="flex gap-2">
              {['Biji Utuh', 'Giling Halus', 'Giling Kasar'].map((v) => (
                <button
                  key={v}
                  onClick={() => setCoffeeGrind(v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    coffeeGrind === v
                      ? 'border-indigo-900 bg-indigo-900 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Total & Tombol WA */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500">Total Harga:</span>
            <div className="text-base font-extrabold text-slate-900">
              Rp {total.toLocaleString('id-ID')}
            </div>
          </div>

          <button
            onClick={handleSendWA}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Pesan Langsung via WhatsApp</span>
          </button>
        </div>

        {/* Notifikasi feedback */}
        {coffeeNotice && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
            <div className="font-bold flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-600" />
              Simulasi Pesan yang Terkirim ke WhatsApp Anda:
            </div>
            <p className="text-[11px] text-emerald-800 italic bg-white p-2 rounded border border-emerald-100">
              {coffeeNotice}
            </p>
          </div>
        )}
      </div>
    );
  }

  // CARGO TRACKER SIMULATOR
  if (type === 'cargo-track') {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-indigo-900">PT Nusantara Global Ekspedisi</div>
            <div className="text-xs text-slate-500">Layanan Cek Pengiriman Cepat</div>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Jalur Laut & Darat
          </span>
        </div>

        {/* Input No Resi */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={resiInput}
            onChange={(e) => setResiInput(e.target.value)}
            placeholder="Ketik No. Resi Anda"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-900"
          />
          <button
            onClick={() => setActiveResi(resiInput || 'EXP-JKT-9921')}
            className="px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white text-xs font-semibold shrink-0"
          >
            Cek Resi
          </button>
        </div>

        {/* Status Perjalanan */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">No. Pengiriman:</span>
            <span className="font-bold text-slate-900">{activeResi}</span>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-slate-200 text-xs">
            <div className="flex items-start gap-2.5">
              <div className="h-3 w-3 rounded-full bg-emerald-500 mt-1 shrink-0" />
              <div>
                <div className="font-semibold text-slate-900">Jakarta (Gudang Pelabuhan)</div>
                <div className="text-[11px] text-slate-500">Barang telah dimuat ke armada</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="h-3 w-3 rounded-full bg-blue-600 mt-1 shrink-0 animate-ping" />
              <div>
                <div className="font-semibold text-blue-900">Sedang Dalam Perjalanan</div>
                <div className="text-[11px] text-slate-500">Estimasi tiba di tujuan: Besok Sore</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="h-3 w-3 rounded-full bg-slate-300 mt-1 shrink-0" />
              <div>
                <div className="font-semibold text-slate-400">Surabaya (Alamat Penerima)</div>
                <div className="text-[11px] text-slate-400">Menunggu serah terima</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // FASHION STORE SIMULATOR
  if (type === 'fashion-store') {
    const handleOrder = () => {
      setFashionNotice(`Format WhatsApp: "Halo Mbak Ratna, saya mau beli Kemeja Batik Prabuseno ukuran ${selectedSize}. Alamat saya di Semarang. Mohon total ongkirnya ya!"`);
      setTimeout(() => setFashionNotice(null), 7000);
    };

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-indigo-900">Batik Lestari Heritage Solo</div>
            <div className="text-xs text-slate-500">Katalog Pakaian Online</div>
          </div>
          <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Stok Tersedia
          </span>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Kemeja Batik Katun Prabuseno</h4>
              <p className="text-xs text-slate-500">Motif Parang Rusak Barong · Lapis Furing</p>
              <div className="text-sm font-bold text-indigo-950 mt-1">
                Rp 185.000 <span className="text-xs line-through text-slate-400 font-normal">Rp 230.000</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-slate-600 block mb-1.5">Pilih Ukuran Baju:</span>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center ${
                    selectedSize === sz
                      ? 'border-indigo-900 bg-indigo-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">Ukuran Terpilih: <strong>{selectedSize}</strong></span>
          <button
            onClick={handleOrder}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Beli Langsung via WhatsApp</span>
          </button>
        </div>

        {fashionNotice && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
            <div className="font-bold flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-600" />
              Simulasi Pesanan yang Diterima Penjual:
            </div>
            <p className="text-[11px] text-emerald-800 italic bg-white p-2 rounded border border-emerald-100">
              {fashionNotice}
            </p>
          </div>
        )}
      </div>
    );
  }

  // CLINIC BOOKING SIMULATOR
  if (type === 'clinic-booking') {
    const handleBook = () => {
      setClinicNotice(`Pesan WhatsApp: "Halo Admin Klinik Medika, saya mau reservasi jadwal dr. Farhan jam ${selectedSlot} untuk periksa anak saya. Terima kasih."`);
      setTimeout(() => setClinicNotice(null), 7000);
    };

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-indigo-900">Klinik Sehat Keluarga Medika</div>
            <div className="text-xs text-slate-500">Pendaftaran Antrean Online</div>
          </div>
          <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
            Praktek Hari Ini
          </span>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-900 font-bold flex items-center justify-center text-sm">
              dr
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">dr. Farhan Malik, Sp.A</div>
              <div className="text-xs text-slate-500">Dokter Spesialis Anak · Poli 2</div>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-slate-600 block mb-1.5">Pilih Jam Kedatangan:</span>
            <div className="grid grid-cols-3 gap-2">
              {['09:00 WIB', '10:00 WIB', '11:00 WIB', '16:00 WIB', '17:00 WIB', '19:00 WIB'].map((tm) => (
                <button
                  key={tm}
                  onClick={() => setSelectedSlot(tm)}
                  className={`py-2 px-1 rounded-lg text-xs font-semibold border transition-colors ${
                    selectedSlot === tm
                      ? 'border-indigo-900 bg-indigo-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {tm}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">Jam Dipilih: <strong>{selectedSlot}</strong></span>
          <button
            onClick={handleBook}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Kirim Pendaftaran via WA</span>
          </button>
        </div>

        {clinicNotice && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
            <div className="font-bold flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-600" />
              Simulasi Chat Reservasi yang Terkirim:
            </div>
            <p className="text-[11px] text-emerald-800 italic bg-white p-2 rounded border border-emerald-100">
              {clinicNotice}
            </p>
          </div>
        )}
      </div>
    );
  }

  return null;
};
