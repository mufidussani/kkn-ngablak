import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/umkm/natural.jpeg";
import gambar2 from "../../assets/umkm/asalan.jpeg";
import gambar3 from "../../assets/umkm/honey.jpeg";
import gambar4 from "../../assets/umkm/telomoyo.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Umkm3 = () => {
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
          className="relative items-center text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-light-green font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
                Kopi Terbaik dari Kaki Gunung
                <div className="text-light-green sm:text-base text-center mr-10 text">
                  Kopi Sulur siap menemani liburan Anda dengan aroma mengikat
                  dan kenikmatan yang tak terlupakan
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-light-green sm:text-base xl:text-xl text-center mb-10">
            Telusuri lebih lanjut tentang apa yang kami tawarkan.
          </div> */}
        </div>
        <div className="container flex-col xl:flex-row flex items-center">
          <div
            className="relative container flex-col xl:flex-row flex items-center text-white text-sm"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <div className="transform hover:transition-all hover:scale-[105%] pb-4 xl:pb-0 px-4">
              <img className="" src={gambar1} alt="rectangle"></img>
              <div className="text-light-green sm:text-base text-center mr-11">
                Natural
              </div>
            </div>
            <div className="transform hover:transition-all hover:scale-[105%] pb-4 xl:pb-0 px-4">
              <img className="" src={gambar2} alt="rectangle"></img>
              <div className="text-light-green sm:text-base text-center mr-11">
                Asalan
              </div>
            </div>
          </div>
          <div
            className="relative container flex-col xl:flex-row flex items-center text-white text-sm"
            data-aos-duration="1000"
            data-aos="fade-left"
          >
            <div className="transform hover:transition-all hover:scale-[105%] pb-4 xl:pb-0 px-4">
              <img className="" src={gambar3} alt="rectangle"></img>
              <div className="text-light-green sm:text-base text-center mr-11">
                Honey
              </div>
            </div>
            <div className="transform hover:transition-all hover:scale-[105%] pb-4 xl:pb-0 px-4">
              <img className="" src={gambar4} alt="rectangle"></img>
              <div className="text-light-green sm:text-base text-center mr-11">
                Telomoyo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Umkm3;
