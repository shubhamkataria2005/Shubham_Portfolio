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
          <strong>Software Engineer</strong>
          <span className="separator">·</span>
          AI &amp; Full-Stack Development
          <span className="separator">·</span>
          Auckland, NZ
        </p>

        <p className="hero-desc">
          Building intelligent, production-grade applications at the intersection
          of modern web engineering and machine learning. Currently pursuing BIT
          at Otago Polytechnic.
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
        </div>

        <div className="hero-stats">
          <div className="stat-block">
            <div className="stat-num">
              5<span>+</span>
            </div>
            <div className="stat-label">Projects Deployed</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">
              3<span>+</span>
            </div>
            <div className="stat-label">Years Studying IT</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">
              15<span>+</span>
            </div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">
              2<span>+</span>
            </div>
            <div className="stat-label">Cloud Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
