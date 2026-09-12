import { Link } from "react-router-dom";
import { services } from "../siteConfig.js";
import "./Services.css";

export default function Services() {
  return (
    <section className="section services">
      <div className="container">
        <div className="services-head">
          <div>
            <p className="section-label">What I offer</p>
            <h2>Four ways to work together.</h2>
          </div>
          <Link to="/services" className="services-see-all">
            View full details &amp; pricing
          </Link>
        </div>

        <ul className="services-list">
          {services.map((s) => (
            <li key={s.slug} className="services-row">
              <div className="services-row-main">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
              <div className="services-row-meta">
                <span className="services-price">{s.price}</span>
                <span className="services-duration">{s.duration}</span>
              </div>
              <Link
                to={`/contact?service=${s.slug}#booking`}
                className="btn btn-ghost services-book"
              >
                Book
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
