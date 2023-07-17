import { useState } from "react";
import { Link } from "react-router-dom";
import schima_wallichi from "../../assets/tanaman_gogik/schima_wallichi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Puspa = () => {
  const handlePendem = () => {
    const element = document.getElementById("pendem");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleGogik = () => {
    const element = document.getElementById("gogik");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSawit = () => {
    const element = document.getElementById("sawit");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-[#FFFDEC] pt-20 pb-12 px-8 xl:px-24">
      <div
        className="xl:items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="font-bold text-xl xl:text-2xl">
          Puspa
          <br />
          <span className="italic">Schima wallichii</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={schima_wallichi}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 xl:text-lg text-justify">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas : Magnoliopsida
              <br />
              Ordo : Ericales
              <br />
              Famili : Theaceae
              <br />
              Genus : Schima
              <br />
              Spesies : <span className="italic">Schima wallichii</span>
            </div>
            Schima wallichii, juga dikenal sebagai Schima atau Indian Champa,
            adalah tanaman berdaun hijau yang berasal dari wilayah Asia
            Tenggara. Tanaman ini memiliki daun berbentuk oval dan berwarna
            hijau mengilap. Bunganya yang cantik dan harum bermekaran di musim
            panas dengan warna putih atau merah muda. Daun muda dari tanaman ini
            berwarna merah. Schima wallichii tumbuh tegak dengan batang yang
            kuat, mencapai tinggi hingga 30 meter. Selain menjadi tanaman hias
            yang menarik, Schima wallichii juga memiliki manfaat sebagai pohon
            pelindung dan memberikan perlindungan bagi keanekaragaman hayati di
            sekitarnya. Tanaman ini juga memiliki nilai ekonomi sebagai kayu
            bernilai tinggi untuk konstruksi dan pengrajin kayu.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Pohon puspa dimanfaatkan kayunya untuk bahan bangunan, pembuatan
            kertas, mebel, penghasil warna, dan sebagai kayu bakar. Buah dan
            mahkota bunga puspa dapat digunakan sebagai jamu tardisional.
            Tumbuhan puspa mampu dijadikan sebagai tanaman pelindung dan
            reklamasi lahan karena tahan terhadap kebakaran dari kulit kayunya
            yang tebal. Daunnya juga dapat dimanfaatkan untuk pakan ternak.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puspa;
