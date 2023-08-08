import { useState } from "react";
import { Link } from "react-router-dom";
import map_wisata from "../../assets/agrowisata/wisata_desa.png";
import map_kesenian from "../../assets/agrowisata/kesenian_desa.png";
import map_sarana from "../../assets/agrowisata/sarana_desa.png";
import AOS from "aos";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";

const Agrowisata6 = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [isTampil, setIsTampil] = useState(false);
  const [fotoTampil, setFotoTampil] = useState();

  function closeFoto() {
    setIsTampil(false);
    setFotoTampil();
  }

  function openFoto(foto) {
    setFotoTampil(foto);
    setIsTampil(true);
    console.log(isTampil, fotoTampil);
  }
  return (
    <>
      <div className="bg-basic pt-20 pb-8 px-8 xl:pb-12 xl:pt-24">
        <h1 className="text-center font-Metropolis font-bold text-xl xl:text-3xl">
          Peta Wisata, Kesenian, dan Sarana Prasarana
          <br />
          Desa Girirejo
        </h1>
        <div className="items-center justify-center mt-2 xl:mt-8 grid grid-cols-2 gap-8">
          <div className="col-span-2 xl:col-span-1 xl:-mr-32">
            <button
              className="transition ease-in-out duration-500 md:w-[500px] filter transform md:hover:scale-110"
              onClick={() => openFoto(map_wisata)}
            >
              <img
                className="rounded-xl"
                src={map_wisata}
                alt="rectangle"
              ></img>
            </button>
          </div>
          <div className="col-span-2 xl:col-span-1 xl:-ml-32">
            <button
              className="transition ease-in-out duration-500 md:w-[500px] filter transform md:hover:scale-110"
              onClick={() => openFoto(map_kesenian)}
            >
              <img
                className="rounded-xl"
                src={map_kesenian}
                alt="rectangle"
              ></img>
            </button>
          </div>
          <div className="col-span-2">
            <button
              className="transition ease-in-out duration-500 md:w-[500px] filter transform md:hover:scale-110"
              onClick={() => openFoto(map_sarana)}
            >
              <img
                className="rounded-xl"
                src={map_sarana}
                alt="rectangle"
              ></img>
            </button>
          </div>
        </div>
        <Dialog open={isTampil} onClose={closeFoto}>
          <Dialog.Overlay />
          <div className="fixed px-2 py-4 mt-10 xl:top-0 top-12 inset-0 rounded-xl overflow-y-scroll overflow-x-hidden">
            <div
              className="fixed top-0 left-0 bg-gray-900 bg-opacity-70 w-full h-full"
              onClick={closeFoto}
            />
            <div className="relative xl:w-1/2 w-9/10 xl:mt-8 h-full m-auto">
              {fotoTampil && (
                <div
                  className={`m-auto p-1 relative rounded-xl shadow green-900`}
                >
                  <button
                    className="md:text-4xl text-3xl text-dark-blue absolute md:right-0 right-0 px-2 pt-4 rounded-full overflow-hidden z-40"
                    onClick={closeFoto}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <img
                    className="rounded-xl mx-auto w-full h-120 my-4"
                    src={fotoTampil}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Agrowisata6;
