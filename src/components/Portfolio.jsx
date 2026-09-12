import "./Portfolio.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
    alt: "Soft bridal makeup, natural light",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1523264939339-c89f9dadde2a?auto=format&fit=crop&w=700&q=80",
    alt: "Editorial makeup with bold color",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=80",
    alt: "Close-up of eye makeup detail",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
    alt: "Glam makeup for a special event",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80",
    alt: "Bridal makeup application",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
    alt: "Portrait with editorial makeup",
  },
];

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <div className="container">
        <p className="section-label">Recent work</p>
        <h2>A few favorites.</h2>

        <div className="portfolio-grid">
          {images.map((img) => (
            <figure
              key={img.src}
              className={`portfolio-item ${img.tall ? "is-tall" : ""}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
