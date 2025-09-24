"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../styles/Projects.css";

export default function ProjectsSection() {
  const projects = [
    {
      title: "My Portfolio",
      description: "Portfolio Web App showcasing projects and skills.",
      images: ["/portfolio.png"],
      link: "https://jonallenyanga.vercel.app/",
      technologies: ["Next.js", "React.js", "Bootstrap", "CSS"],
      role: [
        "Designed and developed personal portfolio website",
        "Showcases projects, skills, and work experience",
        "Responsive layout for desktop and mobile",
      ],
    },
    {
      title: "ArtDive",
      description:
        "360° Virtual Museum Tour for UST Museum with interactive features and 360° navigation.",
      images: [
        "/artdive.png",
        "/artdive1.png",
        "/artdive2.png",
        "/artdive3.png",
        "/artdive4.png",
      ],
      link: "https://artdive.vercel.app/",
      technologies: [
        "Next.js, React.js, Panolens API",
        "MongoDB Backend",
        "Bootstrap, Custom CSS",
        "Google Analytics API",
      ],
      role: [
        "Full-Stack Web Developer",
        "Built interactive 360° virtual tour",
        "Developed responsive CMS for content management",
        "Integrated media-rich content and conducted UAT for feedback",
        "Implemented Google Login for authentication",
      ],
    },
    {
      title: "VLCT Portal",
      description:
        "An E-commerce website for managing users, orders, and inventory.",
      images: [
        "/vlct.png",
        "/vlct1.png",
        "/vlct2.png",
        "/vlct3.png",
        "/vlct4.png",
      ],
      technologies: [
        "Next.js, React.js, Bootstrap",
        "MongoDB Database",
        "Axios for data fetching",
        "GitHub for version control",
      ],
      role: [
        "Full-Stack Web Developer",
        "Developed front-end and back-end components",
        "Built admin dashboard for user/order/inventory management",
        "Ensured responsive design across devices",
      ],
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
      <div className="container mb-5">
        <h2 className="mb-5 text-center">My Recent Projects</h2>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="col-md-4"
              onClick={() => setSelectedProject(project)}
            >
              <div className="card h-100 shadow-sm bg-dark p-3 text-light project-card">
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

                  {/* Tech badges */}
                  <div className="d-flex flex-wrap justify-content-center gap-1 mt-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="badge bg-danger text-light">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="badge bg-danger">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
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
                <div className="modal-header d-flex justify-content-between align-items-center">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <div className="d-flex gap-2">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-danger btn-sm"
                      >
                        View Project
                      </a>
                    )}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>
                </div>

                <div className="modal-body">
                  {/* Carousel / Single Image */}
                  <div className="position-relative mb-3 text-center">
                    <Image
                      src={selectedProject.images[currentImage]}
                      alt={`${selectedProject.title} ${currentImage + 1}`}
                      width={800}
                      height={450}
                      className="img-fluid border border-2"
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                          onClick={prevImage}
                        >
                          ◀
                        </button>
                        <button
                          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                          onClick={nextImage}
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>

                  {/* Project Overview */}
                  <p className="mb-4">{selectedProject.description}</p>

                  {/* Technologies Used */}
                  {selectedProject.technologies && (
                    <div className="mb-3">
                      <h6 className="fw-bold">Technologies Used:</h6>
                      <ul className="text-start">
                        {selectedProject.technologies.map((tech, idx) => (
                          <li key={idx}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Role / Contributions */}
                  {selectedProject.role && (
                    <div className="mb-3">
                      <h6 className="fw-bold">Role & Contributions:</h6>
                      <ul className="text-start">
                        {selectedProject.role.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
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
