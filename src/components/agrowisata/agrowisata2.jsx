import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/via-gogik.png";
import gambar2 from "../../assets/agrowisata/via-pendem.png";
import gambar3 from "../../assets/agrowisata/via-sawit.png";
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
    <div className="items-center bg-[#545B77] py-12 xl:py-24 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-[#FFFDEC] font-Satisfy text-2xl sm:text-3xl xl:text-4xl text-center mb-3">
                Rute Pendakian Via Sawit
              </div>
              <p className="text-justify">
                Rute pendakian via Sawit sangat cocok bagi anda pendaki gunung
                pemula karena jalur ini telah disusun sedemikian rupa untuk
                memudahkan para pendaki untuk menikmati alam selama perjalanan
                untuk mencapai puncak Gunung Andong. Anda tidak perlu khawatir
                kelelahan karena terdapat beberapa pos yang menyediakan tempat
                beristirahat, toilet bahkan beberapa warung untuk mengisi
                energi.
              </p>
            </div>
          </div>
          <div className="container grid grid-rows-2 grid-flow-col justify-center items-center mt-3">
            <div className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4 col-span-2 xl:my-8">
              <img className="" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4 col-span-2">
              {/* <h3>2</h3> */}
              <img className="" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4 row-span-2 col-span-2">
              {/* <h3>2</h3> */}
              <img className="" src={gambar3} alt="rectangle"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata2;
