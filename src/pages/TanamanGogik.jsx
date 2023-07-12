import { Link } from "react-router-dom";
import Kaliandra from "../components/tanaman_gogik/kaliandra";
import Puspa from "../components/tanaman_gogik/puspa";
import Mangium from "../components/tanaman_gogik/mangium";
import Nangka from "../components/tanaman_gogik/nangka";
import Kopi from "../components/tanaman_gogik/kopi";
import Pinus from "../components/tanaman_gogik/pinus";
import Sonokeling from "../components/tanaman_gogik/sonokeling";
import Sengon from "../components/tanaman_gogik/sengon";
import ManisJangan from "../components/tanaman_gogik/manis_jangan";
import Damar from "../components/tanaman_gogik/damar";
import Amplas from "../components/tanaman_gogik/amplas";
import Ketapang from "../components/tanaman_gogik/ketapang";

import { HtmlHead } from "../components/HtmlHead";

export default function TanamanGogik() {
  return (
    <>
      <HtmlHead
        title="Via Gogik"
        decription="[insert page description]"
        link="/agrowisata/gogik"
      />
      <main className="overflow-hidden">
        <Kaliandra />
        <Puspa />
        <Mangium />
        <Nangka />
        <Kopi />
        <Pinus />
        <Sonokeling />
        <Sengon />
        <ManisJangan />
        <Damar />
        <Amplas />
        <Ketapang />
      </main>
    </>
  );
}
