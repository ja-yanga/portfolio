import React from "react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="d-flex align-items-center min-vh-100 bg-white"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Profile image */}
          <div className="col-md-4 text-md-center order-2 order-md-1 mb-4 mb-md-0 text-center">
            <Image
              src="/mainphoto.jpg"
              alt="Allen Yanga"
              width={350}
              height={350}
              className="rounded-circle shadow-lg img-fluid"
              priority
            />
          </div>

          {/* Intro text */}
          <div className="col-md-8 order-1 order-md-2 text-center text-md-start p-5">
            <h5 className="mb-2">👋 Hi, I’m Allen</h5>
            <h1 className="mb-3">
              Full-Stack Developer | QA Tester | Web Enthusiast
            </h1>
            <p className="lead fw-normal">
              I design, build, and test modern web apps with clean, reliable
              user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
