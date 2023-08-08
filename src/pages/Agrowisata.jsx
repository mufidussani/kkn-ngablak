import { Link } from "react-router-dom";

import Agrowisata1 from "../components/agrowisata/agrowisata1";
import Agrowisata2 from "../components/agrowisata/agrowisata2";
import Agrowisata3 from "../components/agrowisata/agrowisata3";
import Agrowisata4 from "../components/agrowisata/agrowisata4";
import Agrowisata5 from "../components/agrowisata/agrowisata5";
import Agrowisata7 from "../components/agrowisata/agrowisata7";
import Agrowisata8 from "../components/agrowisata/agrowisata8";
import { HtmlHead } from "../components/HtmlHead";

export default function Agrowisata() {
  return (
    <>
      <HtmlHead
        title="Agrowisata"
        decription="[insert page description]"
        link="/agrowisata"
      />
      <main className="overflow-hidden">
        <Agrowisata1 />
        <Agrowisata2 />
        <Agrowisata3 />
        <Agrowisata4 />
        <Agrowisata8 />
        <Agrowisata7 />
        {/* <Agrowisata5 /> */}
        {/* <Tentang />
        <Terbaik /> */}
      </main>
    </>
  );
}
