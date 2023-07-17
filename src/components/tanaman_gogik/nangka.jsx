import { useState } from "react";
import { Link } from "react-router-dom";
import artocarpus_heterophyllus from "../../assets/tanaman_gogik/artocarpus_heterophyllus.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Nangka = () => {
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
          Nangka
          <br />
          <span className="italic">Artocarpus heterophyllus</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={artocarpus_heterophyllus}
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
              Genus : Artocarpus
              <br />
              Spesies : <span className="italic">Artocarpus heterophyllus</span>
            </div>
            Artocarpus heterophyllus, yang dikenal juga sebagai pohon nangka,
            adalah tanaman tropis yang berasal dari Asia Tenggara. Pohon ini
            memiliki bentuk tegak dengan cabang yang tersebar. Daunnya besar dan
            berbentuk oval dengan tekstur kasar di permukaan atasnya. Artocarpus
            heterophyllus menghasilkan buah nangka yang besar dan berdaging,
            dengan rasa manis yang lezat. Buahnya memiliki kulit berduri yang
            bisa dipecah untuk mengungkapkan daging kuning yang berbiji. Tanaman
            ini juga memiliki kayu yang kuat dan tahan lama, sering digunakan
            dalam konstruksi. Nangka juga dihargai karena nilai nutrisinya dan
            digunakan dalam berbagai hidangan kuliner dan makanan tradisional.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Daun nangka sebagai obat antidiabetes, pelancar ASI dan obat luka
            luar. Buah nangka muda dapat dimasak sebagai sayur dan daging buah
            yang sudah masak dapat dikonsumsi langsung. Batangnya dapat
            digunakan untuk pembuatan furniture.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nangka;
