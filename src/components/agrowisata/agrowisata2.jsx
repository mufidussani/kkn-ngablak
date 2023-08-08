import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/Sawit_Top.jpg";
import gambar2 from "../../assets/agrowisata/Sawit_Big.jpg";
import gambar3 from "../../assets/agrowisata/Sawit_Sm.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata2 = () => {
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
    <div
      className="items-center bg-[#545B77] pt-20 pb-10 xl:pt-20 xl:pb-12 px-8 xl:px-24"
      id="sawit"
    >
      <div className="">
        <div
          className="relative items-center text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-[#FFFDEC] font-Satisfy text-2xl sm:text-3xl text-justify xl:text-4xl mb-3">
                Rute Pendakian Gunung Andong
                <br />
                Via Sawit
              </div>
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 text-basic mb-3 xl:hidden">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div>
              <p className="text-justify xl:hidden text-basic">
                Jalur sawit merupakan jalur pendakian yang ramai karena jalurnya
                yang ramah bagi pendaki. Jalur Sawit ini memiliki tiga pos yang
                setiap posnya terdapat tempat istirahat dan juga warga lokal
                yang berjualan makanan. Hal ini lah yang membuat pendakian via
                sawit menjadi favorit bagi para pendaki.
                <br />
                Informasi lengkap mengenai pendakian jalur Sawit bisa dilihat di
                akun Instagram resmi @infoandong
                <br />
                Fasilitas:
                <br />
                <ul class="list-disc list-inside">
                  <li>Basecamp sebagai tempat istirahat</li>
                  <li>Warung makan warga lokal</li>
                  <li>Masjid</li> <li>Toilet dan kamar mandi</li>
                  <li>Warung makan/toko kelontong warga lokal</li>
                  <li>Toko cendera mata</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-2 mt-3 gap-3 pt-4">
            <div className="xl:row-span-1 hidden xl:block text-xl text-justify text-basic">
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div>
              {/* Rute pendakian via Sawit sangat cocok bagi anda pendaki gunung
              pemula karena jalur ini telah disusun sedemikian rupa untuk
              memudahkan para pendaki untuk menikmati alam selama perjalanan
              untuk mencapai puncak Gunung Andong. Anda tidak perlu khawatir
              kelelahan karena terdapat beberapa pos yang menyediakan tempat
              beristirahat, toilet bahkan beberapa warung untuk mengisi energi. */}
              Jalur sawit merupakan jalur pendakian yang ramai karena jalurnya
              yang ramah bagi pendaki. Jalur Sawit ini memiliki tiga pos yang
              setiap posnya terdapat tempat istirahat dan juga warga lokal yang
              berjualan makanan. Hal ini lah yang membuat pendakian via sawit
              menjadi favorit bagi para pendaki.
              <br />
              Informasi lengkap mengenai pendakian jalur Sawit bisa dilihat di
              akun Instagram resmi @infoandong
              <br />
              Fasilitas:
              <br />
              <ul class="list-disc list-inside">
                <li>Basecamp sebagai tempat istirahat</li>
                <li>Warung makan warga lokal</li>
                <li>Masjid</li> <li>Toilet dan kamar mandi</li>
                <li>Warung makan/toko kelontong warga lokal</li>
                <li>Toko cendera mata</li>
              </ul>
            </div>
            <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:h-[70vh] xl:col-span-1">
              <img
                className="rounded-xl object-cover w-full"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center transform xl:pb-0 md:col-span-1">
              <img
                className="rounded-xl object-cover xl:h-[60vh] w-full"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center transform xl:pb-0 md:col-span-1 items-center ">
              <img
                className="rounded-xl xl:h-[60vh] w-full object-cover"
                src={gambar3}
                alt="rectangle"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata2;
