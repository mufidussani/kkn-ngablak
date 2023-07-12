import { Link } from "react-router-dom";

import ManisJangan from "../components/tanaman_gogik/manis_jangan";

import { HtmlHead } from "../components/HtmlHead";

export default function manisjangan() {
  return (
    <>
      <HtmlHead
        title="Manis Jangan"
        decription="[insert page description]"
        link="/agrowisata/gogik/manis_jangan"
      />
      <main className="overflow-hidden">
        <ManisJangan />
      </main>
    </>
  );
}
