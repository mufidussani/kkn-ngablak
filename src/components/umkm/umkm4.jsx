import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/umkm/pembibitan_gondangan.jpg";
import gambar2 from "../../assets/umkm/pembibitan_dempel.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Umkm4 = () => {
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
    <div className="items-center bg-basic pt-8 pb-12 xl:py-12">
      <div
        className="relative items-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="font-black bg-dark-blue mb-8 py-6 text-2xl xl:text-4xl text-basic text-center">
          SUMBER DARI BIBIT BERKUALITAS
        </div>

        <div className="flex-col flex xl:grid xl:grid-cols-2 gap-3 xl:px-24">
          <div className="bg-dark-blue w-full col-span-1">
            <p className="font-bold text-basic pt-2 text-lg">Dempel</p>
            <div className="flex justify-center items-center">
              <iframe
                className="h-[400px] w-full pb-8 px-4"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.688486936147!2d110.3872587!3d-7.3887619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7d57b257417d%3A0x506ea14894d2aa2d!2sDempel!5e0!3m2!1sid!2sid!4v1689310345856!5m2!1sid!2sid"
                title="map_dempel"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="px-4 py-8 col-span-1">
            <div className="font-black pointer-events-none">
              <div className="mt-1 justify-center">
                <div className="text-[#545B77] font-Satisfy text-3xl sm:text-3xl xl:text-5xl font-bold text-left mb-4 xl:mb-12">
                  Sentra Pembibitan
                  {/* <div className="text-[#545B77] text-lg sm:text-base text-center text">
                  Produk yang sedang dikembangkan
                </div> */}
                </div>
              </div>
            </div>
            <div className="text-dark-blue text-justify text-base xl:text-lg">
              Desa Girirejo menjadi sumber dari bibit bibit tanaman berkualitas,
              bagi anda yang memiliki kegiatan bertani dan memiliki ketertarikan
              pada tanaman bisa langsung datang ke Desa Girirejo untuk
              mendapatkan bibit yang berkualitas tepatnya di dusun Gondang Wetan
              dan Dusun Dempel.
            </div>
          </div>
          <div className="xl:mt-12 col-span-1 px-4 xl:px-0">
            <div className="pb-8">
              <div className="xl:h-[40vh]">
                <img
                  className="rounded-xl h-full w-full object-cover items-center flex justify-center content-center"
                  src={gambar1}
                  alt="rectangle"
                ></img>
              </div>
              <div className="py-4"></div>
              <div className="xl:h-[40vh]">
                <img
                  className="rounded-xl h-full w-full object-cover items-center flex justify-center content-center"
                  src={gambar2}
                  alt="rectangle"
                ></img>
              </div>
            </div>
          </div>
          <div className=" w-full col-span-1 xl:mt-12">
            <div className="bg-light-blue">
              <p className="font-bold text-basic pt-2 text-lg">
                Gondangan Wetan
              </p>
              <div className="flex justify-center items-center">
                <iframe
                  className="h-[400px] w-full pb-8 px-4"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6338400644827!2d110.39033896991351!3d-7.394861648787045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7c3073cbc249%3A0x60dbf6cedbefd1ba!2sGondangan%20Wetan%2C%20Girirejo%2C%20Kec.%20Ngablak%2C%20Kabupaten%20Magelang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1689313612089!5m2!1sid!2sid"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="map_gondangan_wetan"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Umkm4;
