import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="d-flex align-items-center min-vh-100 bg-danger text-light"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="mb-3">About Me</h2>
            <p className="lead">
              I’m Allen, a Full-Stack Developer and QA Tester passionate about
              building reliable web apps. I graduated from UST with a BSIT
              degree. My capstone project, ArtDive, allowed me to create a
              virtual museum experience for the UST Museum.
            </p>
            <p>
              When I’m not coding, you can find me playing guitar or exploring
              new technologies.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <span className="badge bg-primary">Next.js</span>
              <span className="badge bg-warning text-dark">React.js</span>
              <span className="badge bg-success">MongoDB</span>
              <span className="badge bg-info text-dark">QA Testing</span>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <Image
              src="/undraw_designer_efwz.svg"
              alt="Allen Yanga"
              width={450}
              height={450}
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
