import { Link } from "react-router-dom";

import Agrowisata1 from "../components/agrowisata/agrowisata1";
import Agrowisata2 from "../components/agrowisata/agrowisata2";
import { HtmlHead } from "../components/HtmlHead";

export default function Home() {
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
        {/* <Tentang />
        <Terbaik /> */}
      </main>
    </>
  );
}
