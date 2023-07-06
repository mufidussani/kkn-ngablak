import { Link } from "react-router-dom";

import Agrowisata1 from "../components/agrowisata/agrowisata1";
// import Tentang from "../components/home/tentang";
// import Terbaik from "../components/home/terbaik";
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
        {/* <Tentang />
        <Terbaik /> */}
      </main>
    </>
  );
}
