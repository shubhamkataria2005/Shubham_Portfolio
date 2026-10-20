import React from "react";
import "./Projects.css";

const GITHUB = "https://github.com/shubhamkataria2005";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ServiceCrown is presented separately as the featured case study.
const projects = [
  {
    id: "project-dealership",
    tags: ["Full-Stack", "Machine Learning"],
    title: "AI Car Dealership Platform",
    summary:
      "A car marketplace combining private seller listings with dealership inventory, with AI features served from separate Python services.",
    points: [
      "Spring Boot REST API with JWT authentication and role-based access for customer, sales, admin and super-admin users.",
      "Real-time buyer–seller messaging over WebSocket (STOMP), plus test-drive and service bookings.",
      "A simulated checkout: payments run in mock mode, so no real money is processed.",
      "OpenAI GPT-4o-mini chatbot with Pinecone retrieval (RAG), a TensorFlow/Keras CNN image classifier for car photos, and a scikit-learn Random Forest trade-in valuation model, both served as Flask APIs on Hugging Face Spaces.",
      "Ran on AWS (Elastic Beanstalk, S3 and CloudFront) in June–July 2026 before moving to Render.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "WebSocket", "OpenAI API", "TensorFlow", "scikit-learn"],
    status: { label: "Demo offline", tone: "offline" },
    note: "The backend isn't currently running, so the live demo is offline. The code is on GitHub.",
    links: [
      { label: "Backend repo", url: `${GITHUB}/aicar_dealership_backend`, kind: "repo" },
      { label: "Frontend repo", url: `${GITHUB}/AI_car_dealership_frontend`, kind: "repo" },
      { label: "ML services repo", url: `${GITHUB}/ai-chatbot-mlService`, kind: "repo" },
    ],
  },
  {
    id: "project-first-step",
    tags: ["Business Website", "Local SEO"],
    title: "First Step Renovations — Business Website",
    summary:
      "Marketing site for a Palmerston North renovation company, built and shipped end to end.",
    points: [
      "Static React and Vite site on Netlify with no backend; enquiries post to Web3Forms with client-side validation, send and error states, and a hidden spam trap.",
      "LocalBusiness structured data (address, phone, opening hours), sitemap, robots.txt and Open Graph tags all generated at build time from one content file, so the markup can't drift from the page.",
      "Custom .co.nz domain with automatic HTTPS; every URL variant 301-redirects to one canonical address.",
      "Every foreground/background colour pair contrast-checked to WCAG AA, and a sticky call bar on mobile for visitors who want to ring.",
    ],
    stack: ["React 19", "Vite", "Netlify", "Web3Forms", "Schema.org JSON-LD", "Google Search Console"],
    status: { label: "Live", tone: "live" },
    note: "Source code is private.",
    links: [
      { label: "View live site", url: "https://firststeprenovations.co.nz", kind: "live" },
    ],
  },
  {
    id: "project-bhavishya",
    tags: ["Business Platform", "Spring Boot"],
    title: "Bhavishya Oil — Business Platform",
    summary:
      "Storefront and ordering platform built for Bhavishya® Kachi Ghani Mustard Oil (Surender Kala & Sons Pvt. Ltd.), India.",
    points: [
      "Customers browse retail and wholesale packs, place orders and send distributor enquiries.",
      "JWT-secured admin dashboard for orders, enquiries and sales stats, with real-time messaging over WebSocket.",
      "The Spring Boot backend calls OpenAI for a chat assistant; a separate Python Flask service implements retrieval over a product knowledge base with OpenAI embeddings and Pinecone.",
      "Backend containerised with Docker and deployed to Azure App Service through Azure Container Registry and GitHub Actions; the site now runs on Render.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker", "Azure App Service", "GitHub Actions", "OpenAI API"],
    status: { label: "Storefront live · backend offline", tone: "partial" },
    note: "Ordering, admin and chat need the backend, which is currently offline.",
    links: [
      { label: "View storefront", url: "https://bhavishya-frontend.onrender.com", kind: "live" },
      { label: "Backend repo", url: `${GITHUB}/bhavishya_spring_backend`, kind: "repo" },
      { label: "Frontend repo", url: `${GITHUB}/bhavishya_frontend`, kind: "repo" },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-label reveal">Projects</div>
      <h2 className="section-title reveal">More projects</h2>
      <p className="section-sub reveal">
        A full-stack platform with machine-learning services, and sites built
        for real businesses.
      </p>

      <div className="projects-list">
        {projects.map((p) => (
          <article key={p.id} id={p.id} className="project-card reveal" aria-labelledby={`${p.id}-title`}>
            <div className="project-main">
              <ul className="project-tags" aria-label="Project type">
                {p.tags.map((t) => (
                  <li key={t} className="project-tag">{t}</li>
                ))}
              </ul>
              <h3 id={`${p.id}-title`} className="project-title">{p.title}</h3>
              <p className="project-summary">{p.summary}</p>
              <ul className="project-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>

            <div className="project-side">
              <p className={`project-status status-${p.status.tone}`}>{p.status.label}</p>

              <h4 className="project-side-label">Stack</h4>
              <ul className="project-stack">
                {p.stack.map((s) => (
                  <li key={s} className="stack-item">{s}</li>
                ))}
              </ul>

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
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>

              {p.note && <p className="project-note">{p.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
