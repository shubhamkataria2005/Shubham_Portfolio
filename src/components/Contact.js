import React from "react";
import "./Contact.css";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="social-arrow"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const socialLinks = [
  {
    href: "https://github.com/shubhamkataria2005",
    iconClass: "github",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text)">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    sub: "github.com/shubhamkataria2005",
  },
  {
    href: "https://www.linkedin.com/in/shubham-kataria-2005-/",
    iconClass: "linkedin",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="#0077B5" />
      </svg>
    ),
    label: "LinkedIn",
    sub: "shubham-kataria-2005-",
  },
  {
    href: "https://shubhamkataria2005.github.io/Shubham_Portfolio",
    iconClass: "portfolio",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    label: "Portfolio",
    sub: "shubhamkataria2005.github.io",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        {/* ── Left: CTA ── */}
        <div className="reveal">
          <div className="section-label">Contact</div>
          <h2 className="contact-cta-heading">
            Let's build
            <br />
            something <span>great</span>
            <br />
            together.
          </h2>
          <p className="contact-sub">
            I'm open to internship opportunities, graduate roles, and
            interesting project collaborations. Drop me an email — I respond
            within 24 hours.
          </p>
          <a
            href="mailto:katariashubham0101@gmail.com"
            className="contact-email-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            katariashubham0101@gmail.com
          </a>
        </div>

        {/* ── Right: Social links ── */}
        <div className="social-links reveal reveal-delay-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <div className={`social-icon ${s.iconClass}`}>{s.icon}</div>
              <div className="social-info">
                <strong>{s.label}</strong>
                <span>{s.sub}</span>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
