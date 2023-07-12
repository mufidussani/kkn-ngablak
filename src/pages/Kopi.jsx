import { Link } from "react-router-dom";
import Kopi from "../components/tanaman_gogik/kopi";

import { HtmlHead } from "../components/HtmlHead";

export default function kopi() {
  return (
    <>
      <HtmlHead
        title="Kopi"
        decription="[insert page description]"
        link="/agrowisata/gogik/kopi"
      />
      <main className="overflow-hidden">
        <Kopi />
      </main>
    </>
  );
}
