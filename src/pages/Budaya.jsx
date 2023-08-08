import { Link } from "react-router-dom";

import Budaya1 from "../components/budaya/budaya1";
import Budaya2 from "../components/budaya/budaya2";
import Budaya3 from "../components/budaya/budaya3";
import { HtmlHead } from "../components/HtmlHead";

export default function Budaya() {
  return (
    <>
      <HtmlHead
        title="Budaya"
        decription="[insert page description]"
        link="/"
      />
      <main className="overflow-hidden">
        <Budaya1 />
        <Budaya2 />
        <Budaya3 />
      </main>
    </>
  );
}
