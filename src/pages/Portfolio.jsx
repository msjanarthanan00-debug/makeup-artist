import { useState } from "react";
import "./Portfolio.css";

const categories = ["All", "Bridal", "Editorial", "Special Event"];

const images = [
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80", alt: "Soft bridal makeup", category: "Bridal", tall: true },
  { src: "https://images.unsplash.com/photo-1523264939339-c89f9dadde2a?auto=format&fit=crop&w=700&q=80", alt: "Editorial makeup with bold color", category: "Editorial" },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=80", alt: "Close-up of eye makeup detail", category: "Editorial" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80", alt: "Glam makeup for a special event", category: "Special Event", tall: true },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80", alt: "Bridal makeup application", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80", alt: "Portrait with editorial makeup", category: "Editorial" },
  { src: "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=700&q=80", alt: "Bridal portrait", category: "Bridal", tall: true },
  { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80", alt: "Evening event glam", category: "Special Event" },
  { src: "https://images.unsplash.com/photo-1512207736890-6ffed4b93140?auto=format&fit=crop&w=700&q=80", alt: "Editorial skin close-up", category: "Editorial" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <section className="section portfolio-page">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h1>Selected work.</h1>

        <div className="portfolio-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`portfolio-filter ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visible.map((img) => (
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
