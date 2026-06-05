import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Shubham_Kataria_CV.pdf";
    link.download = "Shubham_Kataria_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "About",    href: "#about" },
    { label: "Skills",   href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Awards",   href: "#awards" },
    { label: "Contact",  href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        SK<span>.</span>
      </a>

      <ul className={`nav-links${menuOpen ? " mobile-open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <button onClick={handleDownloadCV} className="nav-cv-btn">
            Download CV
          </button>
        </li>
      </ul>

      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
