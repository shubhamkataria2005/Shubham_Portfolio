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
            I'm a final-year <strong>Bachelor of Information Technology</strong>{" "}
            student at Otago Polytechnic, Auckland, graduating in December 2026.
            I build full-stack web applications — mostly Java and Spring Boot on
            the back end, React on the front end.
          </p>
          <p>
            I'm currently a <strong>Full Stack Software Engineer Intern at AI Sentinels</strong>.
            I've also built websites for two businesses:{" "}
            <a href="https://firststeprenovations.co.nz" target="_blank" rel="noreferrer" style={{color:"var(--accent)"}}>firststeprenovations.co.nz</a>{" "}
            for a renovation company in Palmerston North, and a storefront and
            ordering platform for Bhavishya, a mustard-oil brand in India.
          </p>
          <p>
            My main project is <strong>ServiceCrown</strong>{" "}
            (<a href="https://servicecrown.co.nz" target="_blank" rel="noreferrer" style={{color:"var(--accent)"}}>servicecrown.co.nz</a>),
            a live field-service management SaaS for New Zealand trade businesses.
            It handles jobs, scheduling, quotes and invoices, timesheets and
            reporting, with a <strong>Spring Boot</strong> REST API, <strong>PostgreSQL</strong>,
            a <strong>React</strong> front end and <strong>AWS</strong> hosting (Elastic
            Beanstalk, RDS, S3 and CloudFront). It takes payments through{" "}
            <strong>Stripe</strong>, includes an AI assistant that asks for confirmation
            before sensitive actions, and every production deploy is gated by an
            automated test suite.
          </p>
          <p>
            Before that I built an AI car dealership platform: a Spring Boot API
            with JWT authentication, role-based access and real-time messaging,
            plus a <strong>TensorFlow</strong> image classifier and a{" "}
            <strong>scikit-learn</strong> trade-in valuation model served as Python APIs.
          </p>
          <p>
            I'm looking for graduate and junior software engineering roles in
            New Zealand — backend or full-stack — where I can learn from an
            experienced team and keep shipping production software.
          </p>

          <div className="about-tags">
            <span className="about-tag">Java &amp; Spring Boot</span>
            <span className="about-tag">React</span>
            <span className="about-tag">REST APIs</span>
            <span className="about-tag">PostgreSQL</span>
            <span className="about-tag">AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
