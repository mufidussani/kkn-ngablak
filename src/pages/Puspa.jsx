import { Link } from "react-router-dom";
import Puspa from "../components/tanaman_gogik/puspa";

import { HtmlHead } from "../components/HtmlHead";

export default function puspa() {
  return (
    <>
      <HtmlHead
        title="Puspa"
        decription="[insert page description]"
        link="/agrowisata/gogik/puspa"
      />
      <main className="overflow-hidden">
        <Puspa />
      </main>
    </>
  );
}
