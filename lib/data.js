// SEMUA DATA UNDANGAN ADA DI SINI.
// Cukup ubah nilai-nilai di bawah ini sesuai data pernikahan
// Tidak perlu menyentuh file lain untuk mengganti teks/tanggal/nomor WA.
export const weddingData = {
  // Nama panggilan (dipakai di judul, cover, dsb)
  groom: {
    name: 'Riko',
    fullName: 'Riko Alfauzan',
    parents: 'Putra dari Bapak Kasmijan & Ibu Rukmiyati',
    instagram: 'gustian.adi',
    photo: '/images/bride.jpg',
  },
  bride: {
    name: 'Natasya',
    fullName: 'Natasya Fitriya Nabila',
    parents: 'Putri dari Bapak Agus Margono & Ibu Sri Murwati Ningsih',
    instagram: 'natasya.fitriya',
    photo: '/images/groom.jpg',
  },

  // Format ISO, dipakai untuk hitung mundur.
  weddingDateISO: '2026-11-22T16:30:00+07:00',
  weddingDateLabel: 'Minggu, 22 November 2026',

  // Kutipan / ayat pembuka
  quote: {
    text: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan agar kamu merasa tenang bersamanya, dan Dia menjadikan di antara kamu rasa kasih dan sayang.',
    source: 'QS. Ar-Rum: 21',
  },

  // Acara akad / pemberkatan
  akad: {
    title: 'Akad Nikah',
    date: 'Rabu, 11 November 2026',
    time: '08.00 - 10.00 WIB',
    place: 'Masjid Agung Ar-Rahman',
    address: 'Jl. Wahyu asri Utara II bb/196',
    mapsUrl: 'https://maps.google.com/?q=Masjid+Agung+Ar-Rahman',
  },

  // Resepsi
  resepsi: {
    title: 'Resepsi Pernikahan',
    date: 'Ahad, 22 November 2026',
    time: '16.30 - 20.00 WIB',
    place: 'Salon Vendimia Ballroom',
    address: 'Jl Wahyu asri Utara II bb/196',
    mapsUrl: 'https://maps.google.com/?q=Salon+Vendimia+Ballroom',
  },

  // Perjalanan Kami
  loveStory: [
    { title: 'Awal Bertemu', desc: 'Pertemuan sederhana yang ternyata mengubah arah cerita kami berdua.', icon: 'sparkles' },
    { title: 'Menjalin Hubungan', desc: 'Belajar saling memahami, bertumbuh, dan menguatkan satu sama lain setiap hari.', icon: 'heart' },
    { title: 'Lamaran', desc: 'Satu pertanyaan, satu jawaban, dan komitmen untuk melangkah bersama selamanya.', icon: 'gem' },
    { title: 'Menikah', desc: 'Awal dari babak baru kehidupan kami, dengan doa restu Anda semua.', icon: 'church' },
  ],

  // Galeri foto - taruh file di /public/images/ lalu tulis nama filenya di sini.
  gallery: [
    { src: '/images/gallery1.jpg', caption: '' },
    { src: '/images/gallery2.jpg', caption: '' },
    { src: '/images/gallery3.jpg', caption: '' },
    { src: '/images/gallery4.jpg', caption: '' },
    { src: '/images/gallery5.jpg', caption: '' },
    { src: '/images/gallery6.jpg', caption: '' },
    { src: '/images/gallery7.jpg', caption: '' },
    { src: '/images/gallery8.jpg', caption: '' },
    { src: '/images/gallery9.jpg', caption: '' },
    { src: '/images/gallery10.jpg', caption: '' },
    { src: '/images/gallery11.jpg', caption: '' },
    { src: '/images/gallery12.jpg', caption: '' },
    { src: '/images/gallery13.jpg', caption: '' },
    { src: '/images/gallery14.jpg', caption: '' },
    { src: '/images/gallery15.jpg', caption: '' },
    { src: '/images/gallery16.jpg', caption: '' },
    { src: '/images/gallery17.jpg', caption: '' },
    { src: '/images/gallery18.jpg', caption: '' },
    { src: '/images/gallery19.jpg', caption: '' },
    { src: '/images/gallery20.jpg', caption: '' },
    { src: '/images/gallery21.jpg', caption: '' },
    { src: '/images/gallery22.jpg', caption: '' },
    { src: '/images/gallery23.jpg', caption: '' },
    { src: '/images/gallery24.jpg', caption: '' },
    { src: '/images/gallery25.jpg', caption: '' },
    { src: '/images/gallery26.jpg', caption: '' },
    { src: '/images/gallery27.jpg', caption: '' },
    { src: '/images/gallery28.jpg', caption: '' },
    { src: '/images/gallery29.jpg', caption: '' },
    { src: '/images/gallery30.jpg', caption: '' },
  ],

  // Foto besar di hero & bagian penutup
  heroPhoto: '/images/hero.jpg',
  closingPhoto: '/images/closing.jpg',

  // Background parallax di section "Intro" (di atas nama kedua mempelai)
  introBackground: '/images/intro-bg.jpg',
  // Background parallax di section "Acara Pernikahan" (Akad & Resepsi)
  eventsBackground: '/images/events-bg.jpg',

  // Nomor WhatsApp tujuan kirim ucapan/doa & konfirmasi kehadiran.
  // Format: kode negara tanpa tanda + atau 0 di depan. Contoh 0812-xxxx jadi 62812xxxx
  whatsapp: {
    groom: '6288226668254',
    bride: '6288226668254',
  },

  // Info hadiah digital (boleh isi salah satu atau semua)
  gift: {
    note: 'Doa restu Anda adalah hadiah terindah bagi kami. Namun jika ingin memberi tanda kasih, kami dengan senang hati menerimanya melalui:',
    banks: [
      { bank: 'BCA', number: '1234567890', name: 'Natasya' },
      { bank: 'Mandiri', number: '0987654321', name: 'Riko' },
    ],
    // Diisi dengan link e-wallet/QRIS/halaman donasi milik Anda. Akan dirender jadi kode QR otomatis.
    qrisUrl: 'https://example.com/qris-pernikahan-fernanda-gustian',
  },

  // File musik latar - taruh file mp3 Anda sendiri di /public/audio/song.mp3
  song: {
    src: '/audio/song.mp3',
    title: 'Bermuara',
  },

  hashtag: '#DesignArchiveWedding',
};
