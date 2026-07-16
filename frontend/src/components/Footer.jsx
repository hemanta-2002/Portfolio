import { profile } from '../data/content'

const links = ['Home', 'About', 'Services', 'Work', 'Process', 'Contact']
const socials = ['Be', 'Dr', 'in']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <a href="#home" className="footer__brand">
          <span className="nav__mark">AR</span>
          {profile.name}
        </a>

        <p className="footer__copy">© 2026 {profile.name}. All rights reserved.</p>

        <nav className="footer__links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
        </nav>

        <div className="footer__right">
          <div className="footer__socials">
            {socials.map((s) => (
              <span key={s} className="hero__social">
                {s}
              </span>
            ))}
          </div>
          <a href="#home" className="footer__top" aria-label="Back to top">
            ↑
          </a>
        </div>
      </div>

      <style>{`
        .footer { padding: 40px 0; border-top: 1px solid var(--line); }
        .footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer__brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 700;
        }
        .footer__copy { font-size: 13.5px; color: var(--ink-soft); margin: 0; }
        .footer__links { display: flex; gap: 20px; font-size: 14px; color: var(--ink-soft); }
        .footer__links a:hover { color: var(--ink); }
        .footer__right { display: flex; align-items: center; gap: 14px; }
        .footer__socials { display: flex; gap: 8px; }
        .footer__top {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--ink);
          color: #fff;
          display: grid;
          place-items: center;
        }
        @media (max-width: 720px) {
          .footer__inner { justify-content: center; text-align: center; }
          .footer__links { order: 3; justify-content: center; width: 100%; }
        }
      `}</style>
    </footer>
  )
}
