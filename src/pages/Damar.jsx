import { Link } from "react-router-dom";
import Damar from "../components/tanaman_gogik/damar";

import { HtmlHead } from "../components/HtmlHead";

export default function damar() {
  return (
    <>
      <HtmlHead
        title="Damar"
        decription="[insert page description]"
        link="/agrowisata/gogik/damar"
      />
      <main className="overflow-hidden">
        <Damar />
      </main>
    </>
  );
}
