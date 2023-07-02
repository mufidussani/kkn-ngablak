import { useState, React, Component } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/logo_fgm.svg";
// import gunungan from "../../assets/home/gunungan.svg";
// import mozaik_horizontal from "../../assets/home/mozaik_horizontal.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "./tentang.css";

const Cerita = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  // const translateLogo = {
  // 	transform: isDesktop ? "translate(30%, 0%)" : "translate(0%, 0%)",
  // };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
  };

  return (
    <div className="relative items-center bg-[#1E1E1E] pb-16 pt-16 md:pt-24 xl:pt-32">
      <div className="relative mobile:flex mobile:flex-col-reverse mx-32">
        <div
          className="relative items-center text-white mobile:text-sm"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="font-black sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl pointer-events-none">
            <div className="mt-1 flex flex-row justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-Satisfy mobile:text-2xl mobile:font-bold mb-5 text-center">
                Terbaik dari Girirejo
              </div>
              {/* <div
                className="sm:w-48 md:w-56 lg:w-80 xl:scale-x-[1.8] mobile:w-40"
                src={rectangle_17}
                alt="rectangle"
              ></div> */}
            </div>
            {/* <div className="mt-3 flex flex-row sm:gap-1 xl:gap-1 mobile:gap-1">
              <p className="font-Montserrat mobile:text-2xl mobile:font-bold">
                Girirejo
              </p>{" "}
              <p className="mobile:text-2xl mobile:font-bold"> MADA</p>
              <div className="bg-red-500 sm:w-full mobile:block mobile:w-4/5" />
              <img
                className="sm:w-[96px] md:w-28 lg:w-48 xl:scale-x-[2.25] mobile:w-1/4"
                src={rectangle_18}
                alt="rectangle"
              ></img>
            </div> */}
          </div>
          <div className="sm:text-base xl:text-xl text-center">
            Telusuri lebih lanjut tentang apa yang kami tawarkan.
          </div>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        {/* <img
						</div>
					</div>
					<div className="text-justify sm:text-base xl:text-3xl">
						Festival Gadjah Mada merupakan sebuah festival yang menyajikan
						kreasi budaya dan seni tradisional melalui pengemasan yang modern.
						Pada tahun ini Festival Gadjah Mada akan menyemarakan rangkaian
						acaranya melalui Festival Seni, Pasar Rakyat, dan Pentas Teater
					</div>
					<Link to="/tentang">
						<button
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
							}}
							class="mt-4 rounded bg-white py-2 px-6 font-Montserrat text-lg text-black hover:bg-black hover:px-[1.33rem] hover:font-bold hover:text-white mobile:text-sm"
						>
							Selengkapnya
						</button>
					</Link>
				</div>
				{/* <img
          className="relative items-center mx-auto justify-center text-left text-white sm:top-1 sm:left-20 sm:w-1/2 md:-top-0.5 lg:left-32 lg:w-2/5 xl:-top-20 xl:mb-1 xl:w-2/6 mobile:top-10 mobile:mx-auto mobile:w-1/4"
          src={Logo}
          alt="logo"
        ></img> */}
      </div>
    </div>
  );
};

export default Cerita;
