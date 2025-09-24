import React from "react";
import Nav from "../../components/Nav";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";

export default function HomePage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <HomeSection />
        <AboutSection />
      </main>
    </>
  );
}
