import { useState } from "react";
import { Link } from "react-router-dom";
import cinnamomum_burmanii from "../../assets/tanaman_gogik/cinnamomum_burmanii.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const ManisJangan = () => {
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
          Manis Jangan
          <br />
          <span className="italic">Cinnamomum burmannii</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={cinnamomum_burmanii}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Cinnamomum burmanii, yang dikenal juga sebagai kayu manis Burma,
            adalah tanaman rempah-rempah yang berasal dari Asia Tenggara.
            Tanaman ini memiliki daun yang mengilap dan bunga yang kecil dan
            tidak mencolok. Cinnamomum burmanii terkenal karena kulit kayunya
            yang dihasilkan, yang merupakan bahan dasar dari rempah-rempah kayu
            manis. Kulit kayu ini memiliki aroma harum dan rasa manis yang khas,
            dan digunakan dalam masakan, minuman, dan obat-obatan tradisional.
            Cinnamomum burmanii juga memiliki manfaat kesehatan, seperti sifat
            anti-inflamasi dan antioksidan. Tanaman ini telah lama digunakan
            sebagai rempah-rempah bernilai tinggi dan memiliki peran penting
            dalam industri kuliner dan pengobatan tradisional.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManisJangan;
