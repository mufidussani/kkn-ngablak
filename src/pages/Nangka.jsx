import { Link } from "react-router-dom";
import Nangka from "../components/tanaman_gogik/nangka";

import { HtmlHead } from "../components/HtmlHead";

export default function nangka() {
  return (
    <>
      <HtmlHead
        title="Nangka"
        decription="[insert page description]"
        link="/agrowisata/gogik/nangka"
      />
      <main className="overflow-hidden">
        <Nangka />
      </main>
    </>
  );
}
