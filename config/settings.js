/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "271102"; // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Viranty Nur Rhamadhanty"; // ← GANTI NAMA

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title: "masa ini, nanti, dan masa indah lainnya", // ← GANTI JUDUL LAGU
    artist: "nuca", // ← GANTI NAMA ARTIS
    src: "assets/music/song1.mp3", //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover: "assets/music/song1.jpeg", //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0, // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "One smile from you can fix my whole day." }, // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "You're the reason my heart feels so full." },
  { file: "img3.jpeg", caption: "Every second with you is my favorite." },
  {
    file: "img4.jpeg",
    caption: "Some people search for happiness, I found mine in you.",
  },
  {
    file: "img5.jpeg",
    caption: "You turned my ordinary life into something beautiful.",
  },
  {
    file: "img6.jpeg",
    caption: "Hours feel like minutes whenever I'm by your side.",
  },
  {
    file: "img7.jpeg",
    caption: "If I could relive a moment, I'd choose us every time.",
  },
  { file: "img8.jpeg", caption: "Still my favorite person, always. " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "I wanted to send this the way old sailors used to send word home — sealed up, set adrift, and trusted to find its way to you.",
  "Today is all about you—the day you’ve been waiting for, dan tentunya yang aku tunggu-tunggu juga as your man. On this special day, I just want you to feel safe, at peace, truly happy, dan bebas dari heavy vibes yang nggak seharusnya kamu rasain, way better than the past years you told me about.",
  "Honestly, I’m always grateful and proud to have you. Aku selalu ngerasa dicintai dan diperhatiin. Even though our journey has been a total rollercoaster with plenty of rough patches and big fights, kamu selalu punya cara buat bikin kita find our way back to each other.",
  "Wishing you nothing but good things and genuine people who always hype up your dreams and keep your energy high, sampai tercapai semua hal yang kamu mau di dunia ini.",
  "Makasih sudah jadi bagian terpenting di hidupku. Moving forward, I hope I always get to ride by your side. May you always be surrounded by people who love you for real, supaya kamu tahu kalau kamu sangat layak untuk dicintai dan dapetin cinta sebanyak-banyaknya.",
  "Happy Birthday, my favorite person",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year: "Chapter One",
    title: "Where It All Started",
    text: "That moment when everything just clicked and suddenly made sense.",
  },
  {
    depth: "8m",
    year: "Chapter Two",
    title: "The Quiet Days",
    text: "Just you, me, and those simple moments that ended up meaning everything.",
  },
  {
    depth: "16m",
    year: "Chapter Three",
    title: "Through the Storms",
    text: "We've had our rough days, but honestly, we always found our way back.",
  },
  {
    depth: "24m",
    year: "Chapter Four",
    title: "Finding the Light",
    text: "You're literally the brightest part of my journey, even in the deepest waters.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  {
    icon: "wave",
    text: "May this year bring you the calmness of the ocean and the depth of your kindness.",
  },
  {
    icon: "shell",
    text: "Hope your days are as bright as the sun on the water, and your nights as peaceful as the receding tide.",
  },
  {
    icon: "star",
    text: "May every little wish of yours arrive right when you need it the most.",
  },
  {
    icon: "compass",
    text: "Wherever this year takes you, I hope you always find your way back to the people who adore you.",
  },
  {
    icon: "anchor",
    text: "Stay grounded, stay grateful, and honestly, just stay as beautiful as you are right now.",
  },
  {
    icon: "heart",
    text: "Happy birthday — cheers to another year of memories totally worth keeping.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
  const WHATSAPP_NUMBER = "6281234567890"; // ← GANTI NOMOR WA YANG ORDER
  const WHATSAPP_MESSAGE =
    "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

  window.OCEAN_SETTINGS = {
    recipientName: String(RECIPIENT_NAME),
    galleryPhotos: GALLERY_PHOTOS,
    musicTracks: MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories: MEMORIES,
    wishes: WISHES,
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappMessage: WHATSAPP_MESSAGE,
  };
})(window);
