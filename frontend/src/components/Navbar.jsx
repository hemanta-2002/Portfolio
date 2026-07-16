import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#home" className="nav__brand">
          <span className="nav__mark">AR</span>
          {profile.name}
          <span className="nav__dot">.</span>
        </a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav__cta">
          Let&apos;s Talk
        </a>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Let&apos;s Talk
          </a>
        </div>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(252, 250, 255, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .nav--scrolled {
          border-color: var(--line);
          box-shadow: 0 6px 24px rgba(22,18,31,0.05);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          padding-bottom: 18px;
          gap: 24px;
        }
        .nav__brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
        }
        .nav__mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: var(--violet);
          color: #fff;
          display: grid;
          place-items: center;
          font-family: var(--font-mono);
          font-size: 12px;
          transform: rotate(-6deg);
        }
        .nav__dot { color: var(--coral); }
        .nav__links {
          display: flex;
          gap: 28px;
          font-size: 14.5px;
          font-weight: 500;
          color: var(--ink-soft);
        }
        .nav__links a { position: relative; padding: 4px 0; }
        .nav__links a:hover { color: var(--ink); }
        .nav__cta { padding: 11px 22px; font-size: 14px; }
        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 6px;
        }
        .nav__burger span {
          width: 22px;
          height: 2px;
          background: var(--ink);
        }
        .nav__mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .nav__links, .nav__cta { display: none; }
          .nav__burger { display: flex; }
          .nav__mobile {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 8px 20px 24px;
            border-top: 1px solid var(--line);
            background: var(--bg);
          }
          .nav__mobile a {
            padding: 12px 0;
            font-weight: 500;
            border-bottom: 1px solid var(--line);
          }
          .nav__mobile .btn { margin-top: 14px; justify-content: center; }
        }
      `}</style>
    </header>
  )
}
