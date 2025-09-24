import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-md-5 py-md-4 px-3 py-4 shadow-sm">
      <a className="navbar-brand font-weight-bold" href="/">
        Jon Allen Yanga
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
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
