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
    parents: 'Putri dari Bapak Agus Margono & Ibu Sri Murwatiningsih',
    instagram: 'natasya.fitriya',
    photo: '/images/groom.jpg',
  },

  // Format ISO, dipakai untuk hitung mundur.
  weddingDateISO: '2026-11-11T08:00:00+07:00',
  weddingDateLabel: 'Rabu, 11 November 2026',

  // Kutipan / ayat pembuka
  quote: {
    text: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan agar kamu merasa tenang bersamanya, dan Dia menjadikan di antara kamu rasa kasih dan sayang.',
    source: 'QS. Ar-Rum: 21',
  },

  // Acara akad / pemberkatan
  akad: {
    title: 'Akad Nikah',
    date: 'Rabu, 11 November 2026',
    time: '08.00 WIB - Selesai',
    place: 'Rumah Pengantin Perempuan',
    address: 'Jl. Wahyu asri Utara || No.195',
    mapsUrl: 'https://maps.app.goo.gl/PTWoWJLx6WNTGA6m7',
  },

  // Resepsi
  resepsi: {
    title: 'Resepsi Pernikahan',
    date: 'Rabu, 11 November 2026',
    time: '12.00 WIB - Selesai',
    place: 'Rumah Pengantin Perempuan',
    address: 'Jl. Wahyu asri Utara || No.195',
    mapsUrl: 'https://maps.app.goo.gl/PTWoWJLx6WNTGA6m7',
  },

  // Perjalanan Kami
  loveStory: [
    { title: 'Awal Bertemu', desc: 'Saat Praktik Kerja Lapangan/PKL di kantor pemerintah mas Riko mengantar surat.', icon: 'sparkles' },
    {
      title: 'Menjalin Hubungan',
      desc: 'Tukar WA untuk menghubungi bahwa surat tersebut dari mana dan bertujuan untuk apa. Karena aku anak magang jadi tidak tahu tujuannya. Dari situ mulai kenal satu minggu kemudian jadian',
      icon: 'heart',
    },
    { title: 'Lamaran', desc: 'Sebelumnya masih tetembung karena jarak jauh Blora dan Semarang jadi lamarannya di H-1 sebelum lamaran', icon: 'gem' },
    { title: 'Menikah', desc: 'Mempelai pria dan wanita resmi menjadi suami istri di hadapan Tuhan dan para tamu undangan.', icon: 'church' },
  ],

  // Galeri foto - taruh file di /public/images/ lalu tulis nama filenya di sini.
  gallery: [
    { src: '/images/gallery1.JPEG', caption: '' },
    { src: '/images/gallery2.JPEG', caption: '' },
    { src: '/images/gallery3.JPEG', caption: '' },
    { src: '/images/gallery4.JPEG', caption: '' },
    { src: '/images/gallery5.JPEG', caption: '' },
    { src: '/images/gallery6.JPEG', caption: '' },
    { src: '/images/gallery7.JPEG', caption: '' },
    { src: '/images/gallery8.JPEG', caption: '' },
    { src: '/images/gallery9.JPEG', caption: '' },
    { src: '/images/gallery10.JPEG', caption: '' },
    { src: '/images/gallery11.JPEG', caption: '' },
    { src: '/images/gallery12.JPEG', caption: '' },
    { src: '/images/gallery13.JPEG', caption: '' },
    { src: '/images/gallery14.JPEG', caption: '' },
    { src: '/images/gallery15.JPEG', caption: '' },
    { src: '/images/gallery16.JPEG', caption: '' },
    { src: '/images/gallery17.JPEG', caption: '' },
    { src: '/images/gallery18.JPEG', caption: '' },
    { src: '/images/gallery19.JPEG', caption: '' },
    { src: '/images/gallery20.JPEG', caption: '' },
    { src: '/images/gallery21.JPEG', caption: '' },
    { src: '/images/gallery22.JPEG', caption: '' },
    { src: '/images/gallery23.JPEG', caption: '' },
    { src: '/images/gallery24.JPEG', caption: '' },
    { src: '/images/gallery25.JPEG', caption: '' },
    { src: '/images/gallery26.JPEG', caption: '' },
    { src: '/images/gallery27.JPEG', caption: '' },
    { src: '/images/gallery28.JPEG', caption: '' },
    { src: '/images/gallery29.JPEG', caption: '' },
    { src: '/images/gallery30.JPEG', caption: '' },
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
    groom: '62895414287803',
    bride: '6288226668254',
  },

  // Info hadiah digital (boleh isi salah satu atau semua)
  gift: {
    note: 'Doa restu Anda adalah hadiah terindah bagi kami. Namun jika ingin memberi tanda kasih, kami dengan senang hati menerimanya melalui:',
    banks: [
      { bank: 'BCA', number: '8716007133', name: 'Natasya' },
      { bank: 'Mandiri', number: '1840001043296', name: 'Riko' },
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
