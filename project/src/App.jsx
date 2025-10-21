import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TechStack from "./pages/TechStack";  

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col">
      <Navbar />

      {/* Wrap Routes in a div to apply flex-grow */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}


export default App;
