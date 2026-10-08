import { ServiceItem, TestimonialItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'landing-page',
    title: 'Landing Page Promosi / Jualan',
    tagline: 'Cocok untuk jualan 1 produk, jasa spesifik, atau iklan di TikTok / Instagram Ads',
    description: 'Halaman website satu halaman (one-page) yang fokus membujuk pengunjung agar langsung menghubungi WhatsApp Anda. Ringan, cepat dibuka di HP, dan hemat biaya.',
    price: 'Rp 499.000',
    timeline: '2 - 4 Hari Jadi',
    benefits: [
      '1 Halaman promosi berkonversi tinggi',
      'Tombol langsung chat ke WhatsApp Anda',
      'Gratis Domain & Hosting 1 Tahun',
      'Cocok untuk dipasang di Bio Instagram/TikTok',
      'Dibantu penulisan kata-kata promosi menarik'
    ]
  },
  {
    id: 'toko-wa',
    title: 'Toko Online / Katalog WhatsApp',
    tagline: 'Paling Populer untuk UMKM: Jual produk rapi tanpa potongan komisi marketplace',
    description: 'Toko online praktis dengan katalog foto produk, pilihan variasi/ukuran, dan tombol beli yang otomatis mengirimkan rincian pesanan rapi ke nomor WhatsApp admin.',
    price: 'Rp 1.190.000',
    popular: true,
    timeline: '4 - 7 Hari Jadi',
    benefits: [
      'Katalog produk hingga puluhan item',
      'Checkout otomatis kirim rincian ke WhatsApp',
      'Bisa atur harga diskon & varian produk',
      'Gratis Domain .COM / .ID & Hosting Cepat',
      'Dibantu input 15 produk pertama sampai siap jualan'
    ]
  },
  {
    id: 'company-profile',
    title: 'Website Company Profile Lengkap',
    tagline: 'Untuk perusahaan, kantor jasa, klinik, atau instansi agar dipercaya klien',
    description: 'Website resmi multi-halaman yang elegan untuk membangun citra profesional. Memuat profil usaha, layanan, galeri pekerjaan, legalitas, dan peta Google Maps kantor Anda.',
    price: 'Rp 1.990.000',
    timeline: '5 - 9 Hari Jadi',
    benefits: [
      'Hingga 5-7 Halaman (Home, Tentang, Layanan, Kontak, dll.)',
      'Email profesional nama bisnis (contoh: info@bisnisanda.com)',
      'Desain elegan warna navy keunguan mewah',
      'Terhubung ke Google Maps & WhatsApp',
      'Garansi dan bantuan teknis selama 1 tahun'
    ]
  }
];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Dian Anggraini',
    role: 'Owner Kopi Arum Manis',
    business: 'Roastery & Cafe',
    city: 'Bandung',
    avatarText: 'DA',
    content: 'Awalnya saya takut bikin website itu ribet dan mahal. Ternyata di NA Studio dibantu dari nol sampai jadi! Pelanggan saya sekarang tinggal pilih menu di website dan pesan via WhatsApp. Praktis banget.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Bambang Sudiro',
    role: 'Direktur Operasional',
    business: 'PT Nusantara Global Ekspedisi',
    city: 'Jakarta',
    avatarText: 'BS',
    content: 'Website profil perusahaan kami jadi terlihat sangat profesional dan berwibawa. Calon klien tender sekarang percaya penuh saat kami kirim link website. Pelayanannya cepat dan ramah.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Ibu Ratna Dewi',
    role: 'Pemilik Usaha',
    business: 'Batik Lestari Heritage',
    city: 'Solo',
    avatarText: 'RD',
    content: 'Harga sangat terjangkau untuk UMKM seperti saya. Nggak perlu lagi pusing mikir potongan komisi jualan. Semua uang masuk langsung ke rekening. Terima kasih mas-mas di NA Studio!',
    rating: 5
  },
  {
    id: 't4',
    name: 'dr. Farhan Malik',
    role: 'Kepala Pelayanan',
    business: 'Klinik Medika Pratama',
    city: 'Surabaya',
    avatarText: 'FM',
    content: 'Pasien sangat terbantu karena bisa lihat jadwal dokter sebelum datang. Tombol WhatsApp-nya mempermudah pendaftaran. Desainnya bersih, elegan, dan enak dibaca di HP.',
    rating: 5
  }
];

export const faqsData = [
  {
    question: 'Apakah saya harus mengerti komputer atau coding untuk memesan website?',
    answer: 'Sama sekali TIDAK! Anda hanya perlu menyiapkan foto produk/layanan dan informasi dasar tentang bisnis Anda. Semua hal teknis (domain, hosting, desain, setting tombol WhatsApp) kami yang kerjakan sampai website siap dipakai jualan.'
  },
  {
    question: 'Berapa biaya pembuatan website dan apakah ada biaya tersembunyi?',
    answer: 'Semua harga kami sangat transparan tanpa biaya tersembunyi! Mulai dari Rp 499.000 untuk Landing Page hemat. Harga tersebut sudah termasuk nama domain (.COM / .ID), sewa server/hosting aktif selama 1 tahun penuh, dan garansi bantuan.'
  },
  {
    question: 'Berapa lama proses pembuatan website sampai bisa dibuka di internet?',
    answer: 'Sangat cepat! Untuk paket Landing Page hanya membutuhkan 2-4 hari kerja. Untuk Toko Online dan Company Profile rata-rata selesai dalam 4-7 hari kerja setelah materi diserahkan.'
  },
  {
    question: 'Bagaimana cara pelanggan membeli barang atau menghubungi saya?',
    answer: 'Website akan dilengkapi tombol WhatsApp yang otomatis terhubung ke nomor HP Anda atau staf admin Anda. Ketika pelanggan mengklik tombol pesan, rincian pesanan sudah tersusun rapi otomatis di ruang chat WhatsApp.'
  },
  {
    question: 'Bagaimana cara pembayarannya? Apakah aman?',
    answer: 'Sangat aman! Anda cukup membayar Uang Muka (DP) 50% di awal. Sisanya 50% baru dilunasi setelah website selesai dibuat, Anda review hasilnya, dan website sudah live di internet.'
  },
  {
    question: 'Bagaimana jika nanti saya ingin mengganti nomor HP, harga, atau foto produk?',
    answer: 'Tenang saja! Kami menyediakan garansi bantuan gratis jika ada perubahan kecil. Kami juga memberikan panduan video singkat yang sangat mudah dipahami jika Anda ingin update sendiri lewat HP atau laptop.'
  }
];
