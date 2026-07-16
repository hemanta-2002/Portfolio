import { process } from '../data/content'

const colors = ['violet', 'coral', 'yellow', 'teal', 'violet']

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How it happens</p>
          <h2>My Design Process</h2>
        </div>

        <div className="process__track">
          <div className="process__line" aria-hidden="true" />
          {process.map((p, i) => (
            <div key={p.n} className={`step step--${colors[i]}`}>
              <span className="step__num">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process { padding: 96px 0; background: var(--ink); color: #fff; }
        .process .eyebrow { justify-content: center; color: var(--yellow); }
        .process .eyebrow::before { background: var(--coral); }
        .process .section-head h2 { color: #fff; }
        .process__track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }
        .process__line {
          position: absolute;
          top: 22px;
          left: 4%;
          right: 4%;
          height: 2px;
          background: repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0 8px, transparent 8px 16px);
        }
        .step { position: relative; }
        .step__num {
          display: inline-flex;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 14px;
          color: var(--ink);
          margin-bottom: 18px;
        }
        .step--violet .step__num { background: var(--violet); color: #fff; }
        .step--coral .step__num { background: var(--coral); color: #fff; }
        .step--yellow .step__num { background: var(--yellow); }
        .step--teal .step__num { background: var(--teal); color: #fff; }
        .step h3 { font-size: 17px; margin-bottom: 8px; }
        .step p { margin: 0; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.65); }
        @media (max-width: 900px) {
          .process__track { grid-template-columns: 1fr 1fr; }
          .process__line { display: none; }
        }
        @media (max-width: 560px) {
          .process__track { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
