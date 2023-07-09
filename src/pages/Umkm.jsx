import { Link } from "react-router-dom";

import Umkm1 from "../components/umkm/umkm1";
import { HtmlHead } from "../components/HtmlHead";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="UMKM"
        decription="[insert page description]"
        link="/umkm"
      />
      <main className="overflow-hidden">
        <Umkm1 />
        {/* <Tentang />
        <Terbaik /> */}
      </main>
    </>
  );
}
