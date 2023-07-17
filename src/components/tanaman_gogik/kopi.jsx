import { useState } from "react";
import { Link } from "react-router-dom";
import coffea_sp from "../../assets/tanaman_gogik/coffea_sp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Kopi = () => {
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
          Kopi
          <br />
          <span className="italic">Coffea canephora</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={coffea_sp}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:text-lg">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas : Magnoliopsida
              <br />
              Ordo : Gentianales
              <br />
              Famili : Rubiaceae
              <br />
              Genus : Coffea
              <br />
              Spesies : <span className="italic">Coffea canephora</span>
            </div>
            Coffea sp. adalah tanaman berbunga yang terkenal sebagai pohon
            penghasil biji kopi. Tanaman ini berasal dari keluarga Rubiaceae dan
            banyak ditemukan di daerah tropis di seluruh dunia. Pohon kopi
            memiliki daun hijau mengkilap dan bunganya yang kecil dan harum.
            Biji kopi yang dihasilkan oleh pohon ini biasanya digunakan untuk
            membuat minuman kopi yang populer di seluruh dunia. Proses
            pengolahan biji kopi melibatkan pemisahan biji dari buah dan
            penggongsengannya untuk menghasilkan biji kopi yang siap diseduh.
            Tanaman Coffea sp. tumbuh baik di tanah subur dan membutuhkan
            kondisi iklim yang hangat dan lembap untuk tumbuh dengan baik.
            <br />
            <span className="font-bold">Manfaat</span>
            <br />
            Tanaman ini menghasilkan biji yang dimanfaatkan untuk industri
            minuuman kopi. Selain itu, bijinya yang beraroma sedah juga diminati
            sebagai bahan baku untuk minyak wangi maupun pengharum ruangan.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kopi;
