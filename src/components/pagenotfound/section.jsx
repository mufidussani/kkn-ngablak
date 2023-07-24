import React from "react";
import { Link } from "react-router-dom";

import error from "../../assets/404.jpg";

const Section404 = () => {
  return (
    <div className="bg-cover">
      <div className="items-center justify-center pt-16 pb-8 text-dark-blue md:flex-row lg:pb-12">
        <div className="items-center">
          <div className="items-center justify-center flex">
            <img
              src={error}
              alt=""
              className="items-center justify-center flex xl:max-h-[60vh]"
            />
          </div>
          <div className="mt-2 text-center text-xl font-black sm:text-2xl md:text-5xl ">
            Maaf, halaman tidak ditemukan
          </div>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="btn mt-2 bg-dark-blue mx-24 rounded-xl text-center text-lg font-black text-basic shadow-[0_0_0_rgb(84,91,119)] transition-all ease-out hover:translate-y-1 hover:-translate-x-1 hover:shadow-[9px_9px_0_rgb(84,91,119)] md:mt-4 md:py-4 md:px-5 md:text-2xl">
              BERANDA
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section404;
