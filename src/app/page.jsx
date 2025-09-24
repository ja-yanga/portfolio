import React from "react";
import Nav from "../../components/Nav";
import HomeSection from "../../components/HomeSection";

export default function HomePage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <HomeSection />
      </main>
    </>
  );
}
