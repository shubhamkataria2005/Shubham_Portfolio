import React from "react";
import "./About.css";

// If you have a profile photo, import it like:
// import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid reveal">
        {/* Image */}
        <div className="about-img-wrap">
          {/* Replace the placeholder below with:
              <img src={profile} alt="Shubham Kataria" />
              once you have the image in src/assets/ */}
          <div className="about-img-placeholder">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Driven by curiosity,
            <br />
            built on code.
          </h2>
          <p>
            I'm a <strong>third-year Bachelor of Information Technology</strong>{" "}
            student at Otago Polytechnic, Auckland — specialising in AI and
            full-stack development. I don't just study technology; I build with
            it.
          </p>
          <p>
            My projects span production-grade{" "}
            <strong>Spring Boot APIs</strong>,{" "}
            <strong>React frontends</strong>, custom{" "}
            <strong>ML pipelines</strong> in Python, and{" "}
            <strong>deployed cloud microservices</strong> — all engineered for
            real-world scale, not just coursework.
          </p>
          <p>
            My goal is to become a software engineer at the frontier of
            AI-native applications — systems that don't just use machine
            learning as a feature, but build intelligence into their core.
          </p>

          <div className="about-tags">
            <span className="about-tag">Machine Learning</span>
            <span className="about-tag">Full-Stack Engineering</span>
            <span className="about-tag">AI Integration</span>
            <span className="about-tag">Cloud Deployment</span>
            <span className="about-tag">REST APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
