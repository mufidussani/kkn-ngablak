import { useState } from "react";
import { Link } from "react-router-dom";
import acacia_mangium from "../../assets/tanaman_gogik/acacia_mangium.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Mangium = () => {
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
          Mangium
          <br />
          <span className="italic">Acacia mangium</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] object-cover w-full"
              src={acacia_mangium}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:text-lg">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas : Magnoliopsida
              <br />
              Ordo : Fabales
              <br />
              Famili : Fabaceae
              <br />
              Genus : Acacia
              <br />
              Spesies : <span className="italic">Acacia mangium</span>
            </div>
            Acacia mangium adalah tanaman pohon yang berasal dari keluarga
            Fabaceae dan ditemukan di berbagai wilayah tropis. Pohon ini
            memiliki bentuk yang indah, dengan daun majemuk berbentuk bulat dan
            batang yang tegak. Acacia mangium memiliki pertumbuhan yang cepat
            dan dapat mencapai tinggi hingga 30 meter. Daunnya berwarna hijau
            tua dan menghasilkan bunga berbentuk bola yang berwarna kuning
            cerah. Tanaman ini juga dikenal karena kegunaannya sebagai pohon
            penghasil kayu yang kuat dan tahan lama, sehingga sering digunakan
            dalam industri kayu. Acacia mangium juga memberikan manfaat
            lingkungan sebagai tanaman peneduh dan penghijauan lahan.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Akasia mangium menghasilkan kayu sebagai bahan baku pulp dan kertas.
            Selain itu, kayunya juga dapat digunakan untuk kayu gergajian,
            vinir, papan partikel, dan kayu bakar. Daun akasia dimanfaatkan
            untuk pakan ternak.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mangium;
