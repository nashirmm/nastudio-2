export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  keyTakeaways: string[];
  content: string[];
}

export const businessArticles: ArticleItem[] = [
  {
    id: 'toko-wa-vs-marketplace',
    title: '5 Alasan Mengapa Toko Online Berbasis WhatsApp Lebih Menguntungkan untuk UMKM',
    category: 'Strategi Penjualan',
    readTime: '3 menit baca',
    publishDate: '05 Okt 2026',
    summary: 'Hemat potongan komisi marketplace hingga 12% dan bangun basis pembeli setia secara langsung dengan toko online mandiri terintegrasi chat WhatsApp.',
    keyTakeaways: [
      'Uang penjualan 100% langsung masuk ke rekening pribadi tanpa potongan admin platform.',
      'Data nomor kontak pembeli tersimpan rapi untuk promosi repeat order.',
      'Proses belanja terasa ramah dan personal bagi kebiasaan masyarakat Indonesia.',
      'Pelanggan bisa membayar via transfer bank, e-wallet, atau scan QRIS instan.'
    ],
    content: [
      'Banyak pemilik UMKM di Indonesia mengeluhkan kenaikan biaya komisi di marketplace yang kini mencapai 8% hingga 12% per transaksi. Bagi produk dengan margin keuntungan tipis, potongan ini sangat menggerus pendapatan bersih usaha.',
      'Dengan memiliki toko online sendiri yang langsung terhubung ke WhatsApp, pembeli dapat memilih produk dari katalog yang rapi, lalu saat checkout, format pesanan otomatis terkirim ke WhatsApp penjual.',
      'Selain bebas potongan komisi, Anda memiliki kendali penuh atas data pelanggan lama untuk menawarkan promo loyalitas dan membangun brand yang kuat dalam jangka panjang.'
    ]
  },
  {
    id: 'tips-domain-seo-lokal',
    title: 'Cara Memilih Domain & Nama Website Bisnis agar Cepat Muncul di Pencarian Google',
    category: 'Branding & SEO',
    readTime: '4 menit baca',
    publishDate: '01 Okt 2026',
    summary: 'Panduan praktis memilih ekstensi domain .COM atau .ID, merumuskan nama brand yang mudah diketik, dan trik SEO lokal agar dicari pelanggan terdekat.',
    keyTakeaways: [
      'Gunakan nama domain yang singkat, mudah dieja, dan hindari tanda hubung (-) yang membingungkan.',
      'Pilih ekstensi .COM untuk jangkauan luas atau .ID untuk memperkuat identitas brand lokal Indonesia.',
      'Hubungkan website dengan profil Google Bisnisku (Google Maps) untuk traffic pelanggan terdekat.',
      'Pastikan website memiliki kecepatan muat di bawah 2 detik pada perangkat smartphone.'
    ],
    content: [
      'Nama domain adalah alamat digital resmi tempat bisnis Anda beroperasi di internet. Calon pelanggan sering kali menilai profesionalitas sebuah usaha dari nama domain yang digunakan.',
      'Hindari penggunaan subdomain gratisan yang terkesan kurang serius. Menggunakan domain berbayar seperti .com atau .id langsung meningkatkan skor kepercayaan konsumen baru.',
      'Pastikan juga website Anda dioptimalkan dengan kata kunci pencarian lokal, misalnya menyertakan jenis layanan dan nama kota usaha Anda agar Google merekomendasikannya kepada pencari terdekat.'
    ]
  },
  {
    id: 'kredibilitas-company-profile',
    title: 'Website Company Profile: Kunci Sukses Memenangkan Klien Korporat & Tender Usaha',
    category: 'Kredibilitas Bisnis',
    readTime: '3 menit baca',
    publishDate: '28 Sep 2026',
    summary: 'Mengapa perusahaan yang memiliki website resmi dengan email berbayar 4x lebih dipercaya oleh mitra bisnis besar dan vendor pengadaan barang/jasa.',
    keyTakeaways: [
      'Klien institusi dan B2B selalu mengecek website resmi sebelum menyetujui kontrak kerja sama.',
      'Email bisnis (info@perusahaananda.com) mencerminkan badan usaha yang sah dan profesional.',
      'Website menjadi wadah terbaik memamerkan portofolio proyek, sertifikasi, dan legalitas usaha.',
      'Mempermudah penanggung jawab tender mengunduh company profile format PDF kapan saja.'
    ],
    content: [
      'Dalam dunia bisnis B2B dan pengadaan proyek, kredibilitas adalah mata uang utama. Sering kali sebuah penawaran gugur bukan karena kualitas produk yang buruk, melainkan karena calon mitra ragu terhadap eksistensi perusahaan.',
      'Website company profile yang bersih dan elegan memberikan rasa aman bagi klien besar bahwa bisnis Anda beroperasi secara profesional dan dapat dipertanggungjawabkan.',
      'Cukup dengan menampilkan visi, legalitas, daftar layanan, galeri pekerjaan sebelumnya, dan alamat kantor yang terverifikasi, peluang memenangkan kesepakatan bisnis akan meningkat berlipat ganda.'
    ]
  }
];
