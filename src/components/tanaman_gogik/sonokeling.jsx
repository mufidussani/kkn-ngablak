import { useState } from "react";
import { Link } from "react-router-dom";
import dalbergia_latifolia from "../../assets/tanaman_gogik/dalbergia_latifolia.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Sonokeling = () => {
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
          Sonokeling
          <br />
          <span className="italic">Dalbergia latifolia</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={dalbergia_latifolia}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Dalbergia latifolia, yang dikenal juga sebagai pohon rosewood India
            atau pohon sonokeling, adalah tanaman pohon kayu berharga tinggi.
            Tanaman ini berasal dari keluarga Fabaceae dan ditemukan terutama di
            India dan Asia Tenggara. Pohon ini memiliki daun majemuk berbentuk
            bulat dan batang yang tegak. Dalbergia latifolia terkenal karena
            kayu berwarna cokelat gelap yang sangat indah dan tahan lama. Kayu
            ini digunakan dalam pembuatan furniture, instrumen musik, ukiran,
            dan barang-barang mewah lainnya. Sayangnya, karena pengambilan kayu
            yang berlebihan, pohon rosewood India terancam punah, sehingga
            perdagangan internasionalnya diatur ketat untuk menjaga
            kelestariannya.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sonokeling;
