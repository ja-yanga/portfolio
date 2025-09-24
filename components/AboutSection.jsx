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
            <h2 className="mb-3 mt-sm-0 mt-5">About Me</h2>
            <p className="lead fw-normal">
              I’m Jon Allen C. Yanga, an Aspiring Full-Stack Developer and QA
              Tester passionate about building reliable web applications. I
              graduated with a BSIT degree from the University of Santo Tomas.
            </p>
            <p>
              I gained industry experience as a{" "}
              <strong>Quality Assurance Intern at ABS-CBN Corporation</strong>,
              where I tested features, documented bugs, and collaborated with
              developers to improve product quality. My capstone project,{" "}
              <strong>ArtDive</strong>, was a virtual museum web app created for
              the UST Museum, where I worked on both the front-end and back-end.
            </p>
            <p>
              Outside of tech, I enjoy playing guitar and exploring new
              technologies.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center justify-content-md-start">
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
