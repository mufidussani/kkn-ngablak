import { Link } from "react-router-dom";
import Amplas from "../components/tanaman_gogik/amplas";

import { HtmlHead } from "../components/HtmlHead";

export default function amplas() {
  return (
    <>
      <HtmlHead
        title="Amplas"
        decription="[insert page description]"
        link="/agrowisata/gogik/amplas"
      />
      <main className="overflow-hidden">
        <Amplas />
      </main>
    </>
  );
}
