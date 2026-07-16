import { useState } from 'react'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Kind words</p>
          <h2>What Clients Say</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`quote ${active === i ? 'quote--active' : ''}`}
            >
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              className={`dot ${active === i ? 'dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials { padding: 96px 0; }
        .testimonials__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .quote {
          margin: 0;
          background: var(--card);
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          padding: 30px;
          transition: box-shadow .2s ease, border-color .2s ease;
        }
        .quote--active {
          border-color: var(--coral);
          box-shadow: 6px 6px 0 var(--coral-soft);
        }
        .quote blockquote {
          margin: 0 0 22px;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink);
        }
        .quote figcaption {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--violet-soft);
          color: var(--violet);
          display: grid;
          place-items: center;
          font-family: var(--font-display);
          font-weight: 700;
        }
        .quote figcaption strong { display: block; font-size: 14.5px; }
        .quote figcaption span { font-size: 13px; color: var(--ink-soft); }
        .testimonials__dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 36px;
        }
        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--line);
          border: none;
          padding: 0;
        }
        .dot--active { background: var(--coral); width: 22px; border-radius: 6px; }
        @media (max-width: 900px) {
          .testimonials__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
