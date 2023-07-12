import { Link } from "react-router-dom";
import Kaliandra from "../components/tanaman_gogik/kaliandra";

import { HtmlHead } from "../components/HtmlHead";

export default function kalindra() {
  return (
    <>
      <HtmlHead
        title="Kaliandra"
        decription="[insert page description]"
        link="/agrowisata/gogik/kaliandra"
      />
      <main className="overflow-hidden">
        <Kaliandra />
      </main>
    </>
  );
}
