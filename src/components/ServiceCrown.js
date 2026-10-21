import React from "react";
import "./ServiceCrown.css";

const SITE_URL = "https://servicecrown.co.nz";
const SHOW_TODOS = process.env.NODE_ENV !== "production";

// Real product screenshots go here: { src, alt, caption }, imported from
// src/assets/servicecrown/. Leave empty rather than use mock-ups — the gallery
// is hidden in production builds while this list is empty.
const screenshots = [];

const contribution = [
  "Built REST APIs and responsive workflows for customers, jobs, scheduling, recurring jobs, quotes, invoicing, customer intake and technician timesheets.",
  "Implemented Stripe Connect payment workflows covering account onboarding, upfront payments, deposits, invoice-balance payments, payment status handling and full refunds.",
  "Developed payroll-ready weekly timesheets with submission, approval, rejection, reopening and CSV export.",
  "Built field evidence workflows with image validation, secure AWS S3 storage and malware-scanning controls.",
  "Integrated the OpenAI API to provide an AI assistant that works with business records and requests confirmation before selected sensitive operations.",
  "Developed job costing, purchase-order workflows, reporting and integrations with Xero and Jobber.",
  "Configured AWS hosting, database migrations, automated tests and GitHub Actions deployment workflows."
];

const stackGroups = [
  { label: "Backend", items: ["Java 17", "Spring Boot 3", "Spring Security (JWT)", "REST APIs", "WebSocket (STOMP)"] },
  { label: "Frontend", items: ["React 19", "Vite", "React Router", "Installable PWA"] },
  { label: "Data", items: ["PostgreSQL", "Flyway migrations"] },
  { label: "Cloud", items: ["AWS Elastic Beanstalk", "Amazon RDS", "Amazon S3", "Amazon CloudFront"] },
  { label: "Integrations", items: ["Stripe Connect", "Stripe Billing", "Xero", "Jobber", "OpenAI API"] },
  { label: "Quality", items: ["JUnit", "Mockito", "Testcontainers", "React Testing Library", "GitHub Actions"] },
];

const challenges = [
  {
    "title": "AI-assisted operations with human confirmation",
    "paragraphs": [
      "The AI assistant uses OpenAI tool calling to interact with business records. Seven sensitive actions require explicit user confirmation: scheduling or completing a job, assigning a technician, creating a quote, converting a quote into a job, and creating or sending an invoice.",
      "Tool calls are logged for auditing, including read operations, proposed actions and their outcomes."
    ]
  },
  {
    "title": "Secure multi-tenant architecture",
    "paragraphs": [
      "Backend APIs enforce business-level data isolation so authenticated users cannot access or modify another business's records. Security testing includes attempts to access records across business boundaries.",
      "Authentication uses Spring Security and JWT, while integration credentials are encrypted at rest."
    ]
  },
  {
    "title": "Payment reliability",
    "paragraphs": [
      "Stripe Connect enables businesses to accept payments through their connected accounts. Payment workflows include webhook signature verification, duplicate-event handling and idempotency protections.",
      "Customers can pay the full amount upfront, pay a fixed or percentage-based deposit, or pay the remaining invoice balance online. The implemented refund workflow supports full refunds."
    ]
  },
  {
    "title": "Database and deployment reliability",
    "paragraphs": [
      "Flyway manages database schema migrations, while Hibernate validates the schema. Backend tests include PostgreSQL integration tests using Testcontainers.",
      "GitHub Actions runs automated checks on pushes and pull requests to main. Production releases use manually initiated deployment workflows, with database migration review and backup procedures."
    ]
  }
];

const integrations = [
  {
    "label": "Stripe Connect",
    "detail": "Connected-account onboarding, customer payments, deposits, invoice-balance payments and full refunds."
  },
  {
    "label": "Stripe Billing",
    "detail": "SaaS subscriptions and plan management."
  },
  {
    "label": "OpenAI API",
    "detail": "AI assistant with tool calling, confirmation controls and audit logging."
  },
  {
    "label": "Xero",
    "detail": "Accounting integration that exports invoices as drafts."
  },
  {
    "label": "Jobber",
    "detail": "Read-only integration implemented in the application."
  }
];

