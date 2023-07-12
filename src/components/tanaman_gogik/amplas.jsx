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
        <p className="font-bold text-xl">
          Amplas
          <br />
          <span className="italic">Ficus ampelas</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={ficus_ampelas}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Ficus ampelas, yang juga dikenal sebagai tanaman gantung atau
            tanaman ivy, adalah tanaman merambat yang berasal dari keluarga
            Moraceae. Tanaman ini memiliki daun hijau berkilap dan struktur
            ranting yang panjang. Ficus ampelas sering digunakan sebagai tanaman
            hias gantung karena tumbuh dengan indah dan melingkupi dinding atau
            pot. Akar gantungnya yang khas membuatnya terlihat menarik dan
            memberikan sentuhan alami pada ruangan. Tanaman ini dapat tumbuh
            baik di dalam ruangan maupun di luar ruangan dengan perawatan yang
            tepat. Ficus ampelas juga memiliki manfaat dalam meningkatkan
            kualitas udara dengan menyerap polutan dan melepaskan oksigen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amplas;
