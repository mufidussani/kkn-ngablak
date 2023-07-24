import { Link } from "react-router-dom";

import Tps1 from "../components/tps/tps1";
import Tps2 from "../components/tps/tps2";
import Tps3 from "../components/tps/tps3";
import Tps4 from "../components/tps/tps4";
import Tps5 from "../components/tps/tps5";
import { HtmlHead } from "../components/HtmlHead";

export default function Tps() {
  return (
    <>
      <HtmlHead
        title="TPS Giri Mulya"
        decription="[insert page description]"
        link="/umkm"
      />
      <main className="overflow-hidden">
        <Tps1 />
        <Tps2 />
        <Tps3 />
        <Tps4 />
        <Tps5 />
      </main>
    </>
  );
}
