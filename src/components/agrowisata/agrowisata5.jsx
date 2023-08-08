import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Agrowisata5 = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover bg-homepage-cover opacity-60">
        <div className="items-center align-middle justify-center content-center py-36">
          <Link to="/agrowisata/map">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="inline-block items-center align-middle justify-center mt-4 rounded bg-[#FFFDEC] py-2 px-6 font-Montserrat xl:text-2xl md text-dark-blue transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] text-base mb-4"
            >
              Jelajahi lebih lanjut
              <br />
              Peta Desa Girirejo!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Agrowisata5;
