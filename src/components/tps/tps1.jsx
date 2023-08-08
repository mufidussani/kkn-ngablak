import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/tps/tps2.jpg";
import gambar2 from "../../assets/tps/tps1.jpg";
import gambar3 from "../../assets/agrowisata/Sawit_Sm.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Tps1 = () => {
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
      className="items-center bg-basic pt-20 pb-6 xl:pt-20 xl:pb-12 px-8 xl:px-24"
      id="sawit"
    >
      <div className="">
        <div
          className="relative items-center text-light-blue"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-light-blue font-Satisfy text-2xl sm:text-3xl text-center xl:text-4xl mb-3">
                Tempat Pengelola Sampah (TPS) Giri Mulya
                <br />
              </div>
            </div>
          </div>
          <div className="container grid auto-cols-max grid-cols-2 xl:grid-cols-2 xl:pt-2 gap-3">
            <div className="flex justify-center transform xl:pb-0 xl:row-span-1 col-span-1 xl:h-[40vh] xl:col-span-1">
              <img
                className="rounded-xl object-cover w-full"
                src={gambar2}
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
            <div className="col-span-1 hidden xl:inline-block -mt-32 text-sm md:text-xl text-justify bg-light-blue p-8 text-basic rounded-2xl">
              TPS 3R Giri Mulya adalah Kelompok Pemanfaat dan Penerima (KPP)
              Tempat Pengelolaan Sampah di bawah naungan Badan Usaha Milik Desa
              Girirejo (Bumdes). TPS 3R Giri Mulya memiliki peran penting dalam
              menjaga, mengelola, dan mengolah sampah desa yang terorganisir
              dengan baik
            </div>
          </div>
          <div className="xl:row-span-1 text-sm mt-4 text-justify xl:hidden p-4 rounded-xl text-basic bg-light-blue">
            TPS 3R Giri Mulya adalah Kelompok Pemanfaat dan Penerima (KPP)
            Tempat Pengelolaan Sampah di bawah naungan Badan Usaha Milik Desa
            Girirejo (Bumdes). TPS 3R Giri Mulya memiliki peran penting dalam
            menjaga, mengelola, dan mengolah sampah desa yang terorganisir
            dengan baik
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tps1;
