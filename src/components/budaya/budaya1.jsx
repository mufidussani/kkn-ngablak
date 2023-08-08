import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/gogik_a.jpg";
import gambar2 from "../../assets/budaya/andong_jinawi.png";
import gambar3 from "../../assets/agrowisata/gogik_c.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Budaya1 = () => {
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
    <div className="items-center bg-basic pt-24 pb-12 px-8 xl:px-24">
      <div className="">
        <div
          className="relative text-light-blue items-center text-base"
          id="gogik"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-light-blue font-Satisfy text-2xl sm:text-3xl text-center xl:text-4xl mb-3">
                Wisata Budaya
              </div>
              <div className="font-bold text-xl text-left mb-2 xl:hidden">
                Andong Jinawi
              </div>
              {/* <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 xl:hidden">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div> */}
              <p className="text-justify xl:hidden">
                Andong Jinawi merupakan kelompok kesenian yang berbasis di dusun
                Mantran Wetan Desa Girirejo yang didirikan pada 1983 oleh
                swadaya masyarakat dusun Mantran Wetan. Saat ini sanggar Andong
                Jinawi memiliki kurang lebih 80 anggota yang diketuai oleh Bapak
                Padi dan aktif mengikuti berbagai acara seperti festival Tahunan
                5 Gunung.
                <br />
                Sanggar Andong Jinawi memiliki tiga divisi di dalammnya yaitu
                divisi Tari Jaran Kepang Papat yang memiliki 25 anggota tetap
                dan keanggotaan ini diwariskan secara turun-temurun selama empat
                generasi. Kemudian divisi Beksa Turangga Muda yang di isi oleh
                anak muda dan Sekar Ngeksiganda yang merupakan sendra tari (seni
                drama tari).
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-2 mt-3 gap-3 xl:gap-6 pt-4">
            <div className="xl:row-span-1 xl:col-span-1 hidden xl:block text-xl text-justify">
              {/* <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div> */}
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Andong Jinawi
              </div>
              Andong Jinawi merupakan kelompok kesenian yang berbasis di dusun
              Mantran Wetan Desa Girirejo yang didirikan pada 1983 oleh swadaya
              masyarakat dusun Mantran Wetan. Saat ini sanggar Andong Jinawi
              memiliki kurang lebih 80 anggota yang diketuai oleh Bapak Padi dan
              aktif mengikuti berbagai acara seperti festival Tahunan 5 Gunung.
              <br />
              Sanggar Andong Jinawi memiliki tiga divisi di dalammnya yaitu
              divisi Tari Jaran Kepang Papat yang memiliki 25 anggota tetap dan
              keanggotaan ini diwariskan secara turun-temurun selama empat
              generasi. Kemudian divisi Beksa Turangga Muda yang di isi oleh
              anak muda dan Sekar Ngeksiganda yang merupakan sendra tari (seni
              drama tari).
              {/* <div className="flex justify-center">
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
              </div> */}
            </div>
            <div className="flex justify-center transform col-span-2 xl:col-span-1 xl:pb-0 items-center ">
              <img
                className="rounded-xl object-cover xl:h-[50vh] w-full"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
            {/* <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:col-span-1">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budaya1;
