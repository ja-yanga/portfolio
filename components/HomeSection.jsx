import React from "react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-md-center order-1 order-md-2 mb-4 mb-md-0 text-center">
            <Image
              src="/mainphoto.jpg"
              alt="Allen Yanga"
              width={300}
              height={300}
              className="rounded-circle shadow-lg img-fluid"
              priority
            />
          </div>

          <div className="col-md-8 order-2 order-md-1">
            <h5 className="mb-2">👋 Hi, I’m Allen</h5>
            <h1 className="mb-3">
              I’m a Full-Stack Developer, QA Tester, and Web Enthusiast.
            </h1>
            <p className="lead">
              I design, build, and test modern web apps with clean, reliable
              user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
