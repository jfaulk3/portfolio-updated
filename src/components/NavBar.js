import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="bg-cyan-500">
      <div>
        <nav>
          <NavLink to="/" exact="true">
            Home
          </NavLink>
          <NavLink to="about">About Me</NavLink>
          <NavLink to="project">Projects</NavLink>
        </nav>
      </div>
    </header>
  );
}
