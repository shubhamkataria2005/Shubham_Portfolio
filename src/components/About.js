import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid reveal">
        {/* Image */}
        <div className="about-img-wrap">
          <img src={profile} alt="Shubham Kataria" />
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
            My latest project is <strong>FieldFlow</strong> — a live SaaS platform
            for NZ trades businesses at{" "}
            <a href="https://fieldflow.shubhamkataria.com" target="_blank" rel="noreferrer" style={{color:"var(--accent)"}}>fieldflow.shubhamkataria.com</a>.
            It's built on <strong>AWS</strong> (Elastic Beanstalk, RDS, S3, CloudFront)
            with Xero OAuth2, Stripe billing, real-time WebSocket messaging, and a PWA
            for mobile install. I've also shipped an AI car dealership platform with
            TensorFlow, OpenAI, and a Random Forest valuator trained on 92,661 records.
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
