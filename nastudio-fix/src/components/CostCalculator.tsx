import React, { useState, useMemo } from 'react';
import { Calculator, Check, MessageCircle, Sparkles } from 'lucide-react';
import { trackCalculatePrice, trackWhatsAppClick } from '../lib/analytics';

export const CostCalculator: React.FC<{ onConsultProject: (spec: string) => void }> = () => {
  const [siteType, setSiteType] = useState<'landing' | 'toko' | 'compro'>('toko');
  const [extraScale, setExtraScale] = useState<'standar' | 'ekstra'>('standar');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['qris']);
  const [namaPemesan, setNamaPemesan] = useState('');
  const [namaUsaha, setNamaUsaha] = useState('');

  const typeData = {
    landing: { name: 'Landing Page Promosi', price: 499000, desc: '1 Halaman jualan fokus konversi WhatsApp' },
    toko: { name: 'Toko Online & Katalog WA', price: 1190000, desc: 'Katalog produk & checkout pesan ke WA' },
    compro: { name: 'Website Company Profile', price: 1990000, desc: 'Website resmi multi-halaman berwibawa' },
  };

  const addonData = [
    { id: 'qris', label: 'Scan QRIS Pembayaran Otomatis', price: 250000, desc: 'Bisa terima bayar via GoPay, OVO, ShopeePay, BCA' },
    { id: 'email-resmi', label: 'Email Kantor Resmi (info@bisnisanda.com)', price: 150000, desc: 'Terlihat kredibel untuk kirim surat penawaran' },
    { id: 'bantuan-foto', label: 'Bantuan Edit Foto Produk Rapi', price: 100000, desc: 'Foto produk dibersihkan background-nya agar estetik' },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalCost = useMemo(() => {
    const base = typeData[siteType].price;
    const extra = extraScale === 'ekstra' ? 200000 : 0;
    const addonsTotal = selectedAddons.reduce((acc, aId) => {
      const item = addonData.find((a) => a.id === aId);
      return acc + (item ? item.price : 0);
    }, 0);
    return base + extra + addonsTotal;
  }, [siteType, extraScale, selectedAddons]);

  const handleSendWA = () => {
    trackCalculatePrice(typeData[siteType].name, totalCost);
    trackWhatsAppClick('Cost Calculator', `${typeData[siteType].name} - Rp ${totalCost}`);

    const addonNames = selectedAddons
      .map((id) => addonData.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const msg = [
      `Halo NA Studio, saya mau pesan website dengan estimasi:`,
      `Jenis: ${typeData[siteType].name}`,
      `Skala: ${extraScale === 'ekstra' ? 'Paket Banyak Halaman/Produk' : 'Paket Standar'}`,
      addonNames ? `Fitur Tambahan: ${addonNames}` : '',
      `Total Estimasi: Rp ${totalCost.toLocaleString('id-ID')}`,
      namaPemesan ? `Nama: ${namaPemesan}` : '',
      namaUsaha ? `Nama Usaha: ${namaUsaha}` : '',
      `Boleh dibantu info slot pengerjaannya? Terima kasih!`
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://api.whatsapp.com/send?phone=6285819922239&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-10">
          <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Kalkulator Sederhana
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Hitung Estimasi Biaya Website Usaha Anda
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilih kebutuhan Anda di bawah ini untuk melihat total biaya yang transparan dan terjangkau:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6 rounded-2xl border border-slate-200 p-6 bg-slate-50/50">
            
            {/* Step 1 */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-2.5">
                1. Pilih Kebutuhan Website:
              </label>
              <div className="space-y-2">
                {(['landing', 'toko', 'compro'] as const).map((k) => (
                  <div
                    key={k}
                    onClick={() => setSiteType(k)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      siteType === k
                        ? 'border-indigo-900 bg-white shadow-xs ring-1 ring-indigo-900'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{typeData[k].name}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{typeData[k].desc}</div>
                    </div>
                    <div className="text-xs font-bold text-indigo-950 font-mono">
                      Rp {typeData[k].price.toLocaleString('id-ID')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-2.5">
                2. Skala Konten:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setExtraScale('standar')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    extraScale === 'standar'
                      ? 'border-indigo-900 bg-white font-bold text-slate-900 ring-1 ring-indigo-900'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <div className="text-xs font-bold">Skala Standar</div>
                  <div className="text-[11px] text-slate-500 font-normal">Sudah termasuk (+Rp 0)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setExtraScale('ekstra')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    extraScale === 'ekstra'
                      ? 'border-indigo-900 bg-white font-bold text-slate-900 ring-1 ring-indigo-900'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <div className="text-xs font-bold">Produk / Halaman Lebih Banyak</div>
                  <div className="text-[11px] text-slate-500 font-normal">+Rp 200.000</div>
                </button>
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-2.5">
                3. Fitur Tambahan (Opsional):
              </label>
              <div className="space-y-2">
                {addonData.map((item) => {
                  const active = selectedAddons.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleAddon(item.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        active
                          ? 'border-indigo-900 bg-white shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`h-4 w-4 rounded flex items-center justify-center text-white text-[10px] ${active ? 'bg-indigo-900' : 'border border-slate-300'}`}>
                          {active && <Check className="h-3 w-3" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">{item.label}</div>
                          <div className="text-[11px] text-slate-500">{item.desc}</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-indigo-950 font-mono">
                        +Rp {item.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Box */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-indigo-950/5 space-y-5 sticky top-24">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs text-slate-500 font-medium">Estimasi Total Biaya Terima Beres:</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Rp {totalCost.toLocaleString('id-ID')}
              </div>
              <p className="text-xs text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                <Check className="h-3.5 w-3.5" />
                <span>Termasuk Domain & Hosting 1 Tahun Penuh</span>
              </p>
            </div>

            {/* Inputs for prefill */}
            <div className="space-y-2">
              <span className="text-[11px] text-slate-500 font-medium block">
                Boleh isi nama agar pesan WhatsApp terisi otomatis:
              </span>
              <input
                type="text"
                placeholder="Nama Anda"
                value={namaPemesan}
                onChange={(e) => setNamaPemesan(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-900"
              />
              <input
                type="text"
                placeholder="Nama Toko / Usaha Anda"
                value={namaUsaha}
                onChange={(e) => setNamaUsaha(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-900"
              />
            </div>

            <button
              onClick={handleSendWA}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Kirim Rincian Ini ke WhatsApp Kami</span>
            </button>

            <div className="text-[11px] text-slate-500 text-center leading-relaxed">
              Konsultasi 100% gratis tanpa paksaan order. Anda bisa tanya-tanya dulu sepuasnya!
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
