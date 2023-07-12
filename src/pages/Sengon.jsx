import { Link } from "react-router-dom";

import Sengon from "../components/tanaman_gogik/sengon";

import { HtmlHead } from "../components/HtmlHead";

export default function sengon() {
  return (
    <>
      <HtmlHead
        title="Sengon"
        decription="[insert page description]"
        link="/agrowisata/gogik/sengon"
      />
      <main className="overflow-hidden">
        <Sengon />
      </main>
    </>
  );
}
