import { Link } from "react-router-dom";
import { posts } from "../data/posts.js";
import "./Blog.css";

export default function Blog() {
  const preview = posts.slice(0, 3);

  return (
    <section className="section blog-preview">
      <div className="container">
        <div className="blog-preview-head">
          <div>
            <p className="section-label">From the journal</p>
            <h2>Notes on skin, timing, and taste.</h2>
          </div>
          <Link to="/blog" className="services-see-all">
            Read the journal
          </Link>
        </div>

        <div className="blog-preview-grid">
          {preview.map((post) => (
            <article key={post.slug} className="blog-preview-card">
              <img src={post.image} alt="" />
              <p className="blog-preview-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
