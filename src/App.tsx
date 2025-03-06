import { HashRouter, Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe'
import Experience from "./components/Experience";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";
import Resume from "./components/Resume";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/stacks" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App
