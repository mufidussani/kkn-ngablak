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
        <p className="font-bold text-xl">
          Damar
          <br />
          <span className="italic">Agathis dammara</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={agathis_dammara}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Damar;
