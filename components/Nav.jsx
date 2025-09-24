import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-md-5 py-md-4 px-3 py-4 shadow-sm">
      <a className="navbar-brand fw-bold text-danger" href="/">
        JON ALLEN YANGA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
