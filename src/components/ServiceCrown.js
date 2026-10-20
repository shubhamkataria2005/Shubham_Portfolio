import React from "react";
import "./ServiceCrown.css";

const SITE_URL = "https://servicecrown.co.nz";
const SHOW_TODOS = process.env.NODE_ENV !== "production";

// Real product screenshots go here: { src, alt, caption }, imported from
// src/assets/servicecrown/. Leave empty rather than use mock-ups — the gallery
// is hidden in production builds while this list is empty.
const screenshots = [];

const contribution = [
  "Sole developer on the codebase: I designed and built the Spring Boot API, the React front end and the PostgreSQL schema.",
  "Set up the AWS hosting and the GitHub Actions pipelines that test, package and deploy each release.",
  "Integrated Stripe, Xero, Jobber and the OpenAI API, each with a deliberately limited scope.",
  "Wrote and maintain the automated test suites that every production deploy has to pass.",
];

const stackGroups = [
  { label: "Backend", items: ["Java 17", "Spring Boot 3", "Spring Security (JWT)", "REST APIs", "WebSocket (STOMP)"] },
  { label: "Frontend", items: ["React 19", "Vite", "React Router", "Installable PWA"] },
  { label: "Data", items: ["PostgreSQL", "Flyway migrations"] },
  { label: "Cloud", items: ["AWS Elastic Beanstalk", "Amazon RDS", "Amazon S3", "Amazon CloudFront"] },
  { label: "Integrations", items: ["Stripe", "Xero", "Jobber", "OpenAI API"] },
  { label: "Quality", items: ["JUnit", "Mockito", "Testcontainers", "React Testing Library", "GitHub Actions"] },
];

const challenges = [
  {
    title: "Letting an AI assistant act on business data safely",
    problem:
      "An assistant that can schedule work or send invoices can do real damage if it acts on a misunderstanding.",
    approach:
      "The assistant works through OpenAI tool calling over the business's own records. Sensitive tools — creating or scheduling a job, assigning a technician, creating or converting a quote, creating or sending an invoice — stop and wait for the user to confirm, and every tool call is written to an action log the owner can review.",
  },
  {
    title: "Keeping each business's data separate",
    problem:
      "Many businesses share one application and database, so no business should ever be able to read or change another's customers, jobs or invoices.",
    approach:
      "Data access is scoped to the signed-in business, and dedicated tests check that cross-business reads, edits and references are refused — including through the API and the accounting integration.",
  },
  {
    title: "Payments and integrations that don't double-count",
    problem:
      "Payment webhooks can arrive more than once, and accounting data must stay consistent across systems.",
    approach:
      "Stripe webhook signatures are verified, duplicate events are ignored and payment requests carry idempotency keys, so a retry can't charge or record twice. Integrations are deliberately one-directional — Xero receives invoices as drafts and Jobber is read-only — so ServiceCrown stays the source of truth. Xero OAuth tokens are encrypted at rest.",
  },
  {
    title: "Changing the schema without breaking production",
    problem:
      "A bad migration on a live database is hard to undo, and issued invoices must not change after the fact.",
    approach:
      "Flyway owns the schema and Hibernate only validates it. CI runs the migrations and integration tests against real PostgreSQL in Testcontainers, and production deploys are manual: a release with a migration needs a reviewed migration and a database snapshot first. GST amounts are snapshotted on quotes and invoices so later settings changes can't alter issued documents.",
  },
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
      <h2 className="section-title reveal">ServiceCrown</h2>
      <p className="sc-lead reveal">
        Field service management SaaS for New Zealand trade businesses.
      </p>

      <ul className="sc-meta reveal">
        <li className="sc-status">Live</li>
        <li>Operated by SERVICECROWN LIMITED, a registered New Zealand company</li>
        <li>Source code is private</li>
      </ul>

      <div className="sc-overview">
        <div className="sc-card reveal">
          <h3 className="sc-heading">The product</h3>
          <p>
            ServiceCrown is job-management software for New Zealand plumbers,
            electricians, HVAC technicians, builders and cleaners. It follows each
            job from the customer record through scheduling, quote, GST invoice and
            online payment, with technician timesheets and a payroll-ready export,
            job costing and reporting. It's live and open for sign-up with a
            15-day trial.
          </p>
          <h3 className="sc-heading">My contribution</h3>
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
          <p className="sc-quality">
            200+ backend test classes (JUnit and Mockito, with PostgreSQL integration
            tests in Testcontainers) and 100+ front-end test files run in GitHub
            Actions before any production deploy.
          </p>
        </div>
      </div>

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
          <strong>Delivery:</strong> GitHub Actions runs the test suites on every
          push; a manually approved job then deploys the API to Elastic Beanstalk
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
            <p className="sc-problem">
              <span>Problem</span>
              {c.problem}
            </p>
            <p className="sc-approach">
              <span>Approach</span>
              {c.approach}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceCrown;
