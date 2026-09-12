import { Link } from "react-router-dom";
import "./About.css";

export default function AboutPage() {
  return (
    <>
      <section className="section about-hero">
        <div className="container about-hero-inner">
          <div>
            <p className="section-label">About</p>
            <h1>Hi, I'm Marlowe.</h1>
            <p className="about-hero-body">
              I've spent the last decade learning that good makeup is less
              about product and more about attention — noticing how someone
              holds their face when they're nervous, what "natural" means to
              them specifically, and how a look needs to move through a
              12-hour day, not just a 30-second photo.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=700&q=80"
            alt="Marlowe Reyes portrait"
          />
        </div>
      </section>

      <section className="section section-raised about-story">
        <div className="container about-story-inner">
          <div>
            <h2>Where it started</h2>
            <p>
              I trained at a small studio in Los Angeles before moving into
              freelance work — assisting on fashion week backstage teams,
              where speed and consistency matter more than any single
              flawless face. That's where I learned to build looks that
              survive quick changes, flash photography, and long days
              under hot lights.
            </p>
          </div>
          <div>
            <h2>Where it is now</h2>
            <p>
              Today the majority of my calendar is bridal work and editorial
              shoots, with special events filling the gaps. I keep my kit
              deliberately tight — a curated set of products I trust across
              skin tones and types, rather than a table full of everything.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <p className="section-label">How I work</p>
          <h2>Three things every client can expect.</h2>

          <div className="about-values-grid">
            <div>
              <h3>A real consultation</h3>
              <p>
                Before any trial, we talk through your event, your skin, and
                reference photos — so the trial itself is refinement, not
                guesswork.
              </p>
            </div>
            <div>
              <h3>Clean, sanitized kit</h3>
              <p>
                Brushes and sponges are sanitized between every client, and
                single-use tools are used where it matters — lips, under-eye,
                anywhere skin-to-product contact is closest.
              </p>
            </div>
            <div>
              <h3>A backup plan</h3>
              <p>
                For weddings and larger shoots, I build in buffer time and
                keep a trusted assistant on call, so one hiccup doesn't
                become everyone's problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-raised about-cta">
        <div className="container about-cta-inner">
          <h2>Let's talk about your event.</h2>
          <Link to="/contact#booking" className="btn btn-primary">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
