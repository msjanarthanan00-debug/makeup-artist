import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { site } from "../siteConfig.js";
import "./Navbar.css";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change / resize back to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth > 760 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-wordmark" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">Toggle menu</span>
          <span className={`nav-toggle-bars ${open ? "is-open" : ""}`} aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact#booking" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Book a session
          </Link>
        </nav>
      </div>
    </header>
  );
}
