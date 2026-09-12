import "./About.css";

export default function About() {
  return (
    <section className="section section-raised about">
      <div className="container about-inner">
        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
            alt="Marlowe Reyes at work with a makeup brush"
          />
        </div>
        <div className="about-copy">
          <p className="section-label">The artist</p>
          <h2>Ten years, one steady hand.</h2>
          <p>
            I started out backstage at fashion week fittings, doing quick
            changes between looks with three minutes and a compact of
            translucent powder. That pace taught me the thing that matters
            most in this work: makeup should hold up under motion, under
            flash, under a full day of being looked at — not just under a
            ring light.
          </p>
          <p>
            These days most of my work is bridal and editorial, but the
            approach hasn't changed. We talk about your skin, your event,
            and what "you, but done" actually looks like before a single
            brush comes out.
          </p>
        </div>
      </div>
    </section>
  );
}
