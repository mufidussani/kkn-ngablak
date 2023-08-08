import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Agrowisata from "./pages/Agrowisata";
import MapWisata from "./pages/MapWisata";
import Umkm from "./pages/Umkm";
import Budaya from "./pages/Budaya";

import Amplas from "./pages/Amplas";
import Damar from "./pages/Damar";
import Kaliandra from "./pages/Kaliandra";
import Ketapang from "./pages/Ketapang";
import Kopi from "./pages/Kopi";
import Mangium from "./pages/Mangium";
import ManisJangan from "./pages/ManisJangan";
import Nangka from "./pages/Nangka";
import Pinus from "./pages/Pinus";
import Puspa from "./pages/Puspa";
import Sengon from "./pages/Sengon";
import Sonokeling from "./pages/Sonokeling";

import Tps from "./pages/Tps";
import NotFound from "./pages/NotFound";

import TanamanGogik from "./pages/TanamanGogik";

import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agrowisata" element={<Agrowisata />} />
        <Route path="/agrowisata/map" element={<MapWisata />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/agrowisata/gogik" element={<TanamanGogik />} />
        <Route path="/agrowisata/gogik/kaliandra" element={<Kaliandra />} />
        <Route path="/agrowisata/gogik/puspa" element={<Puspa />} />
        <Route path="/agrowisata/gogik/mangium" element={<Mangium />} />
        <Route path="/agrowisata/gogik/nangka" element={<Nangka />} />
        <Route path="/agrowisata/gogik/kopi" element={<Kopi />} />
        <Route path="/agrowisata/gogik/pinus" element={<Pinus />} />
        <Route path="/agrowisata/gogik/sonokeling" element={<Sonokeling />} />
        <Route path="/agrowisata/gogik/sengon" element={<Sengon />} />
        <Route
          path="/agrowisata/gogik/manis_jangan"
          element={<ManisJangan />}
        />
        <Route path="/agrowisata/gogik/damar" element={<Damar />} />
        <Route path="/agrowisata/gogik/amplas" element={<Amplas />} />
        <Route path="/agrowisata/gogik/ketapang" element={<Ketapang />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/tps" element={<Tps />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
