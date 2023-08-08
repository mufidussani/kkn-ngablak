import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/umkm/foto_basecamp 1.jpg";
import gambar2 from "../../assets/umkm/foto_basecamp 2.jpg";
import gambar3 from "../../assets/umkm/foto_basecamp 3.jpg";
import gambar4 from "../../assets/umkm/foto_basecamp 4.jpg";
import gambar5 from "../../assets/umkm/foto_basecamp 5.jpg";
import gambar6 from "../../assets/umkm/foto_basecamp 6.jpg";
// import gambar2 from "../../assets/umkm/foto_basecamp 2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Umkm5 = () => {
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
    <div className="items-center bg-[#FFFDEC] pt-24 pb-12 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-[#545B77] font-Satisfy text-3xl sm:text-3xl xl:text-5xl font-bold text-center mb-6">
                Basecamp
                <div className="text-[#545B77] text-base xl:text-xl text-center mt-2 font-normal">
                  Berbagai basecamp disediakan bagi Anda untuk beristirahat dan
                  menyiapkan perjalanan anda menuju puncak Gunung Andong.
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-6 xl:flex-row items-center justify-center gap-3">
            <div className=" xl:pb-0 content-center justify-self-center col-span-2 xl:col-span-3 xl:h-[60vh] h-[30vh] w-full flex justify-center items-center">
              <img
                className="rounded-xl h-full w-full object-cover items-center flex justify-center content-center justify-self-center"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
            <div className="xl:pb-0 content-center justify-self-center col-span-2 xl:col-span-3 xl:h-[60vh] h-[30vh] w-full flex justify-center items-center">
              <img
                className="rounded-xl h-full w-full items-center object-cover flex justify-center content-center justify-self-center"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
            <div className="transform xl:pb-0 flex justify-center items-center xl:h-[50vh] xl:col-span-2 h-[30vh] col-span-4">
              <img
                className="rounded-xl h-full w-full items-center object-cover flex justify-center content-center"
                src={gambar3}
                alt="rectangle"
              ></img>
            </div>

            <div className="transform xl:pb-0 content-center col-span-2 xl:h-[50vh] flex justify-center h-[30vh] xl:col-span-2 items-center">
              <img
                className="rounded-xl h-full w-full items-center object-cover flex justify-center content-center"
                src={gambar5}
                alt="rectangle"
              ></img>
            </div>
            <div className="transform xl:pb-0 content-center col-span-2 xl:h-[50vh] flex justify-center h-[30vh] xl:col-span-2 items-center">
              <img
                className="rounded-xl h-full w-full items-center object-cover flex justify-center content-center"
                src={gambar4}
                alt="rectangle"
              ></img>
            </div>

            {/* <div className="transform xl:pb-0 content-center col-span-2 xl:col-span-1 flex justify-center items-center mb-3 ml-1">
              <img
                className="rounded-xl h-full w-full items-center flex justify-center content-center"
                src={gambar6}
                alt="rectangle"
              ></img>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Umkm5;
