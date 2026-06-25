# Undangan Pernikahan Digital — Natasya & Riko

Website undangan digital satu halaman dengan tema biru & putih, dibuat dengan
Next.js 14 (App Router), Tailwind CSS, dan Framer Motion. Tampilan dibuka
dengan sampul bergaya envelope yang bisa di-tap, lalu membuka seluruh isi
undangan dengan animasi.

## Fitur

- Sampul "buka undangan" dengan animasi envelope (tap untuk membuka)
- Nama tamu otomatis dari link, contoh: `?to=Budi+Santoso`
- Hitung mundur (countdown) menuju hari pernikahan
- Detail acara Akad & Resepsi + tombol buka lokasi Google Maps
- Galeri foto dengan lightbox
- Rangkaian acara (itinerary) bergaya timeline
- Dress code dengan palet warna
- Ucapan & konfirmasi kehadiran (RSVP) yang langsung terkirim ke WhatsApp
  mempelai pria/wanita
- Hadiah digital: kartu rekening dengan tombol salin + kode QR otomatis
- Tombol musik latar mengambang (play/pause)
- Sudah responsif untuk HP & siap deploy ke Vercel

## 1. Persiapan

Pastikan Node.js versi 18 atau lebih baru sudah terpasang di komputer Anda.
Lalu di folder project ini, jalankan:

```bash
npm install
```

## 2. Edit data undangan Anda

**Cukup edit satu file ini:** `lib/data.js`

Di sana Anda bisa mengganti:
- Nama mempelai, nama orang tua
- Tanggal & jam acara, lokasi akad/resepsi, link Google Maps
- Rangkaian acara (itinerary)
- Nomor WhatsApp tujuan ucapan/konfirmasi
- Info rekening & link QRIS untuk hadiah digital
- Kutipan/ayat pembuka
- Path foto & judul lagu

## 3. Tambahkan foto & musik Anda

- Taruh foto-foto Anda di folder `public/images/` dengan nama file yang
  sesuai dengan yang ditulis di `lib/data.js` (lihat `public/images/README.md`).
  Jika foto belum ditambahkan, halaman akan tetap tampil rapi dengan
  placeholder, jadi aman untuk dicoba dulu sebelum foto siap.
- Taruh file musik latar Anda di `public/audio/song.mp3` (opsional). Pastikan
  Anda punya izin/lisensi untuk lagu tersebut.

## 4. Jalankan di komputer (preview lokal)

```bash
npm run dev
```

Buka `http://localhost:3000` di browser. Untuk mencoba dengan nama tamu,
buka misalnya `http://localhost:3000?to=Budi+Santoso`.

## 5. Deploy ke Vercel

Cara paling mudah — lewat GitHub:

1. Buat repository baru di GitHub, lalu upload/push seluruh folder project ini.
   ```bash
   git init
   git add .
   git commit -m "Undangan digital Fernanda & Gustian"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_ANDA>
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → login dengan akun GitHub.
3. Klik **Add New → Project**, pilih repository yang baru Anda push.
4. Vercel otomatis mendeteksi ini project Next.js — biarkan semua setting
   default, lalu klik **Deploy**.
5. Tunggu 1-2 menit, website Anda akan online dengan link `nama-project.vercel.app`.

Alternatif tanpa GitHub (lewat terminal):

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Membagikan undangan dengan nama tamu otomatis

Setelah online, bagikan link dengan tambahan `?to=Nama+Tamu` di akhir, contoh:

```
https://undangan-anda.vercel.app?to=Budi+Santoso
```

Nama tersebut akan otomatis muncul di sampul undangan.

## Struktur folder

```
app/                  -> entry point Next.js (layout, halaman, global css)
components/           -> semua bagian/section undangan (Cover, Hero, dst)
lib/data.js           -> SEMUA data yang perlu Anda edit
lib/utils.js          -> fungsi bantu (link WhatsApp, dll)
public/images/        -> tempat foto Anda
public/audio/         -> tempat musik latar Anda
```

## Mengubah warna

Palet warna biru & putih diatur di `tailwind.config.js` pada bagian `colors`
(`ink`, `ocean`, `sky`, `pearl`, `cloud`). Ubah nilai hex di sana untuk
menyesuaikan dengan selera Anda.
