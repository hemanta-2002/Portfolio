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
            <article key={p.id} className="project">
              <div className="project__art">
                <Artwork variant="project" color={p.color} label={p.category} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.category} Design</p>
            </article>
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
        .project__art { border-radius: var(--radius); overflow: hidden; }
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
