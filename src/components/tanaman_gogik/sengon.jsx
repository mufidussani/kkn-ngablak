import { useState } from "react";
import { Link } from "react-router-dom";
import falcataria_moluccana from "../../assets/tanaman_gogik/falcataria_moluccana.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Sengon = () => {
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
    <div className="items-center bg-[#FFFDEC] xl:py-8 pt-4 pb-8 px-8 xl:px-24">
      <div
        className="xl:items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="font-bold text-xl xl:text-2xl">
          Sengon
          <br />
          <span className="italic">Falcataria moluccana</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={falcataria_moluccana}
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
              Genus : Falcataria
              <br />
              Spesies : <span className="italic">Falcataria moluccana</span>
            </div>
            Falcataria moluccana, juga dikenal sebagai pohon sengon atau
            albizia, adalah tanaman pohon cepat tumbuh yang berasal dari wilayah
            Asia Tenggara. Pohon ini memiliki daun majemuk berbentuk bulat
            dengan pola yang khas. Falcataria moluccana tumbuh tegak dengan
            batang yang lurus dan kuat. Tanaman ini sering digunakan dalam
            penghijauan, agroforestri, dan sebagai sumber kayu serbaguna. Kayu
            pohon gamal ringan, kuat, dan mudah diolah, sehingga digunakan dalam
            konstruksi, pembuatan perabot, dan bahan baku industri. Selain itu,
            Falcataria moluccana juga memiliki manfaat dalam penyerapan karbon,
            perbaikan kualitas tanah, dan peneduh.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Tanaman sengon dapat dimanfaatkan sebagai penghijauan dan reboisasi,
            pelindung dan penyubur tanah, bahan baku kayu bakar, dan bahan baku
            pulp lertas. Selain itu, daun tanaman sengon juga bermanfaat sebagai
            pakan ternak.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sengon;
