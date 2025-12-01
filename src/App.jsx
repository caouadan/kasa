import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

function App() {
  return (
    <div className="page-root">
    <main className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
      <Footer />
    </div>
  );
}

export default App;