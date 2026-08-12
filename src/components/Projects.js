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
      "Production B2B SaaS for NZ trades businesses (plumbers, electricians, HVAC). Managers get a real-time dispatch board with drag-and-drop scheduling; technicians get a dedicated mobile portal for one-tap job updates; customers track progress live via a unique link. Integrates Xero OAuth2 (auto-syncs invoices & contacts with token rotation), Stripe subscription billing (Starter / Pro / Business tiers with webhook enforcement), OpenAI GPT-4o-mini with Pinecone RAG for AI job insights, and Brevo SMTP for automated job-status emails. Generates GST-inclusive branded PDFs for invoices and quotes. PWA-enabled for home-screen installation. Frontend on AWS S3 + CloudFront, backend on Elastic Beanstalk (EC2), database on RDS PostgreSQL — fully automated CI/CD via GitHub Actions.",
    stack: [
      "React 19", "Spring Boot 3.1.5", "AWS S3", "AWS CloudFront",
      "AWS Elastic Beanstalk", "AWS RDS (PostgreSQL)",
      "Xero OAuth2", "Stripe", "OpenAI GPT-4o-mini", "Pinecone RAG",
      "WebSocket (STOMP)", "OpenPDF", "PWA", "GitHub Actions",
    ],
    liveUrl: "https://fieldflow.shubhamkataria.com",
    githubUrl: "https://github.com/shubhamkataria2005",
  },
  {
    featured: false,
    tags: [
      { label: "AI Platform", cls: "tag-ai" },
      { label: "Machine Learning", cls: "tag-ml" },
      { label: "AWS Cloud", cls: "tag-new" },
    ],
    title: "AI Car Dealership Platform",
    description:
      "Production-grade dual-platform marketplace on AWS — private seller listings meet managed dealership inventory. Features a RAG-powered OpenAI chatbot (GPT-4o-mini + Pinecone), TensorFlow CNN car brand recogniser (10 brands, 150×150px input), Random Forest trade-in valuator trained on 92,661 NZ auto records at 93% accuracy, real-time buyer–seller WebSocket messaging, service appointments, test drive booking, and a multi-role admin panel (Customer / Sales / Admin / Super Admin). ML models deployed as Flask APIs on Hugging Face Spaces and Render. Backend on Elastic Beanstalk (EC2), RDS PostgreSQL, S3 + CloudFront with ACM SSL.",
    stack: [
      "React 19", "Spring Boot 3.1.5", "AWS EC2", "AWS RDS", "AWS S3",
      "AWS CloudFront", "AWS ACM", "TensorFlow / Keras",
      "scikit-learn", "OpenAI GPT-4o-mini", "Pinecone RAG",
      "Python Flask", "WebSocket", "GitHub Actions",
    ],
    liveUrl: "https://dealership.shubhamkataria.com",
    githubUrl: "https://github.com/shubhamkataria2005",
  },
  {
    tags: [
      { label: "Client Work", cls: "tag-web" },
      { label: "Local SEO", cls: "tag-ml" },
    ],
    title: "First Step Renovations — Business Website",
    description:
      "Marketing site for a Palmerston North renovation company, built and shipped end to end. Static React/Vite on Netlify with no backend — enquiries post to Web3Forms and land directly in the owner's inbox, with client-side validation, send/error states and a hidden spam trap. Custom .co.nz domain with automatic HTTPS and every URL variant 301'd to a single canonical address. Local search handled properly: LocalBusiness structured data carrying the address, phone and opening hours, plus sitemap, robots.txt and Open Graph tags all generated at build time from one content file, so the markup can never drift from the page. Every foreground/background pair contrast-checked to WCAG AA, and a sticky call bar on mobile because most visitors arrive on a phone wanting to ring someone.",
    stack: [
      "React 19", "Vite 8", "Netlify", "Web3Forms",
      "Schema.org JSON-LD", "Google Search Console",
      "CSS Custom Properties", "GitHub CI/CD",
    ],
    liveUrl: "https://firststeprenovations.co.nz",
    githubUrl: null,
  },
  {
    tags: [
      { label: "Business Website", cls: "tag-web" },
      { label: "Azure Cloud", cls: "tag-ml" },
    ],
    title: "Bhavishya Oil — Business Platform",
    description:
      "Full-stack business platform for Bhavishya® Kachi Ghani Mustard Oil (Surender Kala & Sons Pvt. Ltd.). Features a product catalogue for retail (200ml–2L) and wholesale (15L/15kg tin) orders, a distributor enquiry system, real-time admin messaging via WebSocket, JWT-secured admin dashboard with order management and live stats, and an AI chat assistant powered by OpenAI with a RAG knowledge base. Spring Boot backend deployed to Azure App Service via Docker and Azure Container Registry with a fully automated GitHub Actions CI/CD pipeline.",
    stack: [
      "React", "Spring Boot 3.1.5", "Python Flask", "PostgreSQL",
      "Azure App Service", "Azure Container Registry", "Docker",
      "GitHub Actions", "JWT Auth", "WebSocket (STOMP)", "OpenAI RAG",
    ],
    liveUrl: "https://bhavishya-frontend.onrender.com",
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
