import { PortfolioProject } from '../types';
import { 
  heroAgencyImg, 
  craftEcommerceImg, 
  corporateLogisticsImg, 
  fintechPortalImg 
} from '../assets/images';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'kopi-arum-manis',
    title: 'Kopi Arum Manis Roastery',
    category: 'toko-online',
    categoryLabel: 'Toko Online & Kafe',
    clientName: 'Arum Manis Coffee & Lifestyle',
    summary: 'Website katalog kopi estetik dengan tombol pesan langsung ke WhatsApp admin. Pelanggan bisa pilih varian biji kopi, hitung ongkir otomatis, dan langsung order.',
    imageUrl: craftEcommerceImg,
    results: 'Orderan WhatsApp Naik 3x Lipat · Pelanggan Mudah Pilih Menu',
    priceTag: 'Paket UMKM (Rp 1.190.000)',
    features: [
      'Tombol Checkout WhatsApp Otomatis',
      'Katalog Produk & Foto Estetik',
      'Hitung Total Belanja Otomatis',
      'Tampilan Super Ringan di HP Pelanggan'
    ],
    interactiveType: 'coffee-shop',
    story: {
      problem: 'Sebelumnya hanya jualan lewat Instagram dan sering kewalahan membalas chat pembeli yang menanyakan harga, stok, dan rekening satu per satu.',
      solution: 'NA Studio membuatkan website katalog ringkas. Pelanggan tinggal klik produk yang diinginkan, lalu rincian pesanan terformat rapi dan langsung terkirim ke WhatsApp penjual.',
      outcome: 'Waktu melayani chat pembeli jadi 5x lebih cepat, dan omzet bulanan melonjak karena pembeli merasa praktis.',
      testimonial: {
        quote: 'Pelanggan saya sering bilang websitenya keren dan gampang banget dipakai belanja lewat HP. Nggak ribet sama sekali!',
        author: 'Mbak Dian Anggraini',
        role: 'Pemilik Kopi Arum Manis (Bandung)'
      }
    }
  },
  {
    id: 'nusantara-logistics',
    title: 'PT Nusantara Global Ekspedisi',
    category: 'company-profile',
    categoryLabel: 'Website Company Profile',
    clientName: 'PT Nusantara Global Freight',
    summary: 'Website resmi profil perusahaan untuk meningkatkan kepercayaan klien tender B2B dan mitra bisnis besar. Dilengkapi profil armada kapal dan form minta penawaran harga.',
    imageUrl: corporateLogisticsImg,
    results: 'Mendapat 12 Kontrak Tender Baru · Tampil Meyakinkan di Google',
    priceTag: 'Paket Bisnis (Rp 1.990.000)',
    features: [
      'Profil Perusahaan & Legalitas Lengkap',
      'Tampilan Mewah & Berwibawa di Mata Klien',
      'Tombol Telepon & WhatsApp Cepat',
      'Lokasi Kantor Terhubung Google Maps'
    ],
    interactiveType: 'cargo-track',
    story: {
      problem: 'Perusahaan logistik ini sering diragukan saat ikut tender pengadaan karena belum memiliki website resmi dengan domain berbayar.',
      solution: 'NA Studio merancang website profil elegan dengan warna navy terpercaya, menampilkan galeri armada kapal, sertifikasi resmi, dan formulir permintaan penawaran.',
      outcome: 'Kredibilitas perusahaan meningkat drastis di mata klien B2B dan berhasil memenangkan 12 tender baru.',
      testimonial: {
        quote: 'Sejak punya website resmi dari NA Studio, calon klien perusahaan besar jauh lebih percaya saat kami ajukan proposal kerja sama.',
        author: 'Pak Bambang Sudiro',
        role: 'Direktur Operasional (Jakarta)'
      }
    }
  },
  {
    id: 'batik-lestari',
    title: 'Batik Lestari Solo Modern',
    category: 'toko-online',
    categoryLabel: 'Katalog Fashion & Retail',
    clientName: 'Batik Lestari Heritage',
    summary: 'Website katalog pakaian batik premium. Menampilkan foto detail motif, panduan ukuran pakaian, dan tombol beli langsung via WhatsApp.',
    imageUrl: fintechPortalImg,
    results: 'Penjualan Luar Kota Naik 250% · Bebas Biaya Komisi',
    priceTag: 'Paket UMKM (Rp 1.190.000)',
    features: [
      'Foto Produk HD & Panduan Ukuran Baju',
      'Kategori Produk Rapi (Pria, Wanita, Couple)',
      'Langsung Chat Admin Tanpa Akun Ribet',
      'Daftar Testimoni Pelanggan Terpercaya'
    ],
    interactiveType: 'fashion-store',
    story: {
      problem: 'Terlalu bergantung pada marketplace dengan potongan komisi yang makin besar dan perang harga antar penjual.',
      solution: 'Dibuatkan website brand sendiri dengan tampilan bersih dan anggun, di mana pembeli bisa langsung transaksi tanpa biaya potongan perantara.',
      outcome: 'Margin keuntungan kembali utuh dan loyalitas pelanggan lama bertambah kuat.',
      testimonial: {
        quote: 'Alhamdulillah sekarang punya toko sendiri di internet. Uang penjualan utuh tanpa potongan admin marketplace!',
        author: 'Ibu Ratna Dewi',
        role: 'Owner Batik Lestari (Solo)'
      }
    }
  },
  {
    id: 'klinik-sehat-keluarga',
    title: 'Klinik Sehat Keluarga Medika',
    category: 'landing',
    categoryLabel: 'Landing Page Jasa & Kesehatan',
    clientName: 'Klinik Medika Pratama',
    summary: 'Landing page jadwal praktek dokter, daftar tarif layanan kesehatan transparan, dan formulir pendaftaran antrean mudah dari rumah via WhatsApp.',
    imageUrl: heroAgencyImg,
    results: 'Antrean Pasien Lebih Tertib · Pasien Lansia Mudah Akses',
    priceTag: 'Paket Hemat (Rp 499.000)',
    features: [
      'Jadwal Dokter Spesialis Terupdate',
      'Daftar Antrean Langsung via WhatsApp',
      'Petunjuk Arah Rute Google Maps 1-Klik',
      'Bisa Dibuka Cepat di Semua Tipe HP'
    ],
    interactiveType: 'clinic-booking',
    story: {
      problem: 'Pasien sering menumpuk di ruang tunggu karena tidak tahu jadwal dokter atau datang terlalu awal.',
      solution: 'Landing page informatif yang memuat jadwal dokter aktif dan tombol reservasi WhatsApp yang praktis.',
      outcome: 'Ruang tunggu jauh lebih tertib dan pasien merasa puas karena tidak perlu antre berjam-jam.',
      testimonial: {
        quote: 'Proses pembuatannya cepat sekali, 4 hari sudah online dan langsung dipakai pasien. Tim NA Studio sangat ramah dan sabar.',
        author: 'dr. Farhan Malik',
        role: 'Kepala Pelayanan Medis (Surabaya)'
      }
    }
  }
];
