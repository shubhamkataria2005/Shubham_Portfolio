import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServiceCrown from "./components/ServiceCrown";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll-reveal observer (skipped when the visitor prefers reduced motion)
    let observer;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => observer.observe(el));
    }

    // Active nav highlight on scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

    const handleScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach((a) => {
        const active = a.getAttribute("href") === "#" + current;
        a.classList.toggle("nav-active", active);
        if (active) a.setAttribute("aria-current", "location");
        else a.removeAttribute("aria-current");
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Home />
        <ServiceCrown />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© 2026 Shubham Kataria · Auckland, New Zealand</p>
        <p>
          Built with React{" "}
          <span className="heart" aria-hidden="true">♥</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
