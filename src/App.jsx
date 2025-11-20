import { useState } from "react";
import Andra from "./Andra.jpg";
import { listTools, listProyek } from "./data";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi! Saya Wahyu Andra Ardiyansyah
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya seorang pengembang web yang memiliki ketertarikan pada
            teknologi front-end, khususnya React dan TailwindCSS. Saya senang
            membangun website yang tidak hanya fungsional, tetapi juga memiliki
            tampilan modern dan responsif.
          </p>
          <div className="flex items-center justify-start gap-1 mt-6 mb-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/wahyu.andraa?igsh=aWR6enNiZzJ3NTY1"
              target="blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary text-slate-300 hover:bg-primary hover:text-blue-600"
            >
              <svg
                role="img"
                width="20"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/@andrawahyu-p5p?si=TLGUoFQSwwp6OL19"
              target="blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-blue-600"
            >
              <svg
                role="img"
                width="20"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/62895342783700"
              target="blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-blue-600"
            >
              <svg
                role="img"
                width="20"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@ch1zkyy?_r=1&_t=ZS-91Sjt2itvL5"
              target="blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-blue-600"
            >
              <svg
                role="img"
                width="20"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>TikTok</title>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/ChizkyDev"
              target="blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-blue-600"
            >
              <svg
                role="img"
                width="20"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Downdload CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={Andra}
          alt="Andra Logo"
          className="w-115 h-120 md:ml-auto animate__animated animate__fadeInUp animate__delay-1s"
          loading="lazy"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10 " id="tentang">
        <div className="">
          <div className="grid md:grid-cols-1 gap-6 xl:grid-cols-2 items-start">
            <div className="flex gap-3">
              <img
                src="/foto/a1.jpg"
                alt="Foto 1"
                className="w-30 h-100 rounded-md object-cover"
                loading="lazy"
              />
              <img
                src="/foto/a2.jpg"
                alt="Foto 2"
                className="w-30 h-100 rounded-md object-cover"
                loading="lazy"
              />
              <img
                src="/foto/a3.jpg"
                alt="Foto 3"
                className="w-full h-100 rounded-md object-cover "
                loading="lazy"
              />
            </div>
            <div className="p-7 bg-zinc-800 rounded-lg w-full h-full">
              <div className="text-center mb-5 text-3xl font-bold">
                About <span className="text-blue-600">Me!</span>
              </div>
              <p className="text-base/loose mb-10">
                Halo, saya wahyu andra ardiyansyah Seorang yang suka belajar hal
                baru, terutama di bidang teknologi dan kreatif.Saya percaya
                bahwa setiap project adalah langkah untuk berkembang, bukan
                hanya soal hasil, tapi juga proses di baliknya. Portofolio ini
                mencerminan perjalanan saya dalam belajar dan berkarya.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div>
                    <h1 className="text-4xl mb-1 text-blue-600">4</h1>
                    <p>proyek selesai</p>
                  </div>
                  <div>
                    <h1 className="text-4xl mb-1 text-blue-600">1</h1>
                    <p>tahun belajar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold mb-8">Riwayat Pendidikan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <img
                src="/pendidikan/mi nurul huda.png"
                alt="MI Nurul Huda"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <hr className="border-zinc-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">
                MI Nurul Huda II
              </h3>
              <p className="text-base opacity-75 text-left">
                Sekolah dasar Islam tempat saya memulai pendidikan formal,
                belajar dasar-dasar agama dan pengetahuan umum.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <img
                src="/pendidikan/Mts maarif.png"
                alt="MTS Maarif Sukorejo"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <hr className="border-zinc-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">
                MTS Maarif Sukorejo
              </h3>
              <p className="text-base opacity-75 text-left">
                Madrasah Tsanawiyah yang memperdalam pengetahuan agama Islam dan
                mata pelajaran umum, membentuk karakter dan disiplin.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <img
                src="/pendidikan/Logo SMKN 1 PURWOSARI.png"
                alt="SMKN 1 Purwosari"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <hr className="border-zinc-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">
                SMKN 1 Purwosari
              </h3>
              <p className="text-base opacity-75 text-left">
                Sekolah Menengah Kejuruan fokus pada keterampilan teknis,
                khususnya di bidang teknologi informasi dan komputer.
              </p>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa tools yang dipakai untuk pembuatan Website
            ataupu desaign{" "}
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="text-blue-600">My</span> Project
        </h1>
        <p
          className="text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini Kumpulan proyek web dan aplikasi <br /> yang saya kerjakan
          menggunakan berbagai teknologi modern.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-2 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href=""
                    className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          <div>
            <h1
              className="text-4xl mb-2 font-bold"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Let's Work Together
            </h1>
            <p
              className="text-base/loose mb-10 opacity-50 text-slate-400"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Halo! Saya sangat antusias untuk membahas proyek kreatif
              berikutnya. Jika Anda mencari seorang developer atau designer yang
              siap memberikan solusi terbaik, mari kita terhubung. Silakan
              kirimkan detail proyek Anda, dan saya akan merespons dalam waktu
              24 jam.
            </p>
            <div className="flex item-start gap-4 mb-6">
              <i className="bx bxs-phone text-blue-600 text-3xl bg-[#323946] p-3 rounded-lg flex items-center justify-center"></i>
              <div className="">
                <p className="text-blue-600 font-semibold">Phone</p>
                <p>(+62) 895 3427 83700 </p>
              </div>
            </div>
            <div className="flex item-start gap-4 mb-6">
              <i className="bx bxs-envelope text-blue-600 text-3xl bg-[#323946] p-3 rounded-lg flex items-center justify-center"></i>
              <div className="">
                <p className="text-blue-600 font-semibold">Email</p>
                <p>andrawahyu891@gmail.com</p>
              </div>
            </div>
            <div className="flex item-start gap-4 mb-6">
              <i className="bx bxs-map text-blue-600 text-3xl bg-[#323946] p-3 rounded-lg flex items-center justify-center"></i>
              <div className="">
                <p className="text-blue-600 font-semibold">Map</p>
                <p>Jawa timur, pasuruan</p>
              </div>
            </div>
          </div>
          <form
            action="https://formsubmit.co/andrawahyu891@email.com"
            method="POST"
            className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md "
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="text-center mb-10 text-3xl font-bold">
              Contact <span className="text-blue-600">Me!</span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="nama"
                    placeholder="Full Name"
                    className="border border-zinc-500 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="border border-zinc-500 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Phone Number"
                    className="border border-zinc-500 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Subject"
                    className="border border-zinc-500 p-2 rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="7"
                  placeholder="Your Message"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Kontak */}
      <Footer />
    </>
  );
}

export default App;
