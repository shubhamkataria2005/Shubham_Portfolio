import React from "react";
import "./Awards.css";

const credentials = [
  {
    icon: "🎓",
    org: "Otago Polytechnic, Auckland",
    title: "Bachelor of Information Technology",
    date: "Expected December 2026",
    description:
      "Final-year student, expecting to complete the degree in December 2026.",
    link: null,
  },
  {
    icon: "☁️",
    org: "AWS Academy",
    title: "AWS Academy Graduate — Cloud Foundations",
    date: "Completed December 2025",
    description:
      "Training badge for completing the AWS Academy Cloud Foundations course, covering AWS architecture, core services, pricing and support.",
    link: {
      label: "View Badge",
      url: "https://www.credly.com/badges/138dcb38-25b3-41b9-9942-fefa6396c47a",
    },
  },
  {
    icon: "📘",
    org: "Udemy",
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]",
    date: "Completed November 2025",
    description:
      "43-hour course covering regression, classification, clustering, deep learning and NLP in Python and R.",
    link: {
      label: "View Certificate",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-434598af-1700-443a-b661-c25bc5043b5b.jpg",
    },
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function Awards() {
  return (
    <section id="education" className="awards">
      <div className="section-label reveal">Education</div>
      <h2 className="section-title reveal">Education &amp; Certifications</h2>
      <p className="section-sub reveal">
        My degree, and the courses I've completed alongside it.
      </p>

      <div className="awards-grid">
        {credentials.map((c, i) => (
          <div
            key={c.title}
            className={`award-card reveal${i > 0 ? " reveal-delay-1" : ""}`}
          >
            <div className="award-icon">{c.icon}</div>
            <div className="award-org">{c.org}</div>
            <div className="award-title">{c.title}</div>
            <div className="award-year">📅 {c.date}</div>
            <p className="award-desc">{c.description}</p>
            {c.link && (
              <a
                href={c.link.url}
                target="_blank"
                rel="noreferrer"
                className="award-link"
              >
                {c.link.label} <ArrowIcon />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
