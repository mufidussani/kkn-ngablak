import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faDiscord,
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faLine,
  faLinkedin,
  faSteam,
  faTiktok,
  faTwitter,
  faGoogle,
  faTwitterSquare,
  faUssunnah,
  faWhatsapp,
  faYoutube,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo-saujana-small.png";
import Logo_ugm from "../assets/Lambang UGM-putih.png";
import Logo_kkn from "../assets/Logo KKN UGM.png";
import logo from "../assets/logo-saujana-big.png";
// import festival_footer from "../assets/footer/festival-gm-footer.svg";
// import ornament_footer from "../assets/footer/ornament-footer.svg";
// import ikuti_footer from "../assets/footer/ikuti-kami-footer.svg";
// import sitemap_footer from "../assets/footer/sitemap-footer.svg";

const footer = () => {
  return (
    <footer className=" bg-[#374259] z-100 pt-8 xl:py-0">
      <div className="flex flex-row xl:px-8">
        <div className="container mx-auto px-2 text-left sm:w-auto xl:w-full h-full">
          <div className="mx-4 flex justify-evenly gap-y-2 xl:flex-row xl:items-start flex-col gap-8 mobile:text-2xl">
            <div className="flex flex-col items-center self-center xl:items-start xl:self-auto">
              <div className="flex items-center sm:px-[15rem] xl:px-0 xl:gap-2 xl:flex-row mb-4 xl:pt-4">
                <img
                  src={Logo_ugm}
                  alt=""
                  className="transition-all h-[100px] ml-3 xl:hidden xl:h-28"
                />
                <img
                  src={Logo_ugm}
                  alt=""
                  className=" hidden transition-all ml-3 xl:inline-flex xl:h-28"
                />
                <img
                  src={Logo_kkn}
                  alt=""
                  className=" hidden transition-all ml-3 xl:inline-flex xl:h-28"
                />
                <img
                  src={Logo_kkn}
                  alt=""
                  className="transition-all h-[100px] ml-3 xl:hidden xl:h-28 xl:scale-[1.4]"
                />
                <img
                  src={Logo}
                  alt=""
                  className="transition-all xl:hidden ml-3 xl:h-28"
                />
                <img
                  src={logo}
                  alt=""
                  className=" hidden transition-all xl:inline-flex xl:h-28"
                />
                <span className="hidden">
                  <p className="">
                    <span className="font-bold content-left text-lg xl:text-xl text-white">
                      DESA GIRIREJO
                    </span>
                    <br />
                    <span className="text-center xl:content-left text-md xl:text-lg text-white">
                      Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah, 56194
                    </span>
                  </p>
                </span>
                {/* <p className="text-center xl:content-left text-lg text-white">
                  Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah, 56194
                </p> */}
              </div>
              <span className="">
                <p className="font-bold text-base md:text-lg text-center xl:text-left text-white lg:mt-6 xl:mt-0">
                  DESA GIRIREJO
                </p>
                <p className="text-center text-sm md:text-base text-white lg:mt-6 xl:mt-0 mb-2">
                  Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah, 56194
                </p>
              </span>
            </div>
            {/* quick link */}
            <div className="flex flex-col text-base md:text-lg text-white xl:gap-2 xl:text-xl gap-2 xl:my-6 my-3">
              <div className="flex flex-col gap-2">
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/"
                  className="w-fit transition-colors hover:text-yellow-500"
                >
                  Beranda
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/agrowisata"
                  className="w-fit transition-colors hover:text-yellow-500"
                >
                  Agrowisata dan Pariwisata
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/umkm"
                  className="w-fit transition-colors hover:text-yellow-500"
                >
                  UMKM
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/budaya"
                  className="w-fit transition-colors hover:text-yellow-500"
                >
                  Budaya
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/tps"
                  className="w-fit transition-colors hover:text-yellow-500"
                >
                  TPS
                </Link>
              </div>
            </div>
            {/* kontak person whatsapp */}
            <div className="flex flex-col text-base xl:text-lg text-white gap-2 xl:my-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Hubungi Kami</p>
                <a
                  href={"https://wa.me/6281392136199"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    color="white"
                    size="1x"
                    className="transition-all  group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Whatsapp
                  <p>(+62)813-9213-6199 (Priyo)</p>
                </a>
                <a
                  href={"mailto:dsgirirejongablak@gmail.com"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    size="sm"
                    color="white"
                    className="transition-all group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Email
                  <p>dsgirirejongablak@gmail.com</p>
                </a>
                {/* <p>
                  (+62)813-9213-6199 (Priyo)
                  <br />
                  dsgirirejongablak@gmail.com
                </p> */}
              </div>
              {/* <p className="content-left text-sm text-white lg:mt-6">
                &copy; Tim KKN Saujana Ngablak 2023
              </p> */}
            </div>
            {/* <div> */}
            {/* <p className="content-left text-xs text-white mt-4 xl:mt-6">
              Developed by Tim KKN Saujana Ngablak 2023
            </p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <p className="text-xs text-white bg-light-blue py-2 mt-3 xl:mt-0">
        Developed by Tim KKN-PPM UGM - Saujana Ngablak 2023
      </p>
    </footer>
  );
};

export default footer;
