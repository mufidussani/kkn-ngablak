import { Link } from "react-router-dom";

import Homepage from "../components/home/homepage";
import Tentang from "../components/home/tentang";
import Terbaik from "../components/home/terbaik";
import Cerita from "../components/home/cerita";
import Agrowisata5 from "../components/agrowisata/agrowisata5";
import { HtmlHead } from "../components/HtmlHead";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <main className="overflow-hidden">
        <Homepage />
        <Tentang />
        <Terbaik />
        <Agrowisata5 />
        <Cerita />
      </main>
    </>
  );
}
