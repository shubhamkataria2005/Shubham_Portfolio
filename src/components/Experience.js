import React from "react";
import "./Experience.css";

const SHOW_TODOS = process.env.NODE_ENV !== "production";

// Points come from an audit of my internship contributions (git history,
// merged pull requests and source). Title, dates and "Remote" come from the
// CV. Keep internal project names, clients and implementation details out.
const roles = [
  {
    title: "Full Stack Software Engineer Intern",
    org: "AI Sentinels",
    meta: "Auckland, NZ · Remote",
    dates: "Aug 2026 – Present",
    summary:
      "Backend development in Python and FastAPI on an AI-assisted platform for processing financial documents.",
    points: [
      "Added 11 REST API endpoints in FastAPI with typed Pydantic contracts for invoice processing, including per-field human review, reconciliation, duplicate detection and Excel export of reviewed values.",
      "Built OCR and multi-model AI extraction with a consensus check: when results disagree a third reader is consulted, and uncertain financial values are flagged for human review instead of being guessed.",
      "Built tax-document indexing with per-field evidence scoring and plain-language explanations for reviewers, evaluated against accountant-annotated reference documents.",
      "Traced slow API requests to repeated reloads of a large PostgreSQL JSONB snapshot and added revision-checked caching. Backed my changes with pytest regression tests and shipped them through 21 merged pull requests with senior-engineer code review.",
    ],
    stack: ["Python", "FastAPI", "Pydantic", "PostgreSQL", "pytest", "OCR", "OpenRouter"],
  },
];

// Dates show the year only: the code history (Aug 2026 for First Step,
// Jun 2026 for Bhavishya) and the CV disagree, so confirm before adding months.
const clientProjects = [
  {
    title: "Business website",
    org: "First Step Renovations",
    meta: "Palmerston North, NZ",
    dates: "2026",
    summary:
      "Designed and built the company's marketing site and took it live on its own .co.nz domain, with local-search structured data and a working enquiry form.",
    href: "#project-first-step",
  },
  {
    title: "Storefront and ordering platform",
    org: "Bhavishya Oil (Surender Kala & Sons Pvt. Ltd.)",
    meta: "India",
    dates: "2026",
    summary:
      "Built a React storefront with a Spring Boot backend for orders, distributor enquiries and an admin dashboard.",
    href: "#project-bhavishya",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-label reveal">Experience</div>
      <h2 className="section-title reveal">Experience</h2>
      <p className="section-sub reveal">
        My current internship, and websites I've built for real businesses.
      </p>

      <h3 className="exp-group reveal">Internship</h3>
      <ol className="exp-list">
        {roles.map((r) => (
          <li key={r.title + r.org} className="exp-item reveal">
            <p className="exp-dates">{r.dates}</p>
            <div className="exp-body">
              <h4 className="exp-title">{r.title}</h4>
              <p className="exp-org">
                {r.org} <span>· {r.meta}</span>
              </p>
              {r.summary && <p className="exp-summary">{r.summary}</p>}
              {r.points.length > 0 && (
                <ul className="exp-points">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {r.stack && (
                <ul className="exp-stack" aria-label="Technologies used">
                  {r.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
              {SHOW_TODOS && r.points.length === 0 && r.todo && (
                <p className="content-todo">TODO (dev only): {r.todo}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="exp-group reveal">Client projects</h3>
      <ol className="exp-list">
        {clientProjects.map((p) => (
          <li key={p.org} className="exp-item reveal">
            <p className="exp-dates">{p.dates}</p>
            <div className="exp-body">
              <h4 className="exp-title">{p.title}</h4>
              <p className="exp-org">
                {p.org} <span>· {p.meta}</span>
              </p>
              <p className="exp-summary">{p.summary}</p>
              <a href={p.href} className="exp-link">
                Project details<span className="sr-only">: {p.org}</span>{" "}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