const architecture = [
  {
    tier: "Clients",
    nodes: [{ name: "Browser or installed PWA", detail: "Business owners, technicians and their customers" }],
  },
  {
    tier: "Edge",
    nodes: [{ name: "Amazon CloudFront", detail: "HTTPS for the web app and the API" }],
  },
  {
    tier: "Application",
    nodes: [
      { name: "Amazon S3", detail: "React + Vite front end (static build)" },
      { name: "AWS Elastic Beanstalk", detail: "Spring Boot REST API" },
    ],
  },
  {
    tier: "Data & services",
    nodes: [
      { name: "Amazon RDS", detail: "PostgreSQL, schema managed by Flyway" },
      { name: "Stripe · Xero · Jobber · OpenAI", detail: "Payments, accounting export, read-only job data, AI assistant" },
    ],
  },
];

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function ServiceCrown() {
  return (
    <section id="servicecrown" className="sc">
      <div className="section-label reveal">Featured Project</div>
      <h2 className="section-title reveal">ServiceCrown — Full-Stack SaaS Platform</h2>
      <p className="sc-lead reveal">
        Full-Stack SaaS Platform | Live Product
      </p>

      <ul className="sc-meta reveal">
        <li className="sc-status">Live</li>
        <li>Full-Stack Software Development — Unpaid Contribution</li>
        <li>Operated by SERVICECROWN LIMITED, a registered New Zealand company</li>
        <li>Source code is private</li>
      </ul>

      <div className="sc-overview">
        <div className="sc-card reveal">
          <h3 className="sc-heading">The product</h3>
          <p>{"ServiceCrown is a live field service management SaaS platform for New Zealand trade businesses. It helps businesses manage customer enquiries, scheduling, recurring jobs, quotes, GST invoices, online payments, technician timesheets and operational reporting in one application."}</p>
          <p>{"The platform supports customer quote acceptance through secure links, Stripe Connect payments for full upfront amounts or deposits, online invoice-balance payments and full refunds. It also includes field photo evidence, payroll-ready timesheet exports, job costing, purchase orders, supplier receiving and profitability reporting."}</p>
          <h3 className="sc-heading">My contribution</h3>
          <p>{"I designed and developed ServiceCrown across its React frontend, Spring Boot backend and PostgreSQL database."}</p>
          <ul className="sc-list">
            {contribution.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a href={SITE_URL} target="_blank" rel="noreferrer" className="btn-primary sc-cta">
            Visit servicecrown.co.nz <ExternalIcon />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="sc-card sc-stack reveal reveal-delay-1">
          <h3 className="sc-heading">Stack</h3>
          <dl>
            {stackGroups.map((g) => (
              <div key={g.label} className="sc-stack-row">
                <dt>{g.label}</dt>
                <dd>
                  <ul className="sc-chips">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <h3 className="sc-heading">Product integrations</h3>
          <dl>
            {integrations.map((integration) => (
              <div key={integration.label} className="sc-stack-row">
                <dt>{integration.label}</dt>
                <dd>{integration.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="sc-quality">{"The project includes more than 200 backend test classes and more than 100 frontend test files, covering application workflows, security, payment handling and database integration."}</p>
        </div>
      </div>

      <p className="sc-lead reveal">{"Live at https://servicecrown.co.nz. Public registration is open, with a 15-day Business-plan trial. Feature access depends on the selected subscription plan."}</p>

      {screenshots.length > 0 ? (
        <div className="sc-gallery reveal">
          {screenshots.map((s) => (
            <figure key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        SHOW_TODOS && (
          <p className="content-todo">
            TODO: add real ServiceCrown product screenshots (for example the
            schedule, a job, and a GST invoice) to the <code>screenshots</code> list
            in ServiceCrown.js. This placeholder only shows in development.
          </p>
        )
      )}

      <figure className="sc-arch reveal">
        <h3 className="sc-heading">Architecture overview</h3>
        <ol className="sc-tiers">
          {architecture.map((t) => (
            <li key={t.tier} className="sc-tier">
              <span className="sc-tier-label">{t.tier}</span>
              <ul className="sc-nodes">
                {t.nodes.map((n) => (
                  <li key={n.name} className="sc-node">
                    <strong>{n.name}</strong>
                    <span>{n.detail}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="sc-delivery">
          <strong>Delivery:</strong> GitHub Actions runs the test suites on pushes and pull requests to
          main; a manually initiated workflow deploys the API to Elastic Beanstalk
          and the front end to S3 and CloudFront.
        </p>
        <figcaption>
          High-level overview. Account-specific configuration and security
          details are intentionally left out.
        </figcaption>
      </figure>

      <h3 className="sc-subtitle reveal">Engineering challenges</h3>
      <div className="sc-challenges">
        {challenges.map((c, i) => (
          <article key={c.title} className={`sc-challenge reveal${i % 2 ? " reveal-delay-1" : ""}`}>
            <h4>{c.title}</h4>
            {c.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceCrown;
