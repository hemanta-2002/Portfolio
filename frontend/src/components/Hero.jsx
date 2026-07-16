import { profile } from '../data/content'
import Artwork from './Artwork'

const socials = ['Be', 'in']

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__text">
            I help brands and businesses craft meaningful visual experiences —
            turning fuzzy ideas into clean, purposeful design.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn-primary">
              View My Work
            </a>
            <a
              href="/Hemanta%20Thapa%20CV.pdf"
              download="Hemanta Thapa CV.pdf"
              className="btn btn-outline"
            >
              ↓ Download CV
            </a>
          </div>
          <div className="hero__socials">
            {socials.map((s) =>
              s === 'Be' ? (
                <a
                  key={s}
                  href="https://www.behance.net/150fbc96"
                  className="hero__social"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {s}
                </a>
              ) : s === 'in' ? (
                <a
                  key={s}
                  href="https://www.linkedin.com/in/hemanta-thapa-316b52238/"
                  className="hero__social"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {s}
                </a>
              ) : (
                <span key={s} className="hero__social">
                  {s}
                </span>
              )
            )}
          </div>
        </div>

        <div className="hero__art">
          <img
            src="/profile.jpg"
            alt="Hemanta Thapa"
            className="hero__photo"
          />
          <Artwork variant="hero" color="violet" label="AR" />
          <span className="hero__chip hero__chip--years">
            <strong>{profile.years}</strong> yrs exp.
          </span>
          <span className="hero__chip hero__chip--role">UI/UX · Brand</span>
        </div>
      </div>

      <style>{`
        .hero { padding: 64px 0 40px; overflow: visible; }
        .hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .hero__name {
          font-size: clamp(40px, 6vw, 68px);
          margin-top: 14px;
        }
        .hero__role {
          font-family: var(--font-mono);
          font-size: 16px;
          color: var(--coral);
          font-weight: 700;
          margin-top: 14px;
        }
        .hero__text {
          margin-top: 18px;
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 42ch;
        }
        .hero__actions {
          display: flex;
          gap: 14px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .hero__socials {
          display: flex;
          gap: 10px;
          margin-top: 34px;
        }
        .hero__social {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid var(--line);
          display: grid;
          place-items: center;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          color: var(--ink-soft);
          transition: all .18s ease;
        }
        .hero__social:hover {
          background: var(--ink);
          color: #fff;
          border-color: var(--ink);
          transform: translateY(-3px);
        }
        .hero__art {
          position: relative;
          max-width: none;
          margin-left: 0;
          overflow: visible;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-right: 24px;
        }
        .hero__chip {
          position: absolute;
          background: var(--card);
          border: 1.5px solid var(--ink);
          border-radius: 14px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 4px 4px 0 var(--ink);
        }
        .hero__chip strong {
          font-family: var(--font-display);
          font-size: 18px;
          color: var(--violet);
          margin-right: 4px;
        }
        .hero__chip--years {
          right: 36px;
          bottom: 10px;
          z-index: 60;
        }
        .hero__chip--role {
          /* position this chip above-left of the photo (in circled area) */
          right: 220px;
          top: -36px;
          color: var(--teal);
          font-family: var(--font-mono);
          z-index: 70;
          transform: translateY(0);
        }
        @media (max-width: 900px) {
          .hero__inner { grid-template-columns: 1fr; gap: 40px; }
          .hero__art { margin: 0 auto; max-width: 320px; }
        }
        .hero__photo {
          position: relative;
          display: block;
          transform: rotate(-3deg);
          width: 320px;
          max-width: 42vw;
          border-radius: 20px;
          border: 8px solid var(--card);
          box-shadow: 12px 12px 0 rgba(22,18,31,0.08);
          object-fit: cover;
          animation: float 6s ease-in-out infinite;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          margin-left: 24px;
        }

        .hero__photo:hover {
          transform: rotate(0deg) scale(1.02);
          box-shadow: 16px 16px 0 rgba(22,18,31,0.12);
        }

        @media (max-width: 900px) {
          .hero__photo { display: none; }
        }
      `}</style>
    </section>
  )
}
