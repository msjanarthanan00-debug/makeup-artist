import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Booking from "../components/Booking.jsx";
import { formspreeId, site } from "../siteConfig.js";
import "./Contact.css";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const serviceSlug = searchParams.get("service") || undefined;

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formspreeId) {
      // No form service configured yet — fail loudly in dev rather than
      // silently pretending the message sent.
      console.warn(
        "VITE_FORMSPREE_ID is not set. Add it to your .env file to enable the contact form."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = e.target;

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="section contact-hero">
        <div className="container">
          <p className="section-label">Get in touch</p>
          <h1>Let's find your date.</h1>
          <p className="contact-hero-body">
            Ready to book? Use the calendar below. Have a question first —
            about pricing, travel, or whether I'm free on a specific
            date — send a message and I'll reply within a day.
          </p>
        </div>
      </section>

      <Booking serviceSlug={serviceSlug} />

      <section className="section section-raised contact-form-section">
        <div className="container contact-form-inner">
          <div className="contact-info">
            <h2>Ask a question</h2>
            <p>
              Prefer email or phone? Reach me directly at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                {site.phone}
              </a>
              .
            </p>
            <p className="contact-muted">{site.city}</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className="form-row">
              <label htmlFor="eventDate">Event date (if known)</label>
              <input id="eventDate" name="eventDate" type="date" />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="form-status form-status-success" role="status">
                Message sent — I'll get back to you within a day.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error" role="alert">
                Something went wrong sending that. Please try emailing{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
