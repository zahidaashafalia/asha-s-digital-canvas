# Portofolio Futuristik Zahida Asha Falia

## Ringkasan
Membangun portofolio satu halaman yang premium, responsif, dan interaktif dengan palet burgundy–plum gelap, aksen pink/magenta, foto Asha, serta navigasi yang menghubungkan seluruh bagian.

## Yang akan dibuat
- Navbar glassmorphism dengan logo A, indikator bagian aktif, smooth scrolling, dan menu mobile.
- Halaman pembuka dengan perkenalan Asha, dua tombol aksi, foto profil bercahaya dengan efek tilt, partikel, bintang, dan bentuk abstrak ringan.
- About dan kartu profil interaktif berisi identitas yang diberikan.
- Skills berbentuk marquee logo interaktif dengan detail saat hover/klik, dipisahkan jelas dari “Yang Pernah Saya Pelajari”.
- Timeline Education dan Experience dengan animasi saat masuk viewport.
- Tiga proyek dalam kartu besar bermockup, efek tilt, serta modal detail yang berfungsi.
- Bagian Beyond Technology dan Contact dengan tautan WhatsApp, email, GitHub, LinkedIn, serta Instagram yang aktif.
- Tampilan desktop, tablet, dan mobile yang rapi; animasi dikurangi otomatis bagi pengguna yang memilih reduced motion.

## Arah visual
- Latar hitam–burgundy–plum berlapis, glow pink/magenta, tekstur bintang halus, dan panel kaca.
- Heading serif elegan dipadukan dengan sans-serif modern.
- Gerak halus dan terukur: parallax ringan, floating, reveal saat scroll, magnetic buttons, serta tilt 3D tanpa menambah beban 3D library.
- Foto unggahan dipakai sebagai foto profil dan disimpan melalui asset project agar mudah diganti.

## Detail teknis
- Implementasi React/TanStack satu halaman dengan state untuk menu mobile, section aktif, skill terpilih, dan modal proyek.
- Interaksi pointer dibuat dengan CSS transforms dan event React; tidak memakai Three.js agar tetap cepat di perangkat mobile.
- Metadata halaman khusus portofolio ditambahkan untuk judul, deskripsi, Open Graph, dan Twitter card.
- Validasi melalui build otomatis serta pengujian tampilan desktop dan mobile di browser.
