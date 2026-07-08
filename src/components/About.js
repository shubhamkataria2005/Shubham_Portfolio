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
            My flagship project is <strong>FieldFlow</strong> — a live B2B SaaS for NZ
            trades businesses at{" "}
            <a href="https://fieldflow.shubhamkataria.com" target="_blank" rel="noreferrer" style={{color:"var(--accent)"}}>fieldflow.shubhamkataria.com</a>.
            It runs on <strong>AWS</strong> (Elastic Beanstalk, RDS, S3, CloudFront),
            integrates <strong>Xero OAuth2</strong> for accounting, <strong>Stripe</strong> for
            subscription billing, <strong>OpenAI + Pinecone RAG</strong> for AI insights,
            WebSocket real-time dispatch, PDF invoicing/quoting, and is installable as a PWA.
          </p>
          <p>
            I've also shipped an AI car dealership platform with a <strong>TensorFlow CNN</strong> car
            recogniser, a <strong>Random Forest</strong> trade-in valuator trained on 92,661 records
            at 93% accuracy, and a RAG chatbot — all deployed on AWS with full GitHub Actions CI/CD.
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
