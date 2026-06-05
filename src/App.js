import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    // Scroll-reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    // Active nav highlight on scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

    const handleScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach((a) => {
        a.classList.toggle(
          "nav-active",
          a.getAttribute("href") === "#" + current
        );
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      els.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <footer className="site-footer">
        <p>© 2026 Shubham Kataria. All rights reserved.</p>
        <p>
          Built with <span style={{ color: "var(--accent)" }}>♥</span> in
          Auckland, NZ
        </p>
      </footer>
    </div>
  );
}

export default App;
