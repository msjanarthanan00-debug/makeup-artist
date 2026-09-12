import { useRef, useState, useCallback, useEffect } from "react";
import "./BeforeAfter.css";

const DEFAULT_BEFORE =
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=60&sat=-100";
const DEFAULT_AFTER =
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80";

export default function BeforeAfter({
  before = DEFAULT_BEFORE,
  after = DEFAULT_AFTER,
  label = "Bridal glam",
}) {
  const [position, setPosition] = useState(50); // percent
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef(null);
  const dragging = useRef(false);

  // Keep the "before" image at the track's full width so it doesn't
  // squish as the reveal clip shrinks — only measure on mount/resize.
  const measure = useCallback(() => {
    if (trackRef.current) setTrackWidth(trackRef.current.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const updateFromClientX = useCallback((clientX) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 3));
  };

  return (
    <section className="section before-after">
      <div className="container">
        <p className="section-label">Proof, not promises</p>
        <h2>Drag to compare.</h2>
        <p className="ba-caption">{label}</p>

        <div
          className="ba-track"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerLeave={stopDragging}
        >
          <img src={after} alt="After makeup application" className="ba-img ba-after" />
          <div className="ba-clip" style={{ width: `${position}%` }}>
            <img
              src={before}
              alt="Before makeup application"
              className="ba-img ba-before"
              style={{ width: trackWidth ? `${trackWidth}px` : "100%" }}
            />
          </div>

          <div
            className="ba-handle"
            style={{ left: `${position}%` }}
            role="slider"
            tabIndex={0}
            aria-label="Comparison position"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
          >
            <span className="ba-handle-grip" aria-hidden="true" />
          </div>

          <span className="ba-tag ba-tag-before">Before</span>
          <span className="ba-tag ba-tag-after">After</span>
        </div>
      </div>
    </section>
  );
}
