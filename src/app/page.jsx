import React from "react";
import Nav from "../../components/Nav";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";

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
      </main>
    </>
  );
}
