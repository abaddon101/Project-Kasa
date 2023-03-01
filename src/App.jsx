import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home.jsx";
import Logement from "./pages/Logement/Logement.jsx";

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
    </div>
  );
}

export default App;
