import { Link } from "react-router-dom";

// import Opening_video from "../components/home/opening_video";
import Tentang from "../components/home/tentang";
import Terbaik from "../components/home/terbaik";
import { HtmlHead } from "../components/HtmlHead";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <main className="overflow-hidden">
        <Tentang />
        <Terbaik />
        {/* <Opening_video />
        <Tentang />
        <Rangkaian />

        <LiniMasa />
        <Sponsor />
        <Medpart /> */}
      </main>
    </>
  );
}
