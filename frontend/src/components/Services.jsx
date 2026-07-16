import { services } from '../data/content'

const icons = {
  violet: (
    <path d="M12 2 3 7l9 5 9-5-9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5" />
  ),
  coral: <rect x="3" y="4" width="18" height="13" rx="2" />,
  yellow: <path d="M8 2h8v4H8V2Zm-3 6h14v14H5V8Z" />,
  teal: <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />,
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What I do</p>
          <h2>Services</h2>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className={`service service--${s.color}`}>
              <span className="service__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {icons[s.color]}
                </svg>
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="services__more">
          <a href="#work" className="btn btn-outline">
            View All Services
          </a>
        </div>
      </div>

      <style>{`
        .services { padding: 96px 0; }
        .section-head { text-align: center; margin-bottom: 48px; }
        .section-head .eyebrow { justify-content: center; }
        .section-head .eyebrow::before { display: none; }
        .section-head h2 { font-size: clamp(28px, 4vw, 38px); margin-top: 10px; }
        .services__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .service {
          background: var(--card);
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          padding: 32px 26px;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .service:hover {
          transform: translateY(-6px);
          box-shadow: 8px 10px 0 var(--line);
        }
        .service__icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
        }
        .service__icon svg { width: 24px; height: 24px; }
        .service--violet .service__icon { background: var(--violet-soft); color: var(--violet); }
        .service--coral .service__icon { background: var(--coral-soft); color: var(--coral); }
        .service--yellow .service__icon { background: var(--yellow-soft); color: #a5730a; }
        .service--teal .service__icon { background: var(--teal-soft); color: var(--teal); }
        .service h3 { font-size: 19px; margin-bottom: 10px; }
        .service p { margin: 0; color: var(--ink-soft); font-size: 14.5px; line-height: 1.6; }
        .services__more { text-align: center; margin-top: 44px; }
        @media (max-width: 900px) {
          .services__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .services__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
