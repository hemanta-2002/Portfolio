import { profile } from '../data/content'
import Artwork from './Artwork'

const facts = [
  ['Name', profile.name],
  ['Location', profile.location],
  ['Email', profile.email],
  ['Availability', profile.availability],
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap about__inner">
        <div className="about__art">
          <Artwork variant="about" color="coral" label="2+ YRS" />
        </div>

        <div className="about__copy">
          <p className="eyebrow">About me</p>
          <h2 className="about__title">
            Designing with purpose,
            <br />
            creating with passion.
          </h2>
          <p className="about__text">
            I&apos;m a freelance graphic designer and UI/UX designer who loves
            turning ideas into clean, user-friendly and visually compelling
            work — for startups finding their voice and brands sharpening
            theirs.
          </p>

          <dl className="about__facts">
            {facts.map(([k, v]) => (
              <div key={k} className="about__fact">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <a href="#contact" className="btn btn-outline">
            More About Me
          </a>
        </div>
      </div>

      <style>{`
        .about { padding: 88px 0; background: var(--violet-soft); }
        .about__inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: center;
        }
        .about__art { max-width: 380px; }
        .about__title {
          font-size: clamp(28px, 4vw, 38px);
          margin-top: 14px;
        }
        .about__text {
          margin-top: 20px;
          color: var(--ink-soft);
          line-height: 1.7;
          max-width: 52ch;
        }
        .about__facts {
          margin: 30px 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 24px;
        }
        .about__fact dt {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--violet);
          font-weight: 700;
        }
        .about__fact dd {
          margin: 4px 0 0;
          font-weight: 600;
          font-size: 15px;
        }
        @media (max-width: 900px) {
          .about__inner { grid-template-columns: 1fr; gap: 40px; }
          .about__art { margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
