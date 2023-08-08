import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/gogik_a.jpg";
import gambar2 from "../../assets/agrowisata/pinea_forest1.jpg";
import gambar3 from "../../assets/agrowisata/gogik_c.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata8 = () => {
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
    <div className="items-center bg-basic pt-4 xl:pt-8 pb-12 px-8 xl:px-24">
      <div className="">
        <div
          className="relative text-light-blue items-center text-sm"
          id="gogik"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-light-blue font-Satisfy text-2xl sm:text-3xl text-left xl:text-4xl mb-3">
                Wisata Alam
              </div>
              <div className="font-bold text-xl text-left mb-2 xl:hidden">
                Pinea Forest Mangli
              </div>
              {/* <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 xl:hidden">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div> */}
              <p className="text-justify xl:hidden">
                Pinea Forest Mangli merupakan destinasi wisata alam yang baru
                dibuka pada tahun 2023 yang mengusung konsep wisata alam untuk
                keluarga. Terdapat berbagai atraksi menarik yang ada di Pine
                Forest Mangli seperti track jogging, play ground, kafe, spot
                foto, ayunan raksasa, zona amphitheater untuk melihat
                pertunjukkan musik, dan kawasan untuk bermain anak-anak. Selain
                itu, kawasan Pine Forest Mangli juga dikembangkan sebagai
                kawasan camping dan glamping sehingga cocok bagi keluarga yang
                ingin berlibur untuk menghabiskan waktu bersama.
                <br />
                Instagram: @pineaforestmangli
                <br />
                Fasilitas:
                <ul class="list-disc list-inside">
                  <li>Area parkir luas</li> <li>Kafe dengan berbagai menu</li>{" "}
                  <li>Kamar mandi dengan jumlah banyak</li>{" "}
                  <li>Toko makanan ringan di dalam area Pinea Forest</li>{" "}
                  <li>Jogging Track</li> <li>Rumah-rumahan untuk camping</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-2 mt-3 gap-3 xl:gap-6 pt-4">
            <div className="flex justify-center transform col-span-2 xl:col-span-1 xl:pb-0">
              <img
                className="rounded-xl object-cover xl:h-[70vh] w-full"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
            <div className="xl:row-span-1 xl:col-span-1 hidden xl:block text-xl text-justify">
              {/* <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-light-blue font-bold">
                  Tiket Pendakian: 25.000
                </p>
              </div> */}
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Pinea Forest Mangli
              </div>
              Pinea Forest Mangli merupakan destinasi wisata alam yang baru
              dibuka pada tahun 2023 yang mengusung konsep wisata alam untuk
              keluarga. Terdapat berbagai atraksi menarik yang ada di Pine
              Forest Mangli seperti track jogging, play ground, kafe, spot foto,
              ayunan raksasa, zona amphitheater untuk melihat pertunjukkan
              musik, dan kawasan untuk bermain anak-anak. Selain itu, kawasan
              Pine Forest Mangli juga dikembangkan sebagai kawasan camping dan
              glamping sehingga cocok bagi keluarga yang ingin berlibur untuk
              menghabiskan waktu bersama.
              <br />
              Instagram: @pineaforestmangli
              <br />
              Fasilitas:
              <ul class="list-disc list-inside">
                <li>Area parkir luas</li> <li>Kafe dengan berbagai menu</li>{" "}
                <li>Kamar mandi dengan jumlah banyak</li>{" "}
                <li>Toko makanan ringan di dalam area Pinea Forest</li>{" "}
                <li>Jogging Track</li> <li>Rumah-rumahan untuk camping</li>
              </ul>
              {/* <div className="flex justify-center">
                <Link to="/agrowisata/gogik">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    class="mt-4 rounded bg-[#FFFDEC] py-2 px-6 font-Montserrat text-lg md text-dark-blue transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm mb-4"
                  >
                    Selengkapnya
                  </button>
                </Link>
              </div> */}
            </div>

            {/* <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:col-span-1">
              <img
                className="rounded-xl object-cover xl:h-[60vh] w-full"
                src={gambar3}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center transform xl:pb-0 md:col-span-1">
              <img
                className="rounded-xl object-cover xl:h-[60vh] w-full"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata8;
