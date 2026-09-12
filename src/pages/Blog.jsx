import { posts } from "../data/posts.js";
import "./Blog.css";

export default function BlogPage() {
  return (
    <section className="section blog-page">
      <div className="container">
        <p className="section-label">Journal</p>
        <h1>Notes from behind the kit.</h1>

        <div className="blog-page-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-page-item">
              <img src={post.image} alt="" />
              <div>
                <p className="blog-preview-date">{post.date}</p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-read-more">Read more</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
