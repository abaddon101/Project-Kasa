import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import About from "./pages/About/About";
import Error from "./pages/Error/Error.jsx";
import Home from "./pages/Home/Home.jsx";
import Logement from "./pages/Logement/Logement";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";

function App() {
  return (
    <div className="App">
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
