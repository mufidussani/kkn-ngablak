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

const Agrowisata1 = () => {
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
          // initialSlide: 2,
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
    <div className="items-center bg-[#FFFDEC] py-24 xl:py-24 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-[#545B77] font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
                Rute Pendakian Gunung Andong
              </div>
            </div>
          </div>
          {/* <div className="text-[#545B77] sm:text-base xl:text-xl text-center mb-10">
            Telusuri lebih lanjut tentang apa yang kami tawarkan.
          </div> */}
          <div className="container flex-col xl:flex-row flex items-center">
            <div className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4">
              <img className="" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4">
              {/* <h3>2</h3> */}
              <img className="" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4">
              {/* <h3>2</h3> */}
              <img className="" src={gambar3} alt="rectangle"></img>
            </div>
          </div>
        </div>
        <div className="text-justify flex-col flex xl:flex-row xl:mt-10 items-center justify-center">
          <div className="text-[#545B77] sm:text-base xl:text-xl xl:w-2/3 mr-10">
            Destinasi Gunung Andong memiliki tiga jalur pendakian.
            <br />
            Setiap jalur pendakian memiliki karakteristik yang berbeda. Dalam
            satu lokasi, anda bisa mendapatkan tiga pengalaman yang berbeda
            tergantung dari rute pendakian yang anda pilih.
          </div>
          <div className="xl:pb-0 items-center justify-center flex">
            {/* <h3>2</h3> */}
            <img className="" src={map_muncak} alt="rectangle"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata1;
