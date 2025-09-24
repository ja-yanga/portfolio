import React from "react";
import Nav from "../../components/Nav";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactsSection from "../../components/ContactsSection";

export default function HomePage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
    </>
  );
}
