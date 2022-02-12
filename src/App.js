import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default App;
