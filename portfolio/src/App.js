import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsPage from "./components/SkillsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
