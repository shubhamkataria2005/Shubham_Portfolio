import React from "react";
import "./Awards.css";

const awards = [
  {
    icon: "☁️",
    org: "Amazon Web Services",
    title: "AWS Academy Graduate — Cloud Foundations",
    year: "December 2025",
    description:
      "Completed the AWS Academy Cloud Foundations course covering AWS Architecture, core services, pricing, and support. Applied directly to production deployments across EC2, RDS, S3, CloudFront, IAM, and ACM.",
    certificateUrl: "https://www.credly.com/badges/138dcb38-25b3-41b9-9942-fefa6396c47a",
  },
  {
    icon: "🚀",
    org: "Self-Initiated Project",
    title: "FieldFlow — Production SaaS Launch",
    year: "2026",
    description:
      "Independently built and launched FieldFlow, a live B2B SaaS platform for NZ trades businesses. Full AWS stack (Elastic Beanstalk, RDS, S3, CloudFront), Xero OAuth2 accounting integration, Stripe subscription billing, Pinecone RAG AI, WebSocket real-time messaging, PWA, and fully automated GitHub Actions CI/CD.",
    certificateUrl: null,
  },
  {
    icon: "🌐",
    org: "Self-Initiated Project",
    title: "Production AWS Infrastructure Deployment",
    year: "2025",
    description:
      "Independently architected and deployed a full production AWS stack — EC2 via Elastic Beanstalk, RDS PostgreSQL, S3 + CloudFront with custom SSL via ACM, IAM roles, and a fully automated GitHub Actions CI/CD pipeline for both frontend and backend.",
    certificateUrl: null,
  },
  {
    icon: "🎓",
    org: "Udemy",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    year: "2025",
    description:
      "Comprehensive ML course covering regression, classification, clustering, deep learning, and NLP in Python and R. Applied knowledge to build TensorFlow CNN and Random Forest models used in production.",
    certificateUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-434598af-1700-443a-b661-c25bc5043b5b.jpg",
  },
  {
    icon: "🐳",
    org: "Microsoft Azure",
    title: "Production Deployment on Azure App Service",
    year: "2025",
    description:
      "Architected and deployed a Spring Boot backend on Azure App Service using Docker, Azure Container Registry, and a GitHub Actions CI/CD pipeline. Live at bhavishya-frontend.onrender.com.",
    certificateUrl: null,
  },
  {
    icon: "🤖",
    org: "Hugging Face",
    title: "ML Models Deployed on Hugging Face Spaces",
    year: "2025",
    description:
      "Deployed TensorFlow CNN car brand recogniser and Random Forest trade-in valuator (trained on 92,661 records at 93% accuracy) as live ML APIs on Hugging Face Spaces, serving predictions in production.",
    certificateUrl: null,
  },
  {
    icon: "🏆",
    org: "Otago Polytechnic Auckland",
    title: "Bachelor of Information Technology — Year 3",
    year: "2023 – Present",
    description:
      "Specialising in AI and software development. Consistently applying academic knowledge to real production systems — from AWS-deployed SaaS platforms to ML pipelines and cloud infrastructure.",
    certificateUrl: null,
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
