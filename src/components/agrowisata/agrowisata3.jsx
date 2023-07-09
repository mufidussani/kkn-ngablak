import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/Sawit_Top.jpg";
import gambar2 from "../../assets/agrowisata/via-pendem.png";
import gambar3 from "../../assets/agrowisata/via-sawit.png";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata3 = () => {
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
    <div className="items-center bg-basic py-8 xl:py-12 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-light-blue text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-light-blue font-Satisfy text-2xl sm:text-3xl xl:text-4xl text-center mb-3 xl:hidden">
                Liburan Bersama Keluarga di Telomoyo Nature Park
              </div>
              <p className="text-justify xl:hidden">
                Bosan menginap di tempat yang itu-itu saja? Ingin mencari
                suasana baru untuk liburan bersama keluarga?
                <br />
                Telomoyo Nature Park jawabannya!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 mt-3 gap-4 pt-4">
            <div className="font-black xl:col-span-2 text-light-blue font-Satisfy text-2xl sm:text-3xl xl:text-4xl text-center mb-3">
              Liburan Bersama Keluarga di Telomoyo Nature Park
              <br />
              <div className="font-Metropolis mt-4 text-justify">
                Bosan menginap di tempat yang itu-itu saja? Ingin mencari
                suasana baru untuk liburan bersama keluarga?
                <br />
                Telomoyo Nature Park jawabannya!
              </div>
            </div>
            {/* <div className="col-span-1 xl:col-span-3 text-center hidden text-xl xl:flex items-center">
              Bosan menginap di tempat yang itu-itu saja? Ingin mencari suasana
              baru untuk liburan bersama keluarga?
              <br />
              Telomoyo Nature Park jawabannya!
            </div> */}
            <div className="flex justify-center items-center xl:justify-normal xl:pb-0 col-span-1 xl:col-span-1">
              <img className="rounded-xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="font-black col-span-2 xl:col-span-3 xl:text-2xl text-center">
              Menginap di pelukan alam tidak pernah senyaman ini,
            </div>
            <div className="col-span-2 xl:col-span-3 w-full h-full justify-center flex">
              <iframe
                src="https://www.youtube.com/embed/G7KNmW9a75Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata3;
