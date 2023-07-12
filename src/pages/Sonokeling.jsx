import { Link } from "react-router-dom";
import Sonokeling from "../components/tanaman_gogik/sonokeling";

import { HtmlHead } from "../components/HtmlHead";

export default function sonokeling() {
  return (
    <>
      <HtmlHead
        title="Sonokeling"
        decription="[insert page description]"
        link="/agrowisata/gogik/sonokeling"
      />
      <main className="overflow-hidden">
        <Sonokeling />
      </main>
    </>
  );
}
