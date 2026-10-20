import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="hero-inner">
        <div className="hero-badge">Available for opportunities</div>

        <h1 className="hero-name">
          Shubham
          <br />
          <span className="accent">Kataria</span>
        </h1>

        <p className="hero-role">
          <strong>Full-Stack Software Engineer</strong>
          <span className="separator">·</span>
          Java, Spring Boot &amp; React
          <span className="separator">·</span>
          Auckland, NZ
        </p>

        <p className="hero-desc">
          I build full-stack web applications with Java, Spring Boot and React —
          including ServiceCrown, a live job-management SaaS for New Zealand
          trade businesses. Final-year Bachelor of Information Technology
          student at Otago Polytechnic, graduating December 2026.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View My Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
          <a
            href="/Shubham_Kataria_CV.pdf"
            download="Shubham_Kataria_CV.pdf"
            className="btn-ghost"
          >
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-block">
            <div className="stat-num">1</div>
            <div className="stat-label">Live SaaS Product</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">2</div>
            <div className="stat-label">Business Sites Built</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">Dec 2026</div>
            <div className="stat-label">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
