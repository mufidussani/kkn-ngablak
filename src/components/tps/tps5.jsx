import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/tps/untung1.jpg";
import gambar2 from "../../assets/tps/untung2.jpg";
import gambar3 from "../../assets/tps/untung3.jpg";
import gambar4 from "../../assets/tps/untung4.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Tps5 = () => {
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
      className="items-center bg-basic pt-2 pb-10 xl:pb-12 px-8 xl:px-24"
      id="sawit"
    >
      <div className="">
        <div
          className="relative items-center text-light-blue text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-light-blue font-Satisfy text-2xl sm:text-3xl text-center xl:text-4xl mb-3">
                Keuntungan Berlangganan Jasa Layanan Pengambilan Sampah TPS 3R
                Giri Mulya
              </div>
            </div>
            {/* <div className="text-justify font-bold mb-3 text-base xl:text-xl">
              Pengelolaan Sampah
            </div> */}
            <p className="text-justify mb-3 text-sm md:text-base xl:text-2xl xl:mt-3 bg-light-blue text-basic p-2 rounded-xl xl:p-4 w-auto">
              1) Terjaganya kebersihan lingkungan setiap dusun
              <br />
              2) Biaya langganan yang murah, hanya Rp5000 setiap bulan
              <br />
              3) Pembuangan sampah rumah tangga menjadi lebih terorganisir
            </p>
          </div>
          <div className="container grid auto-cols-max grid-cols-2 xl:grid-cols-2 xl:pt-2 gap-3">
            <div className="flex justify-center transform xl:pb-0 xl:row-span-1 col-span-1 xl:h-[60vh] xl:col-span-1">
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
            <div className="flex justify-center transform xl:pb-0 xl:row-span-1 col-span-1 xl:h-[60vh] xl:col-span-1">
              <img
                className="rounded-xl object-cover w-full"
                src={gambar3}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center transform xl:pb-0 md:col-span-1">
              <img
                className="rounded-xl object-cover xl:h-[60vh] w-full"
                src={gambar4}
                alt="rectangle"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tps5;
