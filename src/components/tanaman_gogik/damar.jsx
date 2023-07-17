import { useState } from "react";
import { Link } from "react-router-dom";
import agathis_dammara from "../../assets/tanaman_gogik/agathis_dammara.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Damar = () => {
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
          Damar
          <br />
          <span className="italic">Agathis dammara</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={agathis_dammara}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:text-lg">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas : Pinopsida
              <br />
              Ordo : Pinales
              <br />
              Famili : Araucariaceae
              <br />
              Genus : Agathis
              <br />
              Spesies : <span className="italic">Agathis dammara</span>
            </div>
            Agathis dammara, juga dikenal sebagai pohon damar, adalah tanaman
            pohon konifer yang tumbuh di wilayah Asia Tenggara. Pohon ini
            memiliki bentuk yang tinggi, tegak, dan batang yang lurus. Agathis
            dammara menghasilkan daun hijau tua yang lebar dan agak lembut.
            Tanaman ini terkenal karena resin atau damar yang dihasilkannya,
            yang digunakan dalam industri pernis, lilin, dan cat. Kayu pohon
            damar juga bernilai tinggi dan digunakan dalam pembuatan perabot,
            lantai, dan konstruksi. Agathis dammara memiliki nilai ekologi yang
            penting karena memberikan peneduh, habitat bagi keanekaragaman
            hayati, dan menghasilkan oksigen. Namun, eksploitasi berlebihan dan
            deforestasi mengancam kelestariannya.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Damar menghasilkan getah (kopal) sebagai bahan pembuatan cat,
            vernis, spiritus, pelapis tekstil, dan minyak pelapis lantai.
            Sementara itu, kayunya digunakan untuk bahan korek api, vinir, kayu
            lapis, dan perabot rumah tangga.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Damar;
