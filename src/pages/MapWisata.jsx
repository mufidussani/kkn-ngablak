import { Link } from "react-router-dom";

import Agrowisata1 from "../components/agrowisata/agrowisata1";
import Agrowisata2 from "../components/agrowisata/agrowisata2";
import Agrowisata3 from "../components/agrowisata/agrowisata3";
import Agrowisata4 from "../components/agrowisata/agrowisata4";
import Agrowisata5 from "../components/agrowisata/agrowisata5";
import Agrowisata6 from "../components/agrowisata/agrowisata6";
import { HtmlHead } from "../components/HtmlHead";

export default function MapWisata() {
  return (
    <>
      <HtmlHead
        title="Peta Wisata"
        decription="[insert page description]"
        link="/agrowisata/map"
      />
      <main className="overflow-hidden">
        <Agrowisata6 />
        {/* <Agrowisata1 />
        <Agrowisata2 />
        <Agrowisata3 />
        <Agrowisata4 />
        <Agrowisata5 /> */}
        {/* <Tentang />
        <Terbaik /> */}
      </main>
    </>
  );
}
