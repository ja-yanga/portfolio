"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "My Portfolio",
      description: "Portfolio Web App made with Next.js (React.js Framework)",
      images: ["/portfolio.png"],
      link: "/",
    },
    {
      title: "ArtDive",
      description:
        "360° Virtual Museum Tour for UST Museum using Next.js, React, Panolens API, and MongoDB backend.",
      images: [
        "/artdive.png",
        "/artdive1.png",
        "/artdive2.png",
        "/artdive3.png",
        "/artdive4.png",
      ],
      link: "#",
    },
    {
      title: "VLCT Portal",
      description:
        "E-commerce website with Next.js, React, MongoDB, and Bootstrap.",
      images: ["/vlct1.png"], // normalize to array
      link: "#",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImage(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-5 text-center">Recent Projects</h2>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="col-md-4"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card h-100 shadow-sm bg-danger p-1 text-light">
                <div
                  className="position-relative"
                  style={{ width: "100%", paddingTop: "56.25%" }}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover", borderRadius: "0.30rem" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <div className="position-relative">
                    <Image
                      src={selectedProject.images[currentImage]}
                      alt={`${selectedProject.title} ${currentImage + 1}`}
                      width={800}
                      height={450}
                      className="img-fluid mb-3"
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          className="btn btn-danger position-absolute top-50 start-0 translate-middle-y"
                          onClick={prevImage}
                        >
                          ◀
                        </button>
                        <button
                          className="btn btn-danger position-absolute top-50 end-0 translate-middle-y"
                          onClick={nextImage}
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>

                  <p>{selectedProject.description}</p>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
