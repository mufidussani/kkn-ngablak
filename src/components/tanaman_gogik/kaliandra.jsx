import { useState } from "react";
import { Link } from "react-router-dom";
import kaliandra from "../../assets/tanaman_gogik/calliandra_sp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Kaliandra = () => {
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
    <div className="items-center bg-[#FFFDEC] pb-12 pt-20 px-8 xl:px-24">
      <div
        className="xl:items-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <p className="font-bold text-xl xl:text-2xl">
          Kaliandra Merah <br />
          <span className="italic">Calliandra calothyrsus</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] object-cover w-full"
              src={kaliandra}
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
              Genus : Calliandra
              <br />
              Spesies : <span className="italic">Calliandra calothyrsus</span>
            </div>
            Calliandra sp. adalah tanaman berbunga dengan bunga berbentuk bulat
            seperti kuas yang menonjol. Daunnya kecil, berbentuk majemuk, dan
            tumbuh kembali saat musim hujan. Tanaman ini populer sebagai tanaman
            hias karena keindahan bunganya yang mencolok. Calliandra sp. juga
            tahan terhadap kondisi cuaca ekstrem dan dapat digunakan sebagai
            tanaman peneduh atau pakan lebah. Keindahan visualnya membuatnya
            menjadi pilihan populer bagi penghobi tanaman dan pekebun. Selain
            memberikan keindahan, tanaman ini juga memberikan manfaat bagi
            lingkungan dan ekosistem di sekitarnya.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Kaliandra merah memiliki manfaat, pakan ternak, dan juga penahan
            api. Selain itu, kayunya dapat dimanfaatkan sebagai kayu bakar
            karena cepat kering dan mudah dibakar. Sementara itu, tanaman
            kaliandra dapat dimanfaatkan sebagai obat herbal untuk menyembuhkan
            rematik, sesak nafas, kanker rahim, pembersih darah, kontrasepsi,
            anthelmintika, antispasmodik, antiretik, dan antikoligenik.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kaliandra;
