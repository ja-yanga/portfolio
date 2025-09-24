import React from "react";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="position-relative py-5"
      style={{ marginTop: "-120px" }} // overlap About section
    >
      <div className="container bg-white rounded-5 shadow-lg p-0 overflow-hidden">
        <div className="row text-center g-0">
          {/* Development */}
          <div className="col-md-4 p-5 bg-light border">
            <Image
              src="/undraw_dev-environment_n5by.svg"
              alt="Development Illustration"
              width={80}
              height={80}
              className="mb-3 bg-danger p-3 rounded-5"
            />
            <h5 className="mb-3 fw-bold">Development</h5>
            <p>
              I enjoy building clean, reliable web applications with modern
              technologies.
            </p>

            <h6 className="lead text-danger fw-normal">Languages</h6>
            <ul className="list-unstyled">
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>PHP</li>
              <li>Java</li>
              <li>C#</li>
              <li>Dart</li>
            </ul>

            <h6 className="lead text-danger fw-normal">
              Frameworks & Libraries
            </h6>
            <ul className="list-unstyled">
              <li>Next.js</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
              <li>Laravel</li>
              <li>ASP.NET MVC</li>
              <li>Flutter</li>
            </ul>

            <h6 className="lead text-danger fw-normal">Databases</h6>
            <ul className="list-unstyled">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
          </div>

          {/* QA & Testing */}
          <div className="col-md-4 p-5 bg-light border">
            <Image
              src="/undraw_data-analysis_b7cp.svg"
              alt="QA Illustration"
              width={80}
              height={80}
              className="mb-3 p-2 bg-danger rounded-5"
            />
            <h5 className="mb-3 fw-bold">QA & Testing</h5>
            <p>
              I focus on ensuring applications work correctly and deliver smooth
              user experiences.
            </p>

            <h6 className="lead text-danger fw-normal">Testing Types</h6>
            <ul className="list-unstyled">
              <li>Manual & Functional Testing</li>
              <li>Exploratory Testing</li>
              <li>Regression Testing</li>
              <li>Sanity Testing</li>
            </ul>

            <h6 className="lead text-danger fw-normal">Test Management</h6>
            <ul className="list-unstyled">
              <li>Test Design & Bug Tracking</li>
              <li>Defect Life Cycle Management</li>
            </ul>

            <h6 className="lead text-danger fw-normal">Automation</h6>
            <ul className="list-unstyled">
              <li>Robot Framework</li>
              <li>SeleniumLibrary</li>
            </ul>
          </div>

          {/* Tools & Others */}
          <div className="col-md-4 p-5 bg-light border">
            <Image
              src="/undraw_control-panel_j1wf.svg"
              alt="Tools Illustration"
              width={80}
              height={80}
              className="mb-3 p-2 bg-danger rounded-5"
            />
            <h5 className="mb-3 fw-bold">Tools & Platforms</h5>
            <p>
              I use various tools to improve workflow, design, and
              collaboration.
            </p>
            <h6 className="lead text-danger fw-normal">Version Control</h6>
            <ul className="list-unstyled">
              <li>Git / GitHub</li>
            </ul>

            <h6 className="lead text-danger fw-normal">Editors</h6>
            <ul className="list-unstyled">
              <li>VS Code</li>
            </ul>

            <h6 className="lead text-danger fw-normal">Design & UI</h6>
            <ul className="list-unstyled">
              <li>Figma</li>
            </ul>

            <h6 className="lead text-danger fw-normal">Testing & Analytics</h6>
            <ul className="list-unstyled">
              <li>Jira / Confluence</li>
              <li>Postman</li>
              <li>Google Analytics API</li>
              <li>Panolens API</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
