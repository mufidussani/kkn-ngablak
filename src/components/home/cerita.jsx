import { useState, React, Component } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/home/terbaik/puncak.png";
import gambar2 from "../../assets/home/terbaik/view 2.png";
import gambar3 from "../../assets/home/terbaik/view 3.png";
import gambar4 from "../../assets/home/terbaik/view 4.png";
import gambar5 from "../../assets/home/terbaik/view 5.png";
import gambar6 from "../../assets/home/terbaik/view 6.png";
import gambar7 from "../../assets/home/terbaik/view 7.png";
import gambar8 from "../../assets/home/terbaik/view 8.png";
import gambar9 from "../../assets/home/terbaik/view.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Terbaik = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  var settings = {
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: -3000,
    autoplay: true,
    pauseOnFocus: false,
    cssEase: "linear",
    slidesToShow: 4,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div
      className="items-center bg-[#545B77] pb-16 pt-6 xl:pt-10"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-offset="300"
    >
      <div className="px-8">
        <div className="relative items-center text-white text-sm">
          <div className="pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-[#FFFDEC] text-xl xl:text-3xl text-center mb-6">
                Girirejo selalu punya cerita,
                <br />
                <div className="font-black mt-1">Ukir ceritamu di sini.</div>
              </div>
            </div>
          </div>
          {/* <div className="text-[#545B77] sm:text-base xl:text-xl text-center mb-10">
            Telusuri lebih lanjut tentang apa yang kami tawarkan.
          </div> */}
        </div>
      </div>

      <Slider {...settings} className="">
        <div className="px-4">
          <img className="rounded-2xl" src={gambar1} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar3} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar4} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar5} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar6} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar7} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar8} alt="rectangle"></img>
        </div>
        <div className="px-4">
          <img className="rounded-2xl" src={gambar9} alt="rectangle"></img>
        </div>
      </Slider>
    </div>
  );
};

export default Terbaik;
