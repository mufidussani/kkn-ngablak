import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Agrowisata from "./pages/Agrowisata";
import Umkm from "./pages/Umkm";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agrowisata" element={<Agrowisata />} />
        <Route path="/umkm" element={<Umkm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
