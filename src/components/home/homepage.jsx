import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Homepage = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover h-screen bg-pemandangan-1 opacity-60"></div>
      <div
        className="container absolute items-center w-auto top-1/2 px-12 text-[#374259] animate-[bounce_2s_infinite]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <p className="font-Montserrat text-left font-bold text-2xl mb-4 sm:text-2xl md:text-3xl lg:text-6xl bg-basic rounded-2xl p-3 bg-opacity-50">
          SELAMAT DATANG
          <br />
          DI DESA GIRIREJO
        </p>
        <p className="text-left sm:text-lg md:text-xl text-basic bg-light-blue bg-opacity-90 p-3 rounded-2xl">
          Jelajahi pesona alam dan hasil bumi Girirejo.
        </p>
      </div>
    </>
  );
};

export default Homepage;
