import { useState } from 'react'
import { filters, projects } from '../data/content'
import Artwork from './Artwork'

export default function Portfolio() {
  const [active, setActive] = useState('All')

  // Limit portfolio to these categories only
  const allowed = ['UI/UX', 'Graphic']
  const localFilters = ['All', ...allowed]

  const visible =
    active === 'All'
      ? projects.filter((p) => allowed.includes(p.category))
      : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="portfolio">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>My Portfolio</h2>
        </div>

        <div className="portfolio__filters">
          {localFilters.map((f) => (
            <button
              key={f}
              className={`chip ${active === f ? 'chip--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {visible.map((p) => (
            <a
              key={p.id}
              className="project"
              href={p.href || '#'}
              target={p.href && p.href !== '#' ? '_blank' : undefined}
              rel={p.href && p.href !== '#' ? 'noreferrer noopener' : undefined}
            >
              {p.img ? (
                <div className="project__img">
                  <img src={encodeURI(p.img)} alt={p.title} />
                </div>
              ) : (
                <div className="project__art">
                  <Artwork variant="project" color={p.color} label={p.category} />
                </div>
              )}
              <h3>{p.title}</h3>
              <p>{p.category} Design</p>
            </a>
          ))}
        </div>

        <div className="services__more">
          <a href="#contact" className="btn btn-outline">
            View All Projects
          </a>
        </div>
      </div>

      <style>{`
        .portfolio { padding: 96px 0; background: var(--bg); }
        .portfolio__filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 44px;
        }
        .chip {
          border: 1.5px solid var(--line);
          background: var(--card);
          padding: 9px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          color: var(--ink-soft);
          transition: all .18s ease;
        }
        .chip:hover { border-color: var(--ink); color: var(--ink); }
        .chip--active {
          background: var(--ink);
          border-color: var(--ink);
          color: #fff;
        }
        .portfolio__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .project {
          display: block;
          padding: 24px;
          border-radius: var(--radius);
          background: var(--card);
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          border: 1px solid transparent;
          color: inherit;
          text-decoration: none;
        }
        .project:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(22, 18, 43, 0.08);
          border-color: rgba(100, 80, 255, 0.18);
        }
        .project:hover h3 { color: var(--ink); }
        .project:hover p { color: var(--ink-soft); }
        .project__art, .project__img { border-radius: var(--radius); overflow: hidden; }
        .project__img img { display: block; width: 100%; height: 220px; object-fit: cover; }
        .project h3 { margin-top: 16px; font-size: 16px; }
        .project p { margin: 4px 0 0; font-size: 13.5px; color: var(--ink-soft); font-family: var(--font-mono); }
        @media (max-width: 1000px) {
          .portfolio__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .portfolio__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
