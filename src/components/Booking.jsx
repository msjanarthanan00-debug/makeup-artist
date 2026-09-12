import { InlineWidget } from "react-calendly";
import { useNavigate, useLocation } from "react-router-dom";
import { calendlyBaseUrl, services, getService } from "../siteConfig.js";
import "./Booking.css";

/**
 * Renders a Calendly inline widget.
 *
 * Pass `serviceSlug` (e.g. from a URL query param) to deep-link straight
 * into that service's event type. Falls back to Calendly's default
 * event-type picker if no slug is given or it doesn't match.
 */
export default function Booking({ serviceSlug }) {
  const service = getService(serviceSlug);
  const url = service ? `${calendlyBaseUrl}/${service.slug}` : calendlyBaseUrl;
  const navigate = useNavigate();
  const location = useLocation();

  const selectService = (slug) => (e) => {
    e.preventDefault();
    navigate(`${location.pathname}?service=${slug}#booking`);
  };

  return (
    <section id="booking" className="section booking">
      <div className="container">
        <p className="section-label">Ready when you are</p>
        <h2>Book your session.</h2>

        {service ? (
          <p className="booking-context">
            Booking <strong>{service.name}</strong> ({service.duration},{" "}
            {service.price}). Not the right service?{" "}
            <a href="#booking-picker">Choose another below</a>.
          </p>
        ) : (
          <p className="booking-context">
            Pick the service that fits, then find a time that works.
          </p>
        )}

        <div id="booking-picker" className="booking-picker">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`?service=${s.slug}#booking`}
              onClick={selectService(s.slug)}
              className={`booking-chip ${service?.slug === s.slug ? "is-active" : ""}`}
            >
              {s.name}
            </a>
          ))}
        </div>

        <div className="booking-widget">
          <InlineWidget
            url={url}
            styles={{ height: "700px" }}
            pageSettings={{
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "7a2438",
              textColor: "241318",
            }}
          />
        </div>

        <p className="booking-fineprint">
          Prefer to ask a question first? Use the message form below and
          I'll get back to you within a day.
        </p>
      </div>
    </section>
  );
}
