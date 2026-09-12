import { Link } from "react-router-dom";
import { services } from "../siteConfig.js";
import "./Services.css";

export default function ServicesPage() {
  return (
    <>
      <section className="section services-page-hero">
        <div className="container">
          <p className="section-label">Services</p>
          <h1>Pricing, plainly.</h1>
          <p className="services-page-intro">
            Every session starts with a short conversation about your event
            and skin before anything is booked. Prices below are starting
            points — final quotes depend on travel, group size, and timing.
          </p>
        </div>
      </section>

      <section className="section services-page-list">
        <div className="container">
          {services.map((s) => (
            <div key={s.slug} className="service-detail">
              <div className="service-detail-main">
                <h2>{s.name}</h2>
                <p>{s.description}</p>
              </div>
              <div className="service-detail-meta">
                <span className="service-detail-price">{s.price}</span>
                <span className="service-detail-duration">{s.duration}</span>
                <Link
                  to={`/contact?service=${s.slug}#booking`}
                  className="btn btn-primary"
                >
                  Book {s.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-raised services-faq">
        <div className="container services-faq-inner">
          <h2>A few things people ask</h2>
          <div className="faq-item">
            <h3>Do you travel?</h3>
            <p>
              Yes — anywhere in the Bay Area is included in the base price;
              travel beyond that is quoted per event.
            </p>
          </div>
          <div className="faq-item">
            <h3>What if I need a group done (bridal party, shoot with multiple models)?</h3>
            <p>
              Send the group size and timeline through the contact form and
              I'll put together a custom quote — group bookings usually need
              a second artist for anything over 3 people.
            </p>
          </div>
          <div className="faq-item">
            <h3>What's your cancellation policy?</h3>
            <p>
              A deposit secures your date and is non-refundable within 14
              days of the event, but is fully transferable to a new date if
              plans change.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
