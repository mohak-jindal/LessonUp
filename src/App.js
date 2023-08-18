import Home from "./pages/Home"
import About from "./pages/About"
import OurTeam from "./pages/OurTeam"
import Contact from "./pages/Contact"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
