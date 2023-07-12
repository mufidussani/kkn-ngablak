import { Link } from "react-router-dom";

import Mangium from "../components/tanaman_gogik/mangium";

import { HtmlHead } from "../components/HtmlHead";

export default function mangium() {
  return (
    <>
      <HtmlHead
        title="Mangium"
        decription="[insert page description]"
        link="/agrowisata/gogik/mangium"
      />
      <main className="overflow-hidden">
        <Mangium />
      </main>
    </>
  );
}
