import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/gogik_a.jpg";
import gambar2 from "../../assets/agrowisata/gogik_b.jpg";
import gambar3 from "../../assets/agrowisata/gogik_c.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata4 = () => {
  var settings = {
    dots: false,
    // arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-[#545B77] py-10 xl:pt-12 xl:pb-12 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white"
          id="gogik"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-[#FFFDEC] font-Satisfy text-2xl sm:text-3xl text-center xl:text-4xl mb-3">
                Rute Pendakian Gunung Andong
                <br />
                Via Gogik
              </div>
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 xl:hidden">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div>
              <p className="text-justify xl:hidden">
                Pendakian Jalur Gogik merupakan jalur yang paling baru dari dua
                jalur yang lainnya. Jalur yang masih baru ini membuat jalur Via
                Gogik memiliki keunggulan karena masih asri. Jalur Via Gogik ini
                berada di Dusun Gogik yang memiliki basecamp di tengah-tengah
                pemukiman warga.
                <br />
                Informasi lengkap mengenai pendakian jalur Gogik bisa dilihat di
                akun Instagram resmi @explore_andong
                <br />
                Fasilitas:
                <br />
                <ul class="list-disc list-inside">
                  <li>Tempat istirahat</li>
                  <li>Dekat dengan warung/toko warga lokal</li>
                  <li>Mushola</li>
                  <li>Kamar mandi yang berada di mushola</li>
                </ul>
              </p>
              <div className="items-center justify-center flex justify-items-center xl:hidden">
                <Link to="/agrowisata/gogik">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    class="mt-4 rounded bg-[#FFFDEC] py-2 px-6 font-Montserrat text-lg md text-dark-blue transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
                  >
                    Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-2 mt-3 gap-3 pt-4">
            <div className="xl:row-span-1 xl:col-span-2 hidden xl:block text-xl text-justify">
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div>
              {/* Rute ini menjadi tempat bagi anda yang menyukai tantangan. Rute
              ini memiliki konsep trek sengaja dibuat sealami mungkin. trek ini
              diperuntukan bagi pendaki yang ingin mencoba pengalaman mendaki
              tanpa mengikuti jalur yang telah dibuka sehingga para pendaki
              dapat meningkatkan kemampuan mendakinya.
              <br />
              Melewati jalur ini, wisatawan atau pendaki dapat sembari belajar
              untuk mengetahui jenis dan informasi tanaman yang ada di sepanjang
              jalur pendakian. Untuk dapat mengetahui berbagai jenis tanaman
              yang ada, kunjungi melalui tombol berikut.
              <br /> */}
              Pendakian Jalur Gogik merupakan jalur yang paling baru dari dua
              jalur yang lainnya. Jalur yang masih baru ini membuat jalur Via
              Gogik memiliki keunggulan karena masih asri. Jalur Via Gogik ini
              berada di Dusun Gogik yang memiliki basecamp di tengah-tengah
              pemukiman warga.
              <br />
              Informasi lengkap mengenai pendakian jalur Gogik bisa dilihat di
              akun Instagram resmi @explore_andong
              <br />
              Fasilitas:
              <br />
              <ul class="list-disc list-inside">
                <li>Tempat istirahat</li>
                <li>Dekat dengan warung/toko warga lokal</li>
                <li>Mushola</li>
                <li>Kamar mandi yang berada di mushola</li>
              </ul>
              <div className="flex justify-center">
                <Link to="/agrowisata/gogik">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    class="mt-4 rounded bg-[#FFFDEC] py-2 px-6 font-Montserrat text-lg md text-dark-blue transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm mb-4"
                  >
                    Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center transform xl:pb-0 col-span-2 md:col-span-2 items-center ">
              <img
                className="rounded-xl object-cover xl:h-[60vh] w-full"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
            <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-1 xl:col-span-1">
              <img
                className="rounded-xl object-cover xl:h-[60vh] w-full"
                src={gambar3}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center transform xl:pb-0 md:col-span-1">
              <img
                className="rounded-xl object-cover xl:h-[60vh] w-full"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata4;
