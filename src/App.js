import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import React from "react";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
