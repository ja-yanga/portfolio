import React from "react";

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="d-flex align-items-center min-vh-100 bg-danger text-light"
    >
      <div className="container text-center">
        <h2 className="mb-4">Get in Touch</h2>
        <p className="mb-5">
          I’m open to entry-level opportunities in Web Development and Software
          Development. Let’s connect!
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-dark text-light p-4 shadow-lg">
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  📧{" "}
                  <a
                    href="#contact"
                    className="text-light text-decoration-none"
                  >
                    allenyanga34@gmail.com
                  </a>
                </li>
                <li className="mb-3">
                  💼{" "}
                  <a
                    href="https://www.linkedin.com/in/jon-allen-yanga-7702a5320/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none"
                  >
                    https://www.linkedin.com/in/jon-allen-yanga-7702a5320/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
