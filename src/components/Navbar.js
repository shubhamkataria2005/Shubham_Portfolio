import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "ServiceCrown", href: "#servicecrown" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Skills",       href: "#skills" },
  { label: "Education",    href: "#education" },
  { label: "Contact",      href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  // Escape closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        SK<span aria-hidden="true">.</span>
        <span className="sr-only"> Shubham Kataria, back to top</span>
      </a>

      <nav aria-label="Primary">
        <ul id="primary-nav" className={`nav-links${menuOpen ? " mobile-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Shubham_Kataria_CV.pdf"
              download="Shubham_Kataria_CV.pdf"
              className="nav-cv-btn"
              onClick={closeMenu}
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>

      <button
        ref={toggleRef}
        type="button"
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Navbar;
