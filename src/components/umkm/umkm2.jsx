import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Umkm2 = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover h-screen bg-homepage-cover opacity-60">
      </div>
    </>
  );
};

export default Umkm2;
