import { site } from "../siteConfig.js";
import "./Instagram.css";

// Swap these for a real Instagram feed via a service like Behold.so or
// SnapWidget if you want the grid to update automatically. Hardcoded
// images are the zero-dependency option for a static site.
const posts = [
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1523264939339-c89f9dadde2a?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=60",
];

export default function Instagram() {
  return (
    <section className="section instagram">
      <div className="container">
        <p className="section-label">Follow along</p>
        <h2 className="instagram-handle">{site.instagramHandle}</h2>

        <div className="instagram-grid">
          {posts.map((src, i) => (
            <a
              key={src + i}
              href={`https://instagram.com/${site.instagramHandle.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="instagram-item"
            >
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
