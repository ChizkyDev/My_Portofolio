export default Image;

import Tools1 from "/tools/vscode.png";
import Tools2 from "/tools/reactjs.png";
import Tools4 from "/tools/tailwind.png";
import Tools5 from "/tools/bootstrap.png";
import Tools6 from "/tools/js.png";
import Tools8 from "/tools/github.png";
import Tools10 from "/tools/canva.png";
import Tools11 from "/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 7,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 8,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/proyek/Project1.jpg";
import Proyek2 from "/proyek/Project2.jpg";
import Proyek3 from "/proyek/Project3.jpg";
import Proyek4 from "/proyek/Project4.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website 17 Agustus",
    desk: "Website peringatan Hari Kemerdekaan Indonesia. Dirancang dengan tema patriotik, menampilkan animasi bendera, galeri, dan event khusus 17 Agustus.",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Toko Kue",
    desk: "Platform e-commerce untuk toko kue lokal (Chizky Cakes Bakery). Menampilkan katalog produk, keranjang belanja, dan sistem pemesanan online.",
    tools: ["HTML", "CSS", "Bootstrap"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Dekoor",
    desk: "Website portofolio dan katalog produk furnitur serta desain interior. Menyediakan fitur pencarian produk dan detail sofa yang interaktif.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Sultan Audio",
    desk: "Website profil bisnis profesional untuk jasa penyewaan sound system. Menyajikan informasi layanan, galeri, kontak, dan daftar klien.",
    tools: ["HTML", "TailwindCSS", "Javascript"],
    dad: "500",
  },
];
