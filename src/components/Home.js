import React from "react";
import "./Home.css";
// Served from public/ (not bundled) so index.html can preload them.
const PHOTO = `${process.env.PUBLIC_URL}/images/profile-560.jpg`;
const PHOTO_SMALL = `${process.env.PUBLIC_URL}/images/profile-280.jpg`;

const GITHUB_URL = "https://github.com/shubhamkataria2005";
const LINKEDIN_URL = "https://www.linkedin.com/in/shubham-kataria-2005-/";

const stack = ["Java", "Spring Boot", "Python", "FastAPI", "React", "AWS"];

const facts = [
  { term: "Based in", detail: "Auckland, New Zealand" },
  { term: "Studying", detail: "Bachelor of Information Technology, Otago Polytechnic Auckland · Expected graduation: December 2026" },
  { term: "Interning", detail: "Backend development in Python and FastAPI at AI Sentinels" },
  { term: "Building", detail: "ServiceCrown, a live production SaaS (Java, Spring Boot)" },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
  </svg>
);

function Home() {
  return (
    <section id="home" className="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow2" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-badge">Open to graduate &amp; junior roles</p>

          <h1 className="hero-name">
            Shubham <span className="accent">Kataria</span>
          </h1>

          <p className="hero-title">Backend &amp; Full-Stack Software Engineer</p>

          <ul className="hero-stack" aria-label="Core technologies">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="hero-intro">
            I build backend and full-stack software in Java and Python. I'm a
            Full Stack Software Engineer Intern at AI Sentinels and a Full-Stack
            Developer on ServiceCrown.
          </p>

          <dl className="hero-facts">
            {facts.map((f) => (
              <div key={f.term} className="hero-fact">
                <dt>{f.term}</dt>
                <dd>{f.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-actions">
            <a href="#servicecrown" className="btn-primary">
              View the ServiceCrown case study <ArrowIcon />
            </a>
            <a href="/Shubham_Kataria_CV.pdf" download="Shubham_Kataria_CV.pdf" className="btn-ghost">
              Download CV <DownloadIcon />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              <GitHubIcon /> GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              <LinkedInIcon /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img
            src={PHOTO}
            srcSet={`${PHOTO_SMALL} 280w, ${PHOTO} 560w`}
            sizes="(max-width: 900px) 112px, 270px"
            fetchpriority="high"
            alt="Shubham Kataria"
            width="560"
            height="674"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
