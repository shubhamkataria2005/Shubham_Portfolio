import React from "react";
import "./Projects.css";

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

const ExternalIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    featured: true,
    tags: [
      { label: "SaaS Product", cls: "tag-ai" },
      { label: "AWS Cloud", cls: "tag-ml" },
      { label: "★ Featured", cls: "tag-new" },
    ],
    title: "FieldFlow — Field Service Management SaaS",
    description:
      "Production SaaS platform for trades businesses (plumbers, electricians, HVAC). Managers schedule and dispatch jobs, technicians get a mobile portal, and customers track progress in real time via a unique link. Features Xero accounting OAuth2 integration, Stripe subscription billing, AI job insights via OpenAI, automated emails via Brevo, WebSocket live messaging, and a PWA for home-screen installation. Frontend on AWS S3 + CloudFront, backend on Elastic Beanstalk (EC2), database on RDS PostgreSQL — fully automated CI/CD via GitHub Actions.",
    stack: [
      "React", "Spring Boot", "AWS S3", "AWS CloudFront",
      "AWS Elastic Beanstalk", "AWS RDS", "Xero API",
      "Stripe", "OpenAI API", "WebSocket", "PWA", "GitHub Actions",
    ],
    liveUrl: "https://fieldflow.shubhamkataria.com",
    githubUrl: "https://github.com/shubhamkataria2005",
  },
  {
    featured: false,
    tags: [
      { label: "AI Platform", cls: "tag-ai" },
      { label: "Machine Learning", cls: "tag-ml" },
    ],
    title: "AI Car Dealership Platform",
    description:
      "A production-grade dual-platform marketplace — private seller marketplace meets managed dealership inventory. Features a live OpenAI-powered chatbot, TensorFlow CNN car brand recogniser (10 brands), Random Forest trade-in valuator trained on 92,661 records at 93% accuracy, real-time buyer–seller messaging via WebSocket, full purchase & payment flow, and a multi-role admin panel (User / Sales / Admin / Super Admin).",
    stack: [
      "React 19", "Spring Boot", "PostgreSQL", "TensorFlow",
      "scikit-learn", "OpenAI API", "WebSocket", "JWT Auth",
      "Python Flask", "Render",
    ],
    liveUrl: "https://ai-car-dealership-frontend.onrender.com",
    githubUrl: "https://github.com/shubhamkataria2005",
  },
  {
    tags: [{ label: "AI Platform", cls: "tag-ai" }],
    title: "Shubham AI Studio",
    description:
      "All-in-one AI platform featuring an intelligent chatbot backed by OpenAI, plus six ML tools for real-world tasks. Built end-to-end from a React frontend to a Java Spring Boot backend with PostgreSQL persistence.",
    stack: ["React", "Spring Boot", "OpenAI API", "PostgreSQL", "Machine Learning"],
    liveUrl: "https://shubham-ai-chatbot.netlify.app/",
    githubUrl: null,
  },
  {
    tags: [{ label: "Web App", cls: "tag-web" }],
    title: "Preloved Product Marketplace",
    description:
      "React-based e-commerce platform for buyers and sellers of pre-owned goods. Real-time data sync via Firebase, guest browsing support, and a clean responsive UI built with a focus on UX.",
    stack: ["React", "Node.js", "Firebase"],
    liveUrl: "https://preloved-54326--pr42-feature-guest-browsi-ne3jioro.web.app/",
    githubUrl: null,
  },
  {
    tags: [{ label: "Desktop App", cls: "tag-web" }],
    title: "Tutor Booking System",
    description:
      "C# .NET desktop application managing tutor–student scheduling, appointment tracking, and availability management with a MySQL relational database backend.",
    stack: ["C#", ".NET", "MySQL"],
    liveUrl: null,
    githubUrl: null,
    note: "Private repository",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-label reveal">Projects</div>
      <h2 className="section-title reveal">Things I've shipped</h2>
      <p className="section-sub reveal">
        From machine learning pipelines to full-stack platforms — real systems
        deployed for real users.
      </p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`project-card reveal${p.featured ? " featured" : ""}${
              !p.featured && i % 2 !== 0 ? " reveal-delay-1" : ""
            }`}
          >
            {/* Tags */}
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t.label} className={`project-tag ${t.cls}`}>
                  {t.label}
                </span>
              ))}
            </div>

            {/* Title */}
            <div className="project-title">{p.title}</div>

            {/* Description */}
            <p className="project-desc">{p.description}</p>

            {/* Stack */}
            <div className="project-stack">
              {p.stack.map((s) => (
                <span key={s} className="stack-item">
                  {s}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="project-footer">
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Live <ArrowIcon />
                </a>
              ) : (
                <span className="project-note">{p.note || "Coming soon"}</span>
              )}

              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link secondary"
                >
                  GitHub <ExternalIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
