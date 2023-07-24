import { Link } from "react-router-dom";

import Umkm1 from "../components/umkm/umkm1";
import Umkm2 from "../components/umkm/umkm2";
import Umkm3 from "../components/umkm/umkm3";
import Umkm4 from "../components/umkm/umkm4";
import Umkm5 from "../components/umkm/umkm5";
import Umkm6 from "../components/umkm/umkm6";
import { HtmlHead } from "../components/HtmlHead";

export default function Umkm() {
  return (
    <>
      <HtmlHead
        title="UMKM"
        decription="[insert page description]"
        link="/umkm"
      />
      <main className="overflow-hidden">
        <Umkm5 />
        <Umkm6 />
        {/* <Umkm3 /> */}
        <Umkm4 />
        <Umkm1 />
        {/* <Umkm2 /> */}
        {/* <Tentang />
        <Terbaik /> */}
      </main>
    </>
  );
}
