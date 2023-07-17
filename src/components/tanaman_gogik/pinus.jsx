import { useState } from "react";
import { Link } from "react-router-dom";
import pinus_merkusii from "../../assets/tanaman_gogik/pinus_merkusii.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Pinus = () => {
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
          Pinus (Tusam)
          <br />
          <span className="italic">Pinus merkusii</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] object-cover w-full"
              src={pinus_merkusii}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:text-lg">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas : Pinopsida
              <br />
              Ordo : Pinales
              <br />
              Famili : Pinaceae
              <br />
              Genus : Pinus
              <br />
              Spesies : <span className="italic">Pinus merkusii</span>
            </div>
            Pinus merkusii, juga dikenal sebagai Pinus insularis atau pinus
            Merkus, adalah tanaman konifer yang tumbuh di wilayah Asia Tenggara.
            Pohon ini memiliki bentuk tegak dengan cabang yang tersebar, dan
            daunnya berbentuk jarum yang tumbuh dalam kelompok. Pinus merkusii
            memiliki batang yang kokoh dan kuat, dengan kulit berwarna cokelat
            keabu-abuan yang khas. Tanaman ini menghasilkan bulir-bulir berwarna
            cokelat yang dikenal sebagai "pohon pinus." Pohon Pinus merkusii
            memiliki peran penting dalam ekosistem hutan, memberikan peneduh,
            melindungi tanah, dan sebagai sumber kayu yang bernilai ekonomi.
            Selain itu, minyak terpentin dan resin dari tanaman ini juga
            digunakan dalam industri.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Tusam menghasilkan resin yang merupakan bahan pembuatan gondorukem.
            Kayu tusam juga dapat dimanfaatkan sebagai bahan pembuatan
            copstick/sumpit, korek api, dan mebel.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pinus;
