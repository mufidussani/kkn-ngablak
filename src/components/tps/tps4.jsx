import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/tps/kelola_sampah1.jpg";
import gambar2 from "../../assets/tps/kelola_sampah2.jpg";
import gambar3 from "../../assets/tps/kelola_sampah3.jpg";
import gambar4 from "../../assets/tps/kelola_sampah4.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Tps4 = () => {
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
      className="items-center bg-basic pt-2 pb-2 xl:pb-12 px-8 xl:px-24"
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
              {/* <div className="font-black text-light-blue font-Satisfy text-2xl sm:text-3xl text-center xl:text-4xl mb-3">
                Program Unggulan
                <br />
              </div> */}
            </div>
            <div className="text-justify font-bold mb-3 text-base xl:text-2xl">
              Pengelolaan Sampah
            </div>
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
            <div className="col-span-2 hidden xl:inline-block text-xl text-basic p-8 rounded-2xl text-justify bg-dark-blue">
              TPS 3R Giri Mulya bekerja sama dengan Pengelola Tempat Pembuangan
              Akhir (TPA) mengelola sampah yang terkumpul di TPS untuk
              disalurkan pada TPA sebagai akhir dari alur perpindahan sampah
              hasil dari kegiatan masyarakat Desa Girirejo.
              <br />
              Sampah yang terkumpul di TPS 3R Giri Mulya diproses dengan
              prosedur yang sesuai sebelum dikirim ke TPA. Sampah yang telah
              terkumpul dipilah berdasarkan jenis sampah organik dan anorganik.
              Prosedur pengelolaan sampah TPS 3R Giri Mulya memiliki rincian
              sebagai berikut.
              <br />
              • Sampah Organik (Basah)
              <br />
              Sampah organik/basah terdiri atas hasil kegiatan tani masyarakat
              setiap dusun di Desa Girirejo yang mayoritas terdiri atas limbah
              sisa sayur, buah, dan kegiatan rumah tangga. Sampah ini dikelola
              oleh TPS dengan cara diangin-keringkan di tempat terbuka yang
              kemudian ditimbun ke dalam tanah agar sampah dapat terurai dengan
              baik.
              <br />
              • Sampah Anorganik (Kering)
              <br />
              Sampah anorganik/kering terdiri atas hasil kegiatan rumah tangga
              masyarakat Desa Girirejo yang mayoritas terdiri atas limbah
              plastik. Sampah ini dikelola oleh TPS dengan proses pembakaran dan
              filtrasi uap hasil bakar. Proses pembakaran dilakukan dengan alat
              incinerator (alat pembakar sampah) pada setiap hari kerja TPS 3R
              Giri Mulya.
            </div>
          </div>
          <div className="xl:row-span-1 text-sm mt-4 text-justify xl:hidden p-4 rounded-xl text-basic bg-dark-blue">
            TPS 3R Giri Mulya bekerja sama dengan Pengelola Tempat Pembuangan
            Akhir (TPA) mengelola sampah yang terkumpul di TPS untuk disalurkan
            pada TPA sebagai akhir dari alur perpindahan sampah hasil dari
            kegiatan masyarakat Desa Girirejo.
            <br />
            Sampah yang terkumpul di TPS 3R Giri Mulya diproses dengan prosedur
            yang sesuai sebelum dikirim ke TPA. Sampah yang telah terkumpul
            dipilah berdasarkan jenis sampah organik dan anorganik. Prosedur
            pengelolaan sampah TPS 3R Giri Mulya memiliki rincian sebagai
            berikut.
            <br />
            • Sampah Organik (Basah)
            <br />
            Sampah organik/basah terdiri atas hasil kegiatan tani masyarakat
            setiap dusun di Desa Girirejo yang mayoritas terdiri atas limbah
            sisa sayur, buah, dan kegiatan rumah tangga. Sampah ini dikelola
            oleh TPS dengan cara diangin-keringkan di tempat terbuka yang
            kemudian ditimbun ke dalam tanah agar sampah dapat terurai dengan
            baik.
            <br />
            • Sampah Anorganik (Kering)
            <br />
            Sampah anorganik/kering terdiri atas hasil kegiatan rumah tangga
            masyarakat Desa Girirejo yang mayoritas terdiri atas limbah plastik.
            Sampah ini dikelola oleh TPS dengan proses pembakaran dan filtrasi
            uap hasil bakar. Proses pembakaran dilakukan dengan alat incinerator
            (alat pembakar sampah) pada setiap hari kerja TPS 3R Giri Mulya.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tps4;
