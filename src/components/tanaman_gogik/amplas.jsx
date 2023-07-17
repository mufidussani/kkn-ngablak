import { useState } from "react";
import { Link } from "react-router-dom";
import ficus_ampelas from "../../assets/tanaman_gogik/ficus_ampelas.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Amplas = () => {
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
          Ampelas (Rampelas)
          <br />
          <span className="italic">Ficus ampelas</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={ficus_ampelas}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:text-lg">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas : Magnoliopsida
              <br />
              Ordo : Urticales
              <br />
              Famili : Moraceae
              <br />
              Genus : Ficus
              <br />
              Spesies : <span className="italic">Ficus ampelas</span>
            </div>
            Ficus ampelas adalah spesies tumbuhan yang termasuk dalam keluarga
            Moraceae. Ficus ampelas adalah pohon besar yang dapat tumbuh hingga
            mencapai ketinggian 20 meter. Pohon ini memiliki cabang yang
            menjulang dan daun berbentuk lonjong. Buahnya berbentuk bulat dan
            berwarna ungu/kehitaman saat matang dan dikonsumsi oleh beberapa
            jenis burung dan hewan liar. Pohon ini tumbuh di berbagai jenis
            habitat, seperti hutan lembap, tepi sungai, dan dataran rendah.
            Selain sebagai tanaman hias, Ficus ampelas memiliki beberapa
            manfaat, yaitu daunnya yang mengering dapat dijadikan sebagai amplas
            penghalus kayu. Beberapa bagian tumbuhan ini juga digunakan dalam
            pengobatan tradisional untuk mengobati berbagai penyakit.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Tanaman Ampelas berperan penting dalam kehidupan manusia sebagai
            tanaman obat. Penelitian ilmiah banyak membuktikan bahwa kandungan
            yang terdapat pada Ampelas seperti pada buah tin yang dianggap
            sebagai sumber serat, mineral, dan vitamin serta dapat membantu
            menurunkan berat badan, anti kanker, antiinflamasi,
            antihiperglikemik, antialergik, antitumor, dan alternatif terapi
            penyakit hati.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amplas;
