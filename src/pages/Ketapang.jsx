import { Link } from "react-router-dom";

import Ketapang from "../components/tanaman_gogik/ketapang";

import { HtmlHead } from "../components/HtmlHead";

export default function ketapang() {
  return (
    <>
      <HtmlHead
        title="Ketapang"
        decription="[insert page description]"
        link="/agrowisata/gogik/ketapang"
      />
      <main className="overflow-hidden">
        <Ketapang />
      </main>
    </>
  );
}
