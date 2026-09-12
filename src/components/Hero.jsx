import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="section-label">Makeup artistry, on your terms</p>
          <h1>
            Makeup that photographs
            <br />
            as good as it feels.
          </h1>
          <p className="hero-body">
            Bridal, editorial, and event makeup built around your skin,
            your schedule, and the way you actually want to look — not a
            trend. Based in San Francisco, available to travel.
          </p>
          <div className="hero-actions">
            <Link to="/contact#booking" className="btn btn-primary">
              Book a consultation
            </Link>
            <Link to="/portfolio" className="btn btn-ghost">
              See the portfolio
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80"
            alt="Bridal makeup application in soft natural light"
          />
        </div>
      </div>
    </section>
  );
}
