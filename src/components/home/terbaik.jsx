import { useState, React, Component } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/home/makam.png";
import gambar2 from "../../assets/home/basecamp.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "./tentang.css";

const Terbaik = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  // const translateLogo = {
  // 	transform: isDesktop ? "translate(30%, 0%)" : "translate(0%, 0%)",
  // };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 4,
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

  return (
    <div className="items-center bg-[#1E1E1E] pb-16 pt-2 xl:pt-10 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-Satisfy text-2xl xl:text-4xl font-bold mb-1 text-center">
                Terbaik dari Girirejo
              </div>
            </div>
          </div>
          <div className="sm:text-base xl:text-xl text-center mb-10">
            Telusuri lebih lanjut tentang apa yang kami tawarkan.
          </div>
          <Slider {...settings} className="">
            <div className="px-4">
              {/* <h3>1</h3> */}
              {/* <div
                className="bg-gradient-to-r from-sky-500 to-indigo-500"
                style={{
                  backgroundImage: `url(${gambar1})`,
                }}
              > */}
              {/* <p>aaa</p> */}
              {/* </div> */}
              <img className="rounded-2xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="px-4">
              {/* <h3>2</h3> */}
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="px-4">
              {/* <h3>2</h3> */}
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="px-4">
              {/* <h3>2</h3> */}
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Terbaik;
