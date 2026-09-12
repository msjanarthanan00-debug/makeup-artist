import { Link } from "react-router-dom";
import { site } from "../siteConfig.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-wordmark">{site.name}</p>
          <p className="footer-tagline">{site.tagline}</p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Contact</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
          <p className="footer-muted">{site.city}</p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Explore</p>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/contact#booking">Book a session</Link>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Follow</p>
          <a
            href={`https://instagram.com/${site.instagramHandle.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <hr className="hairline" />
        <p className="footer-legal">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
