import { Link } from "react-router-dom";
import Pinus from "../components/tanaman_gogik/pinus";

import { HtmlHead } from "../components/HtmlHead";

export default function pinus() {
  return (
    <>
      <HtmlHead
        title="Nangka"
        decription="[insert page description]"
        link="/agrowisata/gogik/pinus"
      />
      <main className="overflow-hidden">
        <Pinus />
      </main>
    </>
  );
}
