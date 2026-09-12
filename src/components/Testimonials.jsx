import "./Testimonials.css";

const quotes = [
  {
    text: "Marlowe listened to what I actually wanted instead of pushing a standard bridal look. Fourteen hours later, at the reception, I still looked like myself.",
    name: "Priya N.",
    context: "Bride, June wedding",
  },
  {
    text: "We were shooting outdoors in full sun for six hours straight. Every model's makeup held. That almost never happens.",
    name: "Dana K.",
    context: "Creative director, editorial shoot",
  },
  {
    text: "I told her I hate feeling like I'm wearing makeup, and she somehow made that work for a black-tie event.",
    name: "Els R.",
    context: "Gala guest",
  },
];

export default function Testimonials() {
  return (
    <section className="section section-raised testimonials">
      <div className="container">
        <p className="section-label">In their words</p>
        <h2>What it's like to sit in the chair.</h2>

        <div className="testimonials-grid">
          {quotes.map((q) => (
            <blockquote key={q.name} className="testimonial">
              <p>&ldquo;{q.text}&rdquo;</p>
              <footer>
                <span className="testimonial-name">{q.name}</span>
                <span className="testimonial-context">{q.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
