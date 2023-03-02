import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home.jsx";
import Logement from "./pages/Logement/Logement";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
