import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Nav() {
  return (
    <header className="bg-red-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex nav-container">
          <NavLink
            to="/"
            exact="true"
            className="nav-item inflex-flex items-center text-red-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="nav-item inline-flex items-center rounded text-red-200 hover:text-blue-800"
          >
            About Me
          </NavLink>
          <NavLink
            to="project"
            className="nav-item inline-flex items-center rounded text-red-200 hover:text-blue-800"
          >
            Projects
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/jfaulk3"
            className="mr-4 nav-icon"
            target="_blank"
            fgColor="#fff"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/faulknerjimmie3/"
            className="mr-4 nav-icon"
            target="_blank"
            fgColor="#fff"
          />
        </div>
      </div>
    </header>
  );
}
