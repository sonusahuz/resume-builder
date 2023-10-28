import React from "react";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../components/layout/Footer";

export default function Main() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
