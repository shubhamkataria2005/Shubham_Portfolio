import React from "react";
import "./Education.css";

const SHOW_TODOS = process.env.NODE_ENV !== "production";

const degree = {
  title: "Bachelor of Information Technology",
  org: "Otago Polytechnic Auckland",
  date: "2024 – Expected December 2026",
  description: "Final-year student, expecting to complete the degree in December 2026.",
  todo:
    "Optionally add 3–5 relevant papers from your transcript, e.g. software engineering, databases, cloud.",
};

const certifications = [
  {
    kind: "Training badge",
    title: "AWS Academy Graduate — Cloud Foundations",
    org: "AWS Academy",
    date: "Completed December 2025",
    description:
      "Training badge for completing the AWS Academy Cloud Foundations course, covering AWS architecture, core services, pricing and support.",
    link: {
      label: "View badge",
      url: "https://www.credly.com/badges/138dcb38-25b3-41b9-9942-fefa6396c47a",
    },
  },
  {
    kind: "Course certificate",
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]",
    org: "Udemy",
    date: "Completed November 2025",
    description:
      "43-hour course covering regression, classification, clustering, deep learning and NLP in Python and R.",
    link: {
      label: "View certificate",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-434598af-1700-443a-b661-c25bc5043b5b.jpg",
    },
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-label reveal">Education</div>
      <h2 className="section-title reveal">Education &amp; Certifications</h2>
      <p className="section-sub reveal">
        My degree, and the courses I've completed alongside it.
      </p>

      <div className="edu-grid">
        <article className="edu-card edu-degree reveal">
          <p className="edu-kicker">Degree</p>
          <h3 className="edu-title">{degree.title}</h3>
          <p className="edu-org">{degree.org}</p>
          <p className="edu-date">{degree.date}</p>
          <p className="edu-desc">{degree.description}</p>
          {SHOW_TODOS && <p className="content-todo">TODO (dev only): {degree.todo}</p>}
        </article>

        <div className="edu-certs">
          {certifications.map((c, i) => (
            <article key={c.title} className={`edu-card reveal${i ? " reveal-delay-1" : ""}`}>
              <p className="edu-kicker">{c.kind}</p>
              <h3 className="edu-title edu-title-sm">{c.title}</h3>
              <p className="edu-org">{c.org}</p>
              <p className="edu-date">{c.date}</p>
              <p className="edu-desc">{c.description}</p>
              <a href={c.link.url} target="_blank" rel="noreferrer" className="edu-link">
                {c.link.label} <ArrowIcon />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
