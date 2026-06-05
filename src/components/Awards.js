import React from "react";
import "./Awards.css";

const awards = [
  {
    icon: "🎓",
    org: "Udemy",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    year: "2025",
    description:
      "Comprehensive machine learning course covering Python, R, and key ML algorithms including regression, classification, clustering, deep learning, and NLP.",
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-434598af-1700-443a-b661-c25bc5043b5b.jpg",
  },
  // Add more awards here as you earn them:
  // {
  //   icon: "🏆",
  //   org: "Organisation Name",
  //   title: "Award or Certificate Title",
  //   year: "2025",
  //   description: "Brief description of what this award/certificate represents.",
  //   certificateUrl: "https://...",
  // },
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
    <section id="awards" className="awards">
      <div className="section-label reveal">Recognition</div>
      <h2 className="section-title reveal">Awards &amp; Certifications</h2>
      <p className="section-sub reveal">
        Continuous learning, formally recognised.
      </p>

      <div className="awards-grid">
        {awards.map((award, i) => (
          <div
            key={i}
            className={`award-card reveal${i > 0 ? " reveal-delay-1" : ""}`}
          >
            <div className="award-icon">{award.icon}</div>
            <div className="award-org">{award.org}</div>
            <div className="award-title">{award.title}</div>
            <div className="award-year">📅 Completed {award.year}</div>
            <p className="award-desc">{award.description}</p>
            {award.certificateUrl && (
              <a
                href={award.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="award-link"
              >
                View Certificate <ArrowIcon />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
