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

const GITHUB = "https://github.com/shubhamkataria2005";

const projects = [
  {
    featured: true,
    tags: [
      { label: "SaaS Product", cls: "tag-ai" },
      { label: "Live", cls: "tag-ml" },
      { label: "★ Featured", cls: "tag-new" },
    ],
    title: "ServiceCrown — Field Service Management SaaS",
    description:
      "A live job-management platform for New Zealand trade and service businesses — plumbers, electricians, HVAC technicians, builders and cleaners. It follows each job from the customer record through scheduling, quote, GST invoice and online payment, with technician timesheets and a payroll-ready CSV export, job costing and reporting. Stripe handles plan subscriptions and lets customers pay quotes and invoices online; Xero receives invoices as drafts, and the Jobber connection is read-only. An AI assistant built on OpenAI tool calling answers from the business's own records, pauses for the owner's confirmation before sensitive actions such as scheduling or sending an invoice, and records every action in an audit log. Spring Boot REST API on PostgreSQL with Flyway migrations, a React front end installable as a PWA, and AWS hosting on Elastic Beanstalk, RDS, S3 and CloudFront. GitHub Actions runs the JUnit and Testcontainers suite before every manually approved production deploy.",
    stack: [
      "Java 17", "Spring Boot 3", "Spring Security (JWT)", "PostgreSQL",
      "Flyway", "React 19", "Vite", "AWS Elastic Beanstalk", "AWS RDS",
      "AWS S3 + CloudFront", "Stripe", "Xero API", "Jobber API",
      "OpenAI API", "WebSocket (STOMP)", "JUnit + Testcontainers",
      "GitHub Actions",
    ],
    links: [
      { label: "View Live", url: "https://servicecrown.co.nz", kind: "live" },
    ],
    note: "Source code is private",
  },
  {
    featured: false,
    tags: [
      { label: "Full-Stack", cls: "tag-ai" },
      { label: "Machine Learning", cls: "tag-ml" },
    ],
    title: "AI Car Dealership Platform",
    description:
      "A car marketplace combining private seller listings with dealership inventory. The Spring Boot API covers JWT authentication with role-based access (customer, sales, admin and super admin), real-time buyer–seller messaging over WebSocket, test-drive and service bookings, and a simulated checkout — payments run in mock mode, so no real money is processed. AI features include an OpenAI GPT-4o-mini chatbot with Pinecone retrieval (RAG), a TensorFlow/Keras CNN image classifier for car photos, and a scikit-learn Random Forest model that estimates trade-in values; both models are served as Python Flask APIs on Hugging Face Spaces. It ran on AWS (Elastic Beanstalk, S3 and CloudFront) in June–July 2026 before moving to Render.",
    stack: [
      "Java", "Spring Boot", "Spring Security (JWT)", "PostgreSQL",
      "React 19", "Vite", "WebSocket (STOMP)", "OpenAI API", "Pinecone",
      "TensorFlow / Keras", "scikit-learn", "Python Flask",
      "Hugging Face Spaces", "Render",
    ],
    links: [
      { label: "Backend Repo", url: `${GITHUB}/aicar_dealership_backend`, kind: "repo" },
      { label: "Frontend Repo", url: `${GITHUB}/AI_car_dealership_frontend`, kind: "repo" },
      { label: "ML Services Repo", url: `${GITHUB}/ai-chatbot-mlService`, kind: "repo" },
    ],
    note: "Live demo offline — the backend isn't currently running",
  },
  {
    tags: [
      { label: "Business Website", cls: "tag-web" },
      { label: "Local SEO", cls: "tag-ml" },
    ],
    title: "First Step Renovations — Business Website",
    description:
      "Marketing site for a Palmerston North renovation company, built and shipped end to end. Static React and Vite on Netlify with no backend — enquiries post to Web3Forms and land directly in the owner's inbox, with client-side validation, send and error states and a hidden spam trap. Custom .co.nz domain with automatic HTTPS, and every URL variant 301-redirects to a single canonical address. Local search handled properly: LocalBusiness structured data carrying the address, phone and opening hours, plus sitemap, robots.txt and Open Graph tags all generated at build time from one content file, so the markup can never drift from the page. Every foreground/background colour pair contrast-checked to WCAG AA, and a sticky call bar on mobile because most visitors arrive on a phone wanting to ring someone.",
    stack: [
      "React 19", "Vite", "Netlify", "Web3Forms",
      "Schema.org JSON-LD", "Google Search Console",
      "CSS Custom Properties", "Continuous Deploy from GitHub",
    ],
    links: [
      { label: "View Live", url: "https://firststeprenovations.co.nz", kind: "live" },
    ],
  },
  {
    tags: [
      { label: "Business Platform", cls: "tag-web" },
      { label: "Spring Boot", cls: "tag-ml" },
    ],
    title: "Bhavishya Oil — Business Platform",
    description:
      "Storefront and ordering platform built for Bhavishya® Kachi Ghani Mustard Oil (Surender Kala & Sons Pvt. Ltd.), India. Customers browse retail and wholesale packs, place orders and send distributor enquiries; a JWT-secured admin dashboard manages orders, enquiries and sales stats, with real-time messaging over WebSocket. The Spring Boot backend calls OpenAI for a chat assistant, and a separate Python Flask service implements retrieval over a product knowledge base using OpenAI embeddings and Pinecone. The backend was containerised with Docker and deployed to Azure App Service through Azure Container Registry and GitHub Actions; the site now runs on Render.",
    stack: [
      "Java", "Spring Boot", "Spring Security (JWT)", "PostgreSQL", "React",
      "WebSocket (STOMP)", "OpenAI API", "Pinecone", "Python Flask",
      "Docker", "Azure App Service", "Azure Container Registry",
      "GitHub Actions", "Render",
    ],
    links: [
      { label: "View Storefront", url: "https://bhavishya-frontend.onrender.com", kind: "live" },
      { label: "Backend Repo", url: `${GITHUB}/bhavishya_spring_backend`, kind: "repo" },
      { label: "Frontend Repo", url: `${GITHUB}/bhavishya_frontend`, kind: "repo" },
    ],
    note: "Ordering, admin and chat need the backend, which is currently offline",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-label reveal">Projects</div>
      <h2 className="section-title reveal">Things I've shipped</h2>
      <p className="section-sub reveal">
        A live SaaS product, a full-stack platform with machine-learning
        services, and sites built for real businesses.
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
              <div className="project-links">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`project-link${l.kind === "repo" ? " secondary" : ""}`}
                  >
                    {l.label} {l.kind === "repo" ? <ExternalIcon /> : <ArrowIcon />}
                  </a>
                ))}
              </div>

              {p.note && <span className="project-note">{p.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
